"use client";

import { useSession } from "next-auth/react";

import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/Buttons";

const Home = () => {
  const { data: session } = useSession();

  return (
    <main>
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        <h1>Client Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
};

export default Home;
