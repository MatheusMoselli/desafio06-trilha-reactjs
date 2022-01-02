import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentDescription } from "../../components/Continent/ContinentDescription";
import { ContinentAnalytics } from "../../components/Continent/ContinentAnalytics";
import { AnalyticsItem } from "../../components/Continent/AnalyticsItem";
import { CityCard } from "../../components/Continent/CityCard";

export default () => {
  return (
    <>
      <ContinentBanner name="Oceania" bg_image="/continents/oceania_bg.jpg" />
      <SimpleGrid
        minChildWidth="500px"
        spacing="16"
        py={{ sm: "6", lg: "20" }}
        px={{ sm: "2", lg: "36" }}
      >
        <ContinentDescription>
          Oceania ou Oceânia é uma região geográfica composta por vários grupos
          de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo
          explorador francês Dumont d'Urville.
        </ContinentDescription>

        <ContinentAnalytics>
          <AnalyticsItem number={14} text="países" />
          <AnalyticsItem number={14} text="línguas" />
          <AnalyticsItem number={21} text="cidades 100+" info_icon />
        </ContinentAnalytics>
      </SimpleGrid>
      <Box py={{ sm: "6", lg: "20" }} px={{ sm: "2", lg: "36" }}>
        <Heading pb="10" fontWeight="normal" fontSize="3xl">
          Cidades +100
        </Heading>
        <SimpleGrid
          minChildWidth="256px"
          spacingY="12"
          spacingX={{ sm: "0", md: "2", lg: "12" }}
          justifyItems="center"
        >
          <CityCard
            city="Ilha do Kangaroo"
            city_image="/cities/kangaroo_island.png"
            country="Austrália"
            country_icon="/flags/australia.png"
          />

          <CityCard
            city="Sidney"
            city_image="/cities/sidney.png"
            country="Austrália"
            country_icon="/flags/australia.png"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
