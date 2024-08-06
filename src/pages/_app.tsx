import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {AAContextProvider} from "@/context/AAContext";
import {AlchemyAccountProvider} from "@account-kit/react";
import {config, queryClient} from "@/lib/config";

export default function App({Component, pageProps}: AppProps) {
  return (
    <AlchemyAccountProvider config={config} queryClient={queryClient}>
      <AAContextProvider>
        <Component {...pageProps} />
      </AAContextProvider>
    </AlchemyAccountProvider>
  );
}
