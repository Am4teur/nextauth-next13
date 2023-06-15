import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Heading>Home</Heading>
      {session ? (
        <>
          <Text>
            Signed in as <br />
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <br />
          </Text>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <Flex direction="column" alignItems="center" justifyContent="center">
            Not signed in <br />
            <Button onClick={() => signIn()}>Sign in</Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Home;
