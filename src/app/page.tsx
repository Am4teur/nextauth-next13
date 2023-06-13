// "use client";

import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/Buttons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import styles from "./page.module.css";

const Home = async () => {
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);

  return (
    <main>
      <div className={styles.buttons}>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        <h1>Client Session</h1>
        <pre className={styles.jsonContainer}>
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </main>
  );
};

export default Home;
