import {
  Box,
  Divider,
  Flex,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCocktail, FaUmbrellaBeach, FaBuilding } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdMuseum } from "react-icons/md";
import { TravelTypeItem } from "../components/TravelTypeItem";
import { Title } from "../components/Title";
import { ContinentSlide } from "../components/ContinentsSlide";
import { SloganBanner } from "../components/SloganBanner";

export default () => {
  return (
    <>
      <SloganBanner />

      <SimpleGrid
        gap="2"
        py="20"
        px={["5", "5", "0"]}
        columns={{
          sm: 2,
          lg: 5,
        }}
      >
        <TravelTypeItem icon={FaCocktail}>vida noturnal</TravelTypeItem>
        <TravelTypeItem icon={FaUmbrellaBeach}>praia</TravelTypeItem>
        <TravelTypeItem icon={FaBuilding}>moderno</TravelTypeItem>
        <TravelTypeItem icon={MdMuseum}>clássico</TravelTypeItem>
        <TravelTypeItem icon={BiWorld}>e mais...</TravelTypeItem>
      </SimpleGrid>

      <Divider w="24" mx="auto" />

      <Box textAlign="center" py="12">
        <Title>Vamos nessa?</Title>
        <Title>Então escolha seu continente</Title>
      </Box>

      <Box
        my="9"
        mx={{
          sm: "0",
          lg: "14",
        }}
      >
        <ContinentSlide />
      </Box>
    </>
  );
};
