import {createContext, ReactNode} from "react";
import {abi} from "@/lib/abi";
import {getContract} from "viem";
import {publicClient, walletClient} from "@/lib/client";
export const AAContext = createContext({});

export const AAProvider = ({children}: {children: ReactNode}) => {};
