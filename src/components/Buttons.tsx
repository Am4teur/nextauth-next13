"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const LoginButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>;
};

const RegisterButton = () => {
  return <Link href="/register">Register</Link>;
};

const LogoutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};

const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

export { LoginButton, LogoutButton, ProfileButton, RegisterButton };
