import { Button, HStack} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={4}
      shadow="base"
      bgColor="blackAlpha.900"
      justifyContent="space-between"
      alignItems="center"
    >
     
      {/* Navigation Links */}
      <HStack spacing={8}>
        <Button
          variant="unstyled"
          color="white"
          _hover={{ color: "teal.300" }}
        >
          <Link to="/">Home</Link>
        </Button>
        <Button
          variant="unstyled"
          color="white"
          _hover={{ color: "teal.300" }}
        >
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button
          variant="unstyled"
          color="white"
          _hover={{ color: "teal.300" }}
        >
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
