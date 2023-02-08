import { Heading, Box, Flex, FlexProps } from '@chakra-ui/react';

interface SectionTitleProps extends FlexProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  children,
  title,
  subtitle,
  ...props
}: SectionTitleProps) {
  return (
    <Flex w="full" justifyContent="center" {...props}>
      {children}
      <Flex flex={1} direction="column" justifyContent="center">
        <Heading as="h2" fontSize="xl" fontWeight="bold">
          {title}
        </Heading>
        <Box color="link" fontSize="md" fontWeight="medium">
          {subtitle}
        </Box>
      </Flex>
    </Flex>
  );
}
