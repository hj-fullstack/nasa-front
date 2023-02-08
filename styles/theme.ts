import { extendTheme } from '@chakra-ui/react';
import { foundations } from './foundations';
import { styles } from './styles';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  ...foundations,
  styles,
});

export default theme;
