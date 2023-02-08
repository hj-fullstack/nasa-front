import { Button, ButtonProps, Flex, Box } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function ArrowButton({ children, ...props }: ButtonProps) {
  return (
    <Button p={0} size="sm" {...props}>
      <Flex
        w={`242px`}
        sx={{
          alignItems: 'center',
          justifyContent: 'start',
          _hover: {
            justifyContent: 'space-between',
          },
        }}
      >
        <Box fontSize="md" fontWeight="bold">{children}</Box>
        <ChevronRightIcon w={4} h={4} ml={3}/>
      </Flex>
    </Button>
  );
}
