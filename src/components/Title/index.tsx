import { Heading, HeadingProps } from "@chakra-ui/react";

interface Props extends HeadingProps {}

export const Title: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Heading
      {...rest}
      fontWeight="normal"
      fontSize={{
        sm: "xl",
        lg: "3xl",
      }}
    >
      {children}
    </Heading>
  );
};
