import { Box, Img, Flex, Stack, Heading, Text } from "@chakra-ui/react";

interface Props {
  city: string;
  city_image: string;
  country: string;
  country_icon: string;
}

export const CityCard: React.FC<Props> = ({
  city,
  city_image,
  country,
  country_icon,
}) => {
  return (
    <Box
      border="1px"
      borderColor="yellow.500"
      borderStyle="solid"
      borderRadius="8px"
    >
      <Img src={city_image} w="100%" h="auto" />
      <Flex p="6" justify="space-between" align="center">
        <Stack spacing="2">
          <Heading fontWeight="semibold" fontSize="xl">
            {city}
          </Heading>
          <Text color="gray.500">{country}</Text>
        </Stack>
        <Box w="30px" h="30px" bgImage={country_icon} />
      </Flex>
    </Box>
  );
};
