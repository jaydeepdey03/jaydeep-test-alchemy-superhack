import {Button} from "@/components/ui/button";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {
  useAuthModal,
  useLogout,
  useSignerStatus,
  useUser,
} from "@account-kit/react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const user = useUser();
  const {openAuthModal} = useAuthModal();
  const signerStatus = useSignerStatus();
  const {logout} = useLogout();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <main className="flex min-h-screen flex-col items-center p-24 gap-4 justify-center text-center">
        {signerStatus.isInitializing ? (
          <>Loading...</>
        ) : user ? (
          <div className="flex flex-col gap-2 p-2">
            <p className="text-xl font-bold">Success!</p>
            You're logged in as {user.email ?? "anon"}.
            <Button onClick={() => logout()}>Log out</Button>
          </div>
        ) : (
          <Button onClick={openAuthModal}>Login</Button>
        )}
      </main>
    </div>
  );
}
