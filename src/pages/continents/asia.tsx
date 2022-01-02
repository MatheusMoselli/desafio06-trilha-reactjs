import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentDescription } from "../../components/Continent/ContinentDescription";
import { ContinentAnalytics } from "../../components/Continent/ContinentAnalytics";
import { AnalyticsItem } from "../../components/Continent/AnalyticsItem";
import { CityCard } from "../../components/Continent/CityCard";

export default () => {
  return (
    <>
      <ContinentBanner name="Asia" bg_image="/continents/asia_bg.jpg" />
      <SimpleGrid
        minChildWidth="500px"
        spacing="16"
        py={{ sm: "6", lg: "20" }}
        px={{ sm: "2", lg: "36" }}
      >
        <ContinentDescription>
          A Ásia é o maior continente em área terrestre do mundo, estando boa
          parte do continente localizado no Hemisfério Norte. Além de ser o mais
          extenso, é também o mais populoso, habitando nele cerca de três
          quintos da população mundial. A Ásia é multicultural, abrigando
          diversas culturas, etnias, religiões e tradições.
        </ContinentDescription>

        <ContinentAnalytics>
          <AnalyticsItem number={49} text="países" />
          <AnalyticsItem number={2301} text="línguas" />
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
            city="Tokyo"
            city_image="/cities/tokyo.png"
            country="Japão"
            country_icon="/flags/japan.png"
          />

          <CityCard
            city="Hong Kong"
            city_image="/cities/hong_kong.png"
            country="China"
            country_icon="/flags/china.png"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
