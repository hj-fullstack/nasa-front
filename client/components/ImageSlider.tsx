import { Box, Image } from '@chakra-ui/react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { PhotoThumbItem } from '@/shared/types';

interface ImageSliderProps {
  images: PhotoThumbItem[];
  onSelect: (item: PhotoThumbItem) => void;
}

export default function ImageSlider({ images, onSelect }: ImageSliderProps) {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={images.length}
          itemSize={256}
          layout="horizontal"
          width={width}
        >
          {({ index, style }) => (
            <Box style={style} pr={2}>
              <Image
                onClick={() => onSelect(images[index])}
                cursor="pointer"
                src={images[index].href}
                alt={images[index].title}
                w={`240px`}
                h={`208px`}
                borderRadius="sm"
              />
            </Box>
          )}
        </List>
      )}
    </AutoSizer>
  );
}
