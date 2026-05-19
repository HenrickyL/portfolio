import 'styled-components';
import { Theme } from './theme';

declare module "styled-components" {
  type DefaultTheme = Theme;
}
