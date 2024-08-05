import { virtual_base_sepolia } from '@/tenderly.config';
import { createPublicClient, createWalletClient, http, custom, Hex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts';
import { baseSepolia, mainnet } from 'viem/chains'


export const account = privateKeyToAccount(
    process.env.NEXT_PUBLIC_PRIVATE_KEY! as Hex
);


export const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
})

export const walletClient = createWalletClient({
    chain: baseSepolia,
    transport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
})

