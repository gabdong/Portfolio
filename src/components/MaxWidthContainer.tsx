import media from '@lib/mediaQueries';
import { buildClassName } from '@lib/utils';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function MaxWidthContainer({
  children,
  style,
  className,
}: PropsWithChildren<{
  style?: { [key: string]: string | number };
  className?: string;
}>) {
  return (
    <MaxWidthContainerSt
      className={buildClassName(['maxWidthContainer', className])}
      style={style ? { ...style } : undefined}
    >
      {children}
    </MaxWidthContainerSt>
  );
}

const MaxWidthContainerSt = styled.div`
  width: 1400px;
  max-width: calc(100% - 100px);
  height: inherit;
  margin: 0 auto;

  position: relative;

  ${media.medium`
    max-width: 90%;
  `}
`;
