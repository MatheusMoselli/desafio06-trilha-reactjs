import { Flex } from "@chakra-ui/react";

export const ContinentAnalytics: React.FC = ({ children }) => {
  return (
    <Flex
      px={{ sm: "2", lg: "0" }}
      justify={{ sm: "space-between", lg: "space-evenly" }}
    >
      {children}
    </Flex>
  );
};
