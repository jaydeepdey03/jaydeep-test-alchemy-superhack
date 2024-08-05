import { defineChain } from 'viem'

export const virtual_base_sepolia = defineChain({
    id: 56879,
    name: 'Virtual Base Sepolia',
    nativeCurrency: { name: 'VETH', symbol: 'VETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://virtual.base-sepolia.rpc.tenderly.co/c3462e3a-2ff3-4e80-afa5-558d69251ebf'] }
    },
    blockExplorers: {
        default: {
            name: 'Tenderly Explorer',
            url: 'https://virtual.base-sepolia.rpc.tenderly.co/97364b88-a8e4-42ba-9999-e9da694c42a5'
        }
    },
})