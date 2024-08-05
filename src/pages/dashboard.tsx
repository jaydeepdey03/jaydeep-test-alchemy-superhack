import {Button} from "@/components/ui/button";
import {EIP1193Provider, usePrivy, useWallets} from "@privy-io/react-auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {
  Chain,
  Client,
  createWalletClient,
  custom,
  CustomTransport,
  Hex,
} from "viem";
import {sepolia} from "viem/chains";
import {WalletClientSigner, type SmartAccountSigner} from "@alchemy/aa-core";
import {
  AlchemySmartAccountClient,
  createLightAccountAlchemyClient,
} from "@alchemy/aa-alchemy";

export default function Dashboard() {
  const {logout, user, ready} = usePrivy();
  const router = useRouter();
  useEffect(() => {
    if (ready && !user) {
      router.push("/");
    }
  }, [ready, user]);

  const {wallets} = useWallets();
  const embeddedWallet = wallets.find(
    (wallet) => wallet.walletClientType === "privy"
  );

  console.log(embeddedWallet, "embeddedWallet");

  const [eip1193PrivyProvider, setEip1193PrivyProvider] =
    useState<EIP1193Provider | null>(null);
  const [privySigner, setPrivySigner] = useState<SmartAccountSigner | null>(
    null
  );

  useEffect(() => {
    if (embeddedWallet) {
      embeddedWallet
        .getEthereumProvider()
        .then((provider) => setEip1193PrivyProvider(provider))
        .catch((err) => console.log(err, "error in getEthereumProvider"));
    }
  }, [embeddedWallet]);

  console.log(eip1193PrivyProvider, "eip1193PrivyProvider");

  useEffect(() => {
    if (eip1193PrivyProvider && embeddedWallet) {
      const privyClient = createWalletClient({
        account: embeddedWallet.address as Hex,
        chain: sepolia,
        transport: custom(eip1193PrivyProvider),
      });
      const privySigner = new WalletClientSigner(privyClient, "privy");
      setPrivySigner(privySigner);
    }
  }, [eip1193PrivyProvider, embeddedWallet]);

  //   const [alchemyClient, setAlchemyClient] = useState<AlchemySmartAccountClient<
  //     CustomTransport,
  //     Chain | undefined,
  //     LightAccount,
  //     LightAccountClientActions
  //   > | null>(null);
  const [alchemyClient, setAlchemyClient] = useState<any>(null);

  useEffect(() => {
    if (ready && eip1193PrivyProvider && embeddedWallet && privySigner) {
      (async function () {
        try {
          const client = await createLightAccountAlchemyClient({
            signer: privySigner,
            chain: sepolia,
            apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!,
            version: "v2.0.0",
          });
          setAlchemyClient(client);
        } catch (err: any) {
          console.log(err.message, "error in createLightAccountAlchemyClient");
        }
      })();
    }
  }, [privySigner, eip1193PrivyProvider, embeddedWallet, ready]);

  console.log(privySigner, "privysigner");

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <div className="text-3xl">Dashboard</div>
      <div className="text-2xl">Welcome {JSON.stringify(user, null, 2)}</div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
