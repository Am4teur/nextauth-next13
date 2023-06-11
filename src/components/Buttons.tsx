"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

export { LoginButton, LogoutButton, ProfileButton, RegisterButton };
