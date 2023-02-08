import { Fragment } from 'react';
import { Box, HStack, StackProps } from '@chakra-ui/react';

interface BreadCrumbsProps extends StackProps {
  items: string[];
}

export default function BreadCrumbs({ items, ...props }: BreadCrumbsProps) {
  return (
    <HStack spacing={0} fontSize="lg" fontWeight="semibold" {...props}>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index !== 0 ? (
            <Box color="lightgray" px={0.5}>
              &bull;
            </Box>
          ) : null}
          <Box
            key={item}
            color={index < items.length - 1 ? 'lightGray' : 'black'}
          >
            {item}
          </Box>
        </Fragment>
      ))}
    </HStack>
  );
}
