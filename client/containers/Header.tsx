import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from '../components/Link';
import Image from 'next/image';

import Navbar from './Navbar';
import EarthIcon from '../components/icons/EarthIcon';
import SearchIcon from '@/assets/search.svg';
import ShareIcon from '@/assets/share.svg';

const menuItems = [
  'Human in Space',
  'Moon to Mars',
  'Earth',
  'Space Tech',
  'Solar System & Beyond',
  'STEM Engagement',
  'History',
  'Benefits to You',
];

export default function Header() {
  return (
    <VStack as="header" spacing={0} pt={`37.5px`} w="full" px={3}>
      <Link href="/">
        <Flex justifyContent="center" alignItems="center" height={`110px`}>
          <Box mr={4.5}>
            <EarthIcon width={`68px`} height={`68px`} />
          </Box>
          <Heading
            width={`242px`}
            fontSize="3xl"
            fontWeight={300}
            textAlign="center"
          >
            NASA
          </Heading>
        </Flex>
      </Link>
      <Navbar />
      <Flex w="full" height={`72px`} alignItems="center">
        <Spacer />
        <HStack spacing={7}>
          <Box>
            <Image src={SearchIcon} alt="logo" width={24} />
          </Box>
          <Box>
            <Image src={ShareIcon} alt="logo" width={24} />
          </Box>
          <Box>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  icon={<HamburgerIcon width={3} height={3} />}
                  aria-label="Open Menu"
                  p={0}
                  size="xs"
                />
              </PopoverTrigger>

              <PopoverContent
                border="none"
                boxShadow="base"
                width={`380px`}
              >
                <PopoverCloseButton fontSize="md" mt={1} />
                <PopoverBody borderRadius={`base`} px={3} pb={3} pt={6}>
                  {menuItems.map((item, index) => (
                    <Box
                      key={item}
                      py={1.5}
                      sx={{
                        borderTop: index === 0 ? 'none' : 'solid 2px #EFEFEF',
                      }}
                    >
                      <Link href="" fontSize="md" variant="fontWeight">
                        {item}
                      </Link>
                    </Box>
                  ))}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </HStack>
      </Flex>
    </VStack>
  );
}
