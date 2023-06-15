import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import { useState } from "react";

const Background = ({ children }: any) => (
  <Box
    display="flex"
    flex="1 1 auto"
    justifyContent="center"
    alignItems="center"
    backgroundImage="url('/blurry-gradient-haikei.svg')" // coming from /public folder
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    backgroundAttachment="fixed"
    width="100%"
    height="100vh"
    color="white"
  >
    {children}
  </Box>
);

interface IDivicerProps {
  word?: string;
}

const Divider = ({ word }: IDivicerProps) => {
  return (
    <>
      {word ? (
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="center"
          gap={2}
          mb={4}
        >
          <Box w="100%" border="solid" borderBottom={2} rounded="full"></Box>
          <Text>Or</Text>
          <Box w="100%" border="solid" borderBottom={2} rounded="full"></Box>
        </Flex>
      ) : (
        <Box
          w="100%"
          border="solid"
          borderBottom={2}
          rounded="full"
          mb={6}
        ></Box>
      )}
    </>
  );
};

const Auth: NextPage = ({ providers }: any) => {
  const [authType, setAuthType] = useState("Login");
  const oppAuthType: { [key: string]: string } = {
    Login: "Register",
    Register: "Login",
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Providers SignIn Buttons
   * Get Providers server side via getServerSideProps
   */
  const ProvidersButtons = ({ providers }: any) => (
    <Flex direction="column" w="100%"></Flex>
  );

  /**
   * Redirect Home - NextJS Router
   * (Instead of redirecting to Home page, it could be a success Register or Login page)
   */
  const redirectToHome = () => {};

  /**
   * Register
   */
  const registerUser = async () => {};

  /**
   * Login
   */
  const loginUser = async () => {};

  /**
   * Submit Form (Login or Register)
   */
  const formSubmit = (actions: any) => {};

  return (
    <Background>
      <Box
        w="420px"
        rounded="md"
        bgGradient="linear(to-r, #ffffff80, #ffffff20)"
        p={12}
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading size="xl">{authType}</Heading>
          <Text fontSize="sm" mb={6}>
            {authType === "Login"
              ? "Not registered yet? "
              : "Already have an account? "}
            <button onClick={() => setAuthType(oppAuthType[authType])}>
              <Text as="u">{oppAuthType[authType]}</Text>
            </button>
          </Text>

          <Divider />

          <ProvidersButtons providers={providers} />

          <Divider word="Or" />

          <Formik
            initialValues={{}} // { email: "", password: "" }
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(_, actions) => {
              formSubmit(actions);
            }}
          >
            {(props) => (
              <Form style={{ width: "100%" }}>
                <Box display="flex" flexDirection="column" w="100%" mb={4}>
                  {authType === "Register" && (
                    <Field name="username">
                      {() => (
                        <FormControl isRequired mb={6}>
                          <FormLabel htmlFor="username">Username:</FormLabel>
                          <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            _placeholder={{ color: "gray.200" }}
                            background={"blue.600"}
                          />
                        </FormControl>
                      )}
                    </Field>
                  )}
                  <Field name="email">
                    {() => (
                      <FormControl isRequired mb={6}>
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          _placeholder={{ color: "gray.200" }}
                          background={"blue.600"}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {() => (
                      <FormControl isRequired mb={3}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Password"
                          _placeholder={{ color: "gray.200" }}
                          background={"blue.600"}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={6}
                    bg="blue.400"
                    _hover={{ bg: "blue.200" }}
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    {authType}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Flex>
      </Box>
    </Background>
  );
};

export default Auth;

/**
 * Server side API call
 */
