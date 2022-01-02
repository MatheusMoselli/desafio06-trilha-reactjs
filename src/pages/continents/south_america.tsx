import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentDescription } from "../../components/Continent/ContinentDescription";
import { ContinentAnalytics } from "../../components/Continent/ContinentAnalytics";
import { AnalyticsItem } from "../../components/Continent/AnalyticsItem";
import { CityCard } from "../../components/Continent/CityCard";

export default () => {
  return (
    <>
      <ContinentBanner
        name="América do Sul"
        bg_image="/continents/south_america_bg.jpg"
      />
      <SimpleGrid
        minChildWidth="500px"
        spacing="16"
        py={{ sm: "6", lg: "20" }}
        px={{ sm: "2", lg: "36" }}
      >
        <ContinentDescription>
          A América do Sul é um continente que compreende a porção meridional da
          América. Também é considerada um subcontinente do continente
          americano. A sua extensão é de 17 819 100 km², abrangendo 12% da
          superfície terrestre e 6% da população mundial.
        </ContinentDescription>

        <ContinentAnalytics>
          <AnalyticsItem number={13} text="países" />
          <AnalyticsItem number={472} text="línguas" />
          <AnalyticsItem number={13} text="cidades 100+" info_icon />
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
            city="Rio de Janeiro"
            city_image="/cities/rj.png"
            country="Brasil"
            country_icon="/flags/brazil.png"
          />

          <CityCard
            city="São Paulo"
            city_image="/cities/sp.png"
            country="Brazil"
            country_icon="/flags/brazil.png"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
