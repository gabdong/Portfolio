import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function MaxWidthContainer({
  children,
  style,
}: PropsWithChildren<{ style?: { [key: string]: string | number } }>) {
  return (
    <MaxWidthContainerSt
      className="maxWidthContainer"
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
`;
