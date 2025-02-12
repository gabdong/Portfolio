import styled from 'styled-components';

import MaxWidthContainer from '@components/MaxWidthContainer';
import NavBtn from '@components/Nav/NavBtn';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ menuOn, setMenuOn, pathname }: HeaderProps) {
  const pageTitleRef = useRef<HTMLHeadingElement>(null);
  const pageTitle = pathname === '/about' ? 'About Me' : 'Experience';

  useEffect(() => {
    const pageTitleEl = pageTitleRef.current as HTMLHeadingElement;

    if (pageTitleEl?.classList.contains('on')) {
      pageTitleEl.textContent = '';
      pageTitleEl.style.transition = 'none';
      pageTitleEl.classList.remove('on');

      setTimeout(() => {
        pageTitleEl.style.transition = 'opacity 0.5s';
        pageTitleEl.textContent = pageTitle;
        pageTitleEl.classList.add('on');
      }, 200);
    } else {
      pageTitleEl.textContent = pageTitle;
      pageTitleEl.classList.add('on');
    }
  }, [pageTitle]);

  return (
    <HeaderSt id="header">
      <MaxWidthContainer>
        <HeaderContainerSt>
          <LogoSt>
            <Link to="/">Gabdong</Link>
          </LogoSt>
          <CurrentPageTitleSt ref={pageTitleRef} />
          <NavBtn menuOn={menuOn} setMenuOn={setMenuOn} />
        </HeaderContainerSt>
      </MaxWidthContainer>
    </HeaderSt>
  );
}

const HeaderSt = styled.header`
  width: 100%;
  height: var(--header-height);
  background: none;
  transition: top 0.7s ease-in-out;

  position: fixed;
  top: 50px;
  z-index: var(--header-z-index);

  &.hide {
    top: -100%;
    transition: top 1s ease-in-out 1s;
  }
`;
const HeaderContainerSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  position: relative;
`;
const LogoSt = styled.div`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(
    to right,
    var(--primary-color) 10%,
    var(--primary-color-l) 50%,
    #ffffff 60%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
`;
const CurrentPageTitleSt = styled.h2`
  font-size: 18px;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.5s;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &.on {
    opacity: 1;
  }
`;
