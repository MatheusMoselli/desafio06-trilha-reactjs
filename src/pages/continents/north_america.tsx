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
        name="América do Norte"
        bg_image="/continents/north_america_bg.jpg"
      />
      <SimpleGrid
        minChildWidth="500px"
        spacing="16"
        py={{ sm: "6", lg: "20" }}
        px={{ sm: "2", lg: "36" }}
      >
        <ContinentDescription>
          A América do Norte está localizada no extremo norte das Américas e é
          composta por apenas três países: Estados Unidos, Canadá e México, além
          de territórios de domínios europeus, como a Groelândia (pertencente ao
          Reino da Dinamarca, com representação no parlamento) e Bermudas
          (dependência britânica).
        </ContinentDescription>

        <ContinentAnalytics>
          <AnalyticsItem number={3} text="países" />
          <AnalyticsItem number={256} text="línguas" />
          <AnalyticsItem number={50} text="cidades 100+" info_icon />
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
            city="Nova York"
            city_image="/cities/new_york.png"
            country="Estados Unidos"
            country_icon="/flags/usa.png"
          />

          <CityCard
            city="Vancouver"
            city_image="/cities/vancouver.png"
            country="Canadá"
            country_icon="/flags/canada.png"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
