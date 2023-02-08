import { Box, BoxProps, Flex, Spinner } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useUploadFile from '../hooks/queries/useUploadFile';
import {
  useUploadContext,
  useIsUploadEnabled,
} from '../hooks/useUploadePhotos';
import UploadIcon from '../components/icons/UploadIcon';

export default function ImageUpload() {
  const { isLoading, isError, mutateAsync: triggerUpload } = useUploadFile();
  const isUploadEnabled = useIsUploadEnabled();
  const { addToList } = useUploadContext();

  const themeColor = isUploadEnabled ? 'link' : 'linkDisabled';

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!isUploadEnabled) {
        return;
      }

      const file = acceptedFiles?.[0];

      if (!file) {
        return;
      }

      const data = await triggerUpload(file);
      addToList(data);
    },
    [addToList, triggerUpload, isUploadEnabled]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop,
    noClick: true,
  });

  return (
    <Flex
      bg="white"
      w={`510px`}
      h={`107px`}
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      textAlign="center"
      borderColor={themeColor}
      borderStyle="solid"
      borderWidth={`2px`}
      p={0.5}
    >
      <Flex
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        textAlign="center"
        borderColor={themeColor}
        borderStyle="dashed"
        borderWidth={`2px`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isLoading || isError ? (
          <Spinner color="link" />
        ) : (
          <Flex justifyContent="center" alignItems="center" height="full">
            <Box mr={1.5} color="white">
              <UploadIcon width={`28px`} height={`28px`} fill={themeColor} />
            </Box>
            <Box
              fontSize="md"
              fontWeight="light"
              textAlign="center"
              color={themeColor}
            >
              {isUploadEnabled && isDragActive
                ? 'Drop the images here...'
                : 'Drag & Drop Your Images'}
            </Box>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
