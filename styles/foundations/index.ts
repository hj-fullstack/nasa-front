import colors from './colors';
import typography from './typography';
import radii from './radius';
import sizes from './sizes';
import { spacing } from './spacing';
import shadows from './shadows';

export const foundations = {
  colors,
  radii,
  ...typography,
  sizes,
  space: spacing,
  shadows,
};
