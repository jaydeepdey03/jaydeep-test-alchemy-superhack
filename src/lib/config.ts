import {
    AlchemyAccountsUIConfig,
    createConfig,
} from "@account-kit/react";
import { sepolia } from "@account-kit/infra";
// import { sepolia } from 'viem/chains'
import { QueryClient } from "@tanstack/react-query";

const uiConfig: AlchemyAccountsUIConfig = {
    illustrationStyle: "outline",
    auth: {
        sections: [[{ type: "email" as const }], [{ type: "passkey" as const }]],
        addPasskeyOnSignup: false,
    },
};

export const config = createConfig(
    {
        apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!}`,
        chain: sepolia,
        ssr: false,
    },
    uiConfig
);

export const queryClient = new QueryClient();
