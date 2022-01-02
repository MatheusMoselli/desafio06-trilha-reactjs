import { Text } from "@chakra-ui/react";

export const ContinentDescription: React.FC = ({ children }) => {
  return (
    <Text fontSize="xl" lineHeight="9" textAlign="justify">
      {children}
    </Text>
  );
};
