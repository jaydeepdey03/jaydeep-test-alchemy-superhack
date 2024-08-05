import {Button} from "@/components/ui/button";
import {usePrivy} from "@privy-io/react-auth";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import {useEffect} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const {login, user, ready} = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && user) {
      router.push("/dashboard");
    }
  }, [ready, user]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Button onClick={login}>Login</Button>
    </div>
  );
}
