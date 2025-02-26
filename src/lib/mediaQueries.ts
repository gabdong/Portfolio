import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'small' | 'medium' | 'large';

export const breakpoints: Record<Breakpoints, string> = {
  small: `@media screen and (max-width: ${import.meta.env.VITE_SMALL_WIDTH})`,
  medium: `@media screen and (max-width: ${import.meta.env.VITE_MEDIUM_WIDTH})`,
  large: `@media screen and (min-width: ${import.meta.env.VITE_LARGE_WIDTH})`,
};

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}, {}) as Record<Breakpoints, any>;

export default media;
