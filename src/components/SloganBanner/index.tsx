import {
  Flex,
  Stack,
  Heading,
  Box,
  Img,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const SloganBanner: React.FC = () => {
  const isLargeScreen = useBreakpointValue({
    sm: false,
    lg: true,
  });

  return (
    <Flex
      spacing="2"
      bgImage="/background.png"
      h="80"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="space-evenly"
    >
      <Stack spacing="2" px={["5", "5", "0"]}>
        <Heading color="gray.50" fontWeight="normal" fontSize="3xl">
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text color="gray.50" fontSize="md">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      {isLargeScreen && (
        <Box marginBottom="-100px">
          <Img src="/airplane.svg" alt="airplane" />
        </Box>
      )}
    </Flex>
  );
};
