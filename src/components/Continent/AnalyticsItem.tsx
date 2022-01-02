import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import { ReactElement } from "react";
import { FiInfo } from "react-icons/fi";

interface Props {
  number: number;
  text: string;
  info_icon?: boolean;
}

export const AnalyticsItem: React.FC<Props> = ({ number, text, info_icon }) => {
  if (info_icon) {
    return (
      <Box>
        <Heading
          color="yellow.500"
          fontWeight="semibold"
          textAlign="center"
          fontSize="5xl"
        >
          {number}
        </Heading>
        <Flex align="center" justify="center">
          <Text fontWeight="semibold" textAlign="center" fontSize="xl" mr="2">
            {text}
          </Text>
          <Tooltip
            fontSize="md"
            label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo."
          >
            <span>
              <FiInfo />
            </span>
          </Tooltip>
        </Flex>
      </Box>
    );
  }

  return (
    <Box>
      <Heading
        color="yellow.500"
        fontWeight="semibold"
        textAlign="center"
        fontSize="5xl"
      >
        {number}
      </Heading>
      <Text fontWeight="semibold" textAlign="center" fontSize="xl">
        países
      </Text>
    </Box>
  );
};
