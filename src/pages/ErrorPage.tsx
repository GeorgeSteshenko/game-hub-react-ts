import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading fontSize="2xl">Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Sorry, an unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
