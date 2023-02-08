import { useState } from 'react';
import {
  Box,
  BoxProps,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import SectionTitle from '../components/SectionTitle';
import ArrowButton from '../components/ArrowButton';
import ImageSlider from '../components/ImageSlider';
import ImageDetail from './ImageDetail';

import { PhotoThumbItem } from '@/shared/types';

interface ImageGalleryProps extends BoxProps {
  title: string;
  subtitle: string;
  images: PhotoThumbItem[];
}

export default function ImageGallery({
  title,
  subtitle,
  images,
}: ImageGalleryProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<PhotoThumbItem>(images[0]);

  const handleOnSelectImage = (imageItem: PhotoThumbItem) => {
    setSelectedImage(imageItem);
    onOpen();
  };

  return (
    <Box w="full">
      <SectionTitle title={title} subtitle={subtitle} mb={2.5} />
      <Box w="full" h={`208px`} mb={3.5}>
        <ImageSlider images={images} onSelect={handleOnSelectImage} />
      </Box>
      <Flex w="full">
        <Spacer />
        <ArrowButton>View Gallery</ArrowButton>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedImage.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ImageDetail
              title={selectedImage.title}
              description={selectedImage.description}
              nasaId={selectedImage.nasaId}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
