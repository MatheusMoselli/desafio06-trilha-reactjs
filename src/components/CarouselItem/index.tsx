import { Box, Heading, Img, Stack, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export const CarouselItem: React.FC<Props> = ({ title, subtitle, image }) => {
  return (
    <Link href={image.split("_slide")[0]} passHref>
      <Flex
        as="a"
        h="450px"
        overflow="hidden"
        position="relative"
        align="center"
        justify="center"
      >
        <Img
          src={image}
          position="absolute"
          left={0}
          top={0}
          w="100%"
          h="100%"
          filter="brightness(50%)"
        />
        <Stack spacing="4" position="relative">
          <Heading color="gray.50" textAlign="center">
            {title}
          </Heading>
          <Text color="gray.50">{subtitle}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};
