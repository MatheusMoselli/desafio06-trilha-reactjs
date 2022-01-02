import { Flex, Heading, Img } from "@chakra-ui/react";

interface Props {
  name: string;
  bg_image: string;
}

export const ContinentBanner: React.FC<Props> = ({ name, bg_image }) => {
  return (
    <Flex
      as="a"
      h={{ sm: "200px", lg: "575px" }}
      overflow="hidden"
      position="relative"
    >
      <Img
        src={bg_image}
        position="absolute"
        left={0}
        top={0}
        w="100%"
        h="100%"
        filter="brightness(50%)"
      />
      <Heading
        color="gray.50"
        position="relative"
        alignSelf={{
          sm: "center",
          lg: "self-end",
        }}
        mx={{
          sm: "auto",
          lg: "0",
        }}
        py="14"
        px="36"
        fontWeight="semibold"
      >
        {name}
      </Heading>
    </Flex>
  );
};
