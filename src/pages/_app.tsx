import {AAProvider} from "@/context/AAContext";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {PrivyProvider} from "@privy-io/react-auth";
import {WagmiProvider} from "wagmi";
import {config} from "@/lib/config";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function App({Component, pageProps}: AppProps) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <PrivyProvider
          appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
          config={{
            /* Replace this with your desired login methods */
            loginMethods: ["email"],
            /* Replace this with your desired appearance configuration */
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
              noPromptOnSignature: true,
            },
          }}
        >
          {/* Your app's components */}

          {/* <AAProvider> */}
          <Component {...pageProps} />
          {/* </AAProvider> */}
        </PrivyProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
