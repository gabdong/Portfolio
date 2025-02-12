import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import MaxWidthContainer from '@components/MaxWidthContainer';
import MenuTextLi from '@components/Nav/MenuTextLi';

export default function Menu({ menuOn, setMenuOn, pathname }: HeaderProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //* menu display시 opacity 조절
    const menu = menuRef.current as HTMLDivElement;
    let onTimeout: NodeJS.Timeout | null = null;

    if (menuOn) {
      menu.classList.add('on');
      menu.classList.remove('hide');
      if (onTimeout) clearTimeout(onTimeout);
    }

    if (!menuOn) {
      if (menu.classList.contains('on')) {
        menu.classList.remove('on');
        onTimeout = setTimeout(() => {
          menu.classList.add('hide');
        }, 300);
      } else {
        menu.classList.remove('on');
        menu.classList.add('hide');
      }
    }
  }, [menuOn]);

  return (
    <MenuSt id="menu" ref={menuRef}>
      <div className="menuBackground"></div>
      <MaxWidthContainer
        style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
        <MenuContentWrapSt>
          <MenuTextUlSt id="menuTextList">
            <MenuTextLi
              setMenuOn={setMenuOn}
              path="experience"
              text="Experience"
              currentPath={pathname as string}
            />
            <MenuTextLi
              setMenuOn={setMenuOn}
              path="about"
              text="About"
              currentPath={pathname as string}
            />
          </MenuTextUlSt>
        </MenuContentWrapSt>
      </MaxWidthContainer>
    </MenuSt>
  );
}

const MenuSt = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: var(--menu-z-index);

  .menuBackground {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease, background-color 0.5s ease;

    position: absolute;
    left: 0;
    top: 0;
  }

  &.on {
    visibility: visible;

    .menuBackground {
      background: #121212;
      opacity: 0.8;
    }

    .menuText {
      transform: translateY(0);
    }
  }

  &.hide {
    visibility: hidden;
  }
`;
const MenuContentWrapSt = styled.div`
  width: 1000px;
  max-width: 70%;
  margin: 0 auto;
`;
const MenuTextUlSt = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    display: inline-block;

    a {
      display: inline-block;
    }
  }
`;
