import { Box, Flex, Image, Skeleton } from '@chakra-ui/react';
import usePhoto from '../hooks/queries/usePhoto';
import { PhotoItem } from '@/shared/types';

interface ImageDetailProps {
  nasaId: string;
  title: string;
  description: string;
}

export default function ImageDetail({
  nasaId,
  title,
  description,
}: ImageDetailProps) {
  const { data, isLoading, isError } = usePhoto(nasaId);

  const asset: PhotoItem = data ?? {
    nasaId,
    orgHref: '',
  };

  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      {isLoading || isError ? (
        <Skeleton height="6xl" />
      ) : (
        <Image
          cursor="pointer"
          src={asset.orgHref}
          alt={title}
          w={`6xl`}
          mb={2.5}
          borderRadius="sm"
        />
      )}
      <Box textAlign="center" maxW={`8xl`}>
        {description}
      </Box>
    </Flex>
  );
}
