import { ElementType } from "react";
import {
  Box,
  Circle,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface Props {
  icon: ElementType;
  children: string;
}

export const TravelTypeItem: React.FC<Props> = ({ icon, children }) => {
  const isLargeScreen = useBreakpointValue({
    sm: false,
    lg: true,
  });

  return (
    <Flex
      justify="center"
      flexDir={{
        sm: "row",
        lg: "column",
      }}
      align="center"
      gap="12px"
    >
      {isLargeScreen && (
        <Icon
          as={icon}
          fontSize="7xl"
          color="yellow.500"
          display="block"
          mx="auto"
        />
      )}

      {!isLargeScreen && <Circle size="15px" bgColor="yellow.500" />}
      <Text
        fontWeight="semibold"
        fontSize="lg"
        mt={{
          sm: "0",
          lg: "4",
        }}
      >
        {children}
      </Text>
    </Flex>
  );
};
