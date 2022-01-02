import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentDescription } from "../../components/Continent/ContinentDescription";
import { ContinentAnalytics } from "../../components/Continent/ContinentAnalytics";
import { AnalyticsItem } from "../../components/Continent/AnalyticsItem";
import { CityCard } from "../../components/Continent/CityCard";

export default () => {
  return (
    <>
      <ContinentBanner name="África" bg_image="/continents/africa_bg.jpg" />
      <SimpleGrid
        minChildWidth="500px"
        spacing="16"
        py={{ sm: "6", lg: "20" }}
        px={{ sm: "2", lg: "36" }}
      >
        <ContinentDescription>
          A África é o terceiro continente mais extenso com cerca de 30 milhões
          de quilômetros quadrados, cobrindo 20,3% da área total da terra firme
          do planeta. É o segundo continente mais populoso da Terra com cerca de
          um bilhão de pessoas, representando cerca de um sétimo da população
          mundial, e 54 países independentes.
        </ContinentDescription>

        <ContinentAnalytics>
          <AnalyticsItem number={54} text="países" />
          <AnalyticsItem number={2344} text="línguas" />
          <AnalyticsItem number={2} text="cidades 100+" info_icon />
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
            city="Durban"
            city_image="/cities/durban.png"
            country="África do Sul"
            country_icon="/flags/south_africa.png"
          />

          <CityCard
            city="Cape Town"
            city_image="/cities/cape_town.png"
            country="África do Sul"
            country_icon="/flags/south_africa.png"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
