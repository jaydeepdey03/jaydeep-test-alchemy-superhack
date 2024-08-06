import {Button} from "@/components/ui/button";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import {useEffect} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <p>home</p>
    </div>
  );
}
