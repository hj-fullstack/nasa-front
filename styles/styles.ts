import { Styles } from '@chakra-ui/theme-tools';

export const styles: Styles = {
  global: {
    body: {
      fontFamily:
        '-apple-system, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      color: 'chakra-body-text',
      bg: 'white',
      lineHeight: 'base',
    },
    '*, *::before, &::after': {
      wordWrap: 'break-word',
    }
  },
};
