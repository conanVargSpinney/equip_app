import { useRouter } from "next/router";
import { SessionProvider, useSession } from "next-auth/react";

export default function useUserRedirect(){

const router = useRouter();

  const {status} = useSession({
    required: true,
    onUnauthenticated(){
      router.push("/enter");
    },
  })
}