import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from '../components/Link';

const links = [
  { name: 'Missions', link: '/missions' },
  { name: 'Galleries', link: '/galleries' },
  { name: 'NASA Audiences', link: '/audiences' },
  { name: 'Downloads', link: '/downloads' },
  { name: 'NASA TV', link: '/tv' },
  { name: 'About', link: '/about' },
];

export default function Navbar() {
  return (
    <Flex direction="column" w={`1226px`} alignItems="center">
      <HStack
        justifyContent="center"
        alignItems="center"
        pb={3.5}
        spacing={7}
        pt={3}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            minW={`135px`}
            textAlign="center"
            fontSize="md"
            fontWeight="normal"
            variant='normal'
          >
            {link.name}
          </Link>
        ))}
      </HStack>
      <Box height={`4px`} borderRadius="xs" bg="bg" w="full" />
    </Flex>
  );
}
