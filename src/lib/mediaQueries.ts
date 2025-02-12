import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'small' | 'medium';

export const breakpoints: Record<Breakpoints, string> = {
  small: '@media screen and (max-width: 768px)',
  medium: '@media screen and (max-width: 1024px)',
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
