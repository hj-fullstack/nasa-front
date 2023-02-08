import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface LinkProps extends ChakraLinkProps {
  variant?: 'none' | 'normal' | 'fontWeight';
}

const noneStyles = {
  _hover: {
    textDecoration: 'none',
  },
};

const normalStyles = {
  color: 'black',
  _hover: {
    textDecoration: 'none',
    color: 'gray',
  },
};

const fontWeightStyles = {
  fontWeight: 400,
  _hover: {
    textDecoration: 'none',
    fontWeight: 500,
  },
};

export default function Link({ variant, ...props }: LinkProps) {
  let linkStyle = noneStyles;

  if (variant === 'normal') {
    linkStyle = normalStyles;
  } else if (variant === 'fontWeight') {
    linkStyle = fontWeightStyles;
  }

  return <ChakraLink {...props} sx={linkStyle}></ChakraLink>;
}
