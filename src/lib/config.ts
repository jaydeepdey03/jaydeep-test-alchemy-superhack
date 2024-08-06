import {
    AlchemyAccountsUIConfig,
    cookieStorage,
    createConfig,
} from "@account-kit/react";
import { sepolia } from "@account-kit/infra";
// import { sepolia } from 'viem/chains'
import { QueryClient } from "@tanstack/react-query";

const uiConfig: AlchemyAccountsUIConfig = {
    illustrationStyle: "linear",
    auth: {
        sections: [[{ type: "email" as const }], [{ type: "passkey" as const }]],
        addPasskeyOnSignup: true,
    },
};

export const config = createConfig(
    {
        apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!}`,
        chain: sepolia,
        ssr: true,
        storage: cookieStorage,
    },
    uiConfig
);

export const queryClient = new QueryClient();
