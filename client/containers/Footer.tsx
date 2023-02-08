import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import EarthIcon from '../components/icons/EarthIcon';
import Link from '../components/Link';

const links = [
  { name: 'Contact Us', link: '/contact' },
  { name: 'About Us', link: '/about' },
  { name: 'Privacy and Policy', link: '/privacy' },
  { name: 'Sitemap', link: '/sitemap' },
  { name: 'Terms&Conditions', link: '/terms' },
];

export default function Footer() {
  return (
    <Flex
      w="full"
      height={`76px`}
      alignItems="center"
      bg="footer"
      pl={6}
      pr={3}
      color="white"
    >
      <HStack spacing={10}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            textAlign="center"
            fontSize="xs"
            fontWeight="normal"
            variant="none"
          >
            {link.name}
          </Link>
        ))}
      </HStack>
      <Spacer />
      <Flex justifyContent="center" alignItems="center" height="full">
        <Box mr={1.5} color="white">
          <EarthIcon width={`28px`} height={`28px`} fill="white" />
        </Box>
        <Box fontSize="md" fontWeight="light" textAlign="center">
          NASA
        </Box>
      </Flex>
    </Flex>
  );
}
