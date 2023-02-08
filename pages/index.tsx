import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import ImageGallery from '@/client/containers/ImageGallery';
import BreadCrumbs from '@/client/components/BreadCrumb';
import Divider from '@/client/components/Divider';
import SectionTitle from '@/client/components/SectionTitle';
import ImageUploadBox from '@/client/containers/ImageUploadBox';
import AstronautImage from '@/assets/astronaut.jpg';
import PlanetImage from '@/assets/planet.svg';

import { getFeaturedImages } from '@/shared/nasa.service';
import { PhotoThumbItem } from '@/shared/types';

import { UploadContextProvider } from '@/client/contexts/UploadContextProvider';

export default function Home({
  featuredImages,
}: {
  featuredImages: PhotoThumbItem[];
}) {
  return (
    <UploadContextProvider>
      <Head>
        <title>NASA</title>
        <meta name="description" content="NASA rover images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="full" py={3} px={2}>
        <Box as="section">
          <BreadCrumbs items={['Galleries', 'Space Database']} mb={2.5} />
          <Flex
            borderRadius="md"
            overflow="hidden"
            width={`516px`}
            height={`671px`}
            justifyContent="center"
          >
            <Image
              src={AstronautImage}
              alt="Astronaut"
              width={671}
              height={671}
              style={{
                objectFit: 'cover',
              }}
            />
          </Flex>
        </Box>
        <Box
          as="section"
          ml={3}
          p={5}
          w="full"
          borderRadius="base"
          boxShadow="base"
        >
          <SectionTitle
            title={`NASA’s Space Database`}
            subtitle={`Our Public Gallery for Outer Space`}
          >
            <Box mr={2.5}>
              <Image src={PlanetImage} alt="Planet" width={108} />
            </Box>
          </SectionTitle>
          <Divider my={2} />
          <Box fontSize="md" fontWeight="normal" maxW={`877px`} mb={5}>
            We want to see space through your eyes! Take photos and upload them
            to our public library. Our goal is to provide the largest database
            of quality images. Space is amazing! Let’s capture it together!
          </Box>
          <ImageGallery
            title={`Featured Images`}
            subtitle={`Scroll to see more`}
            images={featuredImages}
          />
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        direction="column"
        alignItems="center"
        width="full"
        height={`860px`}
        position="relative"
        sx={{
          background: `url('/moon.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        mt={4}
      >
        <ImageUploadBox />
      </Flex>
    </UploadContextProvider>
  );
}

export async function getStaticProps() {
  let featuredImages: PhotoThumbItem[] = [
    {
      description: 'Rover team members with the Mars Exploration Rover.',
      href: 'https://images-assets.nasa.gov/image/PIA04826/PIA04826~thumb.jpg',
      nasaId: 'PIA04826',
      title: 'Rover Team',
    },
  ];

  try {
    featuredImages = await getFeaturedImages();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      featuredImages,
    },
    revalidate: 86400, //revalidate once a day
  };
}
