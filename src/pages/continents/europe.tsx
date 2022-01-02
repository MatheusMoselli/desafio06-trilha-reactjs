import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentDescription } from "../../components/Continent/ContinentDescription";
import { ContinentAnalytics } from "../../components/Continent/ContinentAnalytics";
import { AnalyticsItem } from "../../components/Continent/AnalyticsItem";
import { CityCard } from "../../components/Continent/CityCard";

export default () => {
  return (
    <>
      <ContinentBanner name="Europa" bg_image="/continents/europe_bg.jpg" />
      <SimpleGrid
        minChildWidth="500px"
        spacing="16"
        py={{ sm: "6", lg: "20" }}
        px={{ sm: "2", lg: "36" }}
      >
        <ContinentDescription>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas do montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </ContinentDescription>

        <ContinentAnalytics>
          <AnalyticsItem number={50} text="países" />
          <AnalyticsItem number={60} text="línguas" />
          <AnalyticsItem number={27} text="cidades 100+" info_icon />
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
            city="Londres"
            city_image="/cities/london.png"
            country="Reino Unido"
            country_icon="/flags/united_kingdom.png"
          />

          <CityCard
            city="Paris"
            city_image="/cities/paris.png"
            country="França"
            country_icon="/flags/france.png"
          />

          <CityCard
            city="Roma"
            city_image="/cities/rome.png"
            country="Itália"
            country_icon="/flags/italy.png"
          />

          <CityCard
            city="Praga"
            city_image="/cities/prague.png"
            country="República Tcheca"
            country_icon="/flags/zcech_republic.png"
          />

          <CityCard
            city="Amsterdã"
            city_image="/cities/amsterdam.png"
            country="Holanda"
            country_icon="/flags/netherlands.png"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
