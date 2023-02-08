import { Box, BoxProps, Flex, Spacer } from '@chakra-ui/react';

export default function Divider(props: BoxProps) {
  return (
    <Box
      w="full"
      borderRadius="xs"
      sx={{
        background: 'rgba(151, 71, 255, 0.3)',
        height: '4px',
      }}
      mb={1.5}
      {...props}
    />
  );
}
