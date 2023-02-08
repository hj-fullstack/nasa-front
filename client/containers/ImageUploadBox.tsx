import {
  Box,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Spacer,
} from '@chakra-ui/react';
import Divider from '../components/Divider';
import ImageUpload from './ImageUpload';
import { useUploadContext } from '../hooks/useUploadePhotos';

export default function ImageUploadBox() {
  const { images } = useUploadContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w={`790px`}
        h={`353px`}
        bg="white"
        borderRadius="base"
        boxShadow="base"
        px={5}
        py={3.5}
      >
        <Box fontSize="2xl" fontWeight="bold" mb={1.5}>
          Upload Your Photos
        </Box>
        <Divider mb={1.5} />
        <Box fontSize="sm" fontWeight="normal" mb={4.5}>
          Select up to 5 high quality images to upload into our database. If
          your image is selected, a member of our team will contact you for
          atribution.
        </Box>
        <Flex justifyContent="center" alignItems="center">
          <ImageUpload />
        </Flex>
      </Box>

      {images.length > 0 ? (
        <Flex alignItems="center" mt={2}>
          <Box color="white">{`Total number of uploaded images : ${images.length}`} </Box>
          <Spacer />
          <Button color="white" onClick={onOpen} size="sm">
            View images
          </Button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered size="lg">
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Number</Th>
                        <Th>Name</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {images.map((item, index) => (
                        <Tr key={item.name}>
                          <Td>{index + 1}</Td>
                          <Td>{item.name}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      ) : null}
    </>
  );
}
