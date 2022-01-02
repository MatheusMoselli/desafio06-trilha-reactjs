import { Flex, Icon, Img, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";
import NextLink from "next/link";

export const Header: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <Flex align="center" justify="space-between" py="6" px="36">
      {asPath !== "/" && (
        <NextLink href="/" passHref>
          <Link as="a" display="flex" alignItems="center">
            <Icon as={RiArrowLeftSLine} fontSize="3xl" />
          </Link>
        </NextLink>
      )}
      <Img src="/logo.svg" alt="world trip logo" mx="auto" />
    </Flex>
  );
};
