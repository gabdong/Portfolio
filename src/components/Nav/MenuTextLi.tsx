import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import media from '@lib/mediaQueries';

export default function MenuTextLi({
  setMenuOn,
  path,
  text,
  currentPath,
}: {
  setMenuOn: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
  text: string;
  currentPath: string;
}) {
  const liRef = useRef<HTMLLIElement>(null);

  const clickMenuLinkFn = () => {
    setMenuOn(false);
  };

  useEffect(() => {
    //* 메뉴창 텍스트 마우스 움직일때 애니메이션 적용
    const li = liRef.current as HTMLLIElement;

    li.addEventListener('mousemove', (e) => {
      const text = li.querySelector('.menuTextMoveWrap') as HTMLElement;
      const { left, top, width, height } = text.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const moveX = (e.clientX - centerX) * -0.1;
      const moveY = (e.clientY - centerY) * -0.1;

      text.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    li.addEventListener('mouseleave', () => {
      const text = li.querySelector('.menuTextMoveWrap') as HTMLElement;
      text.style.transition = 'transform 0.1s';
      text.style.transform = 'translate(0, 0)';

      setTimeout(() => {
        text.style.transition = 'none';
      }, 100);
    });
  }, []);

  return (
    <li ref={liRef}>
      <MenuLinkSt
        to={`/${path}`}
        onClick={clickMenuLinkFn}
        className={
          currentPath === `/${path}` ||
          (currentPath === '/' && path === 'experience')
            ? 'active'
            : ''
        }
      >
        <MenuTextMoveWrapSt className="menuTextMoveWrap">
          <MenuTextWrapSt>
            <MenuTextSt className="menuText">{text}</MenuTextSt>
          </MenuTextWrapSt>
        </MenuTextMoveWrapSt>
      </MenuLinkSt>
    </li>
  );
}

const MenuLinkSt = styled(Link)`
  &.active {
    .menuText {
      color: var(--primary-color);
    }
  }
`;
const MenuTextMoveWrapSt = styled.div`
  width: 100%;
  height: 100%;
`;
const MenuTextWrapSt = styled.div`
  overflow: hidden;
`;
const MenuTextSt = styled.span`
  display: inline-block;
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  transition: transform 0.3s ease-in-out;

  transform: translateY(100%);

  ${media.small`
    font-size: 42px;
  `}
`;
