import styled from 'styled-components';

import media from '@lib/mediaQueries';

export default function NavBtn({ menuOn, setMenuOn }: HeaderProps) {
  /**
   * - Nav 버튼 클릭시 메뉴창 display, nav button 모양 조절
   */
  const clickNavBtn = () => {
    if (typeof setMenuOn === 'function') setMenuOn((prev) => !prev);
  };

  return (
    <NavBtnSt id="navBtn" className={menuOn ? 'on' : ''} onClick={clickNavBtn}>
      <NavButtonAnimationContainerSt>
        <span></span>
        <span></span>
      </NavButtonAnimationContainerSt>
    </NavBtnSt>
  );
}

const NavBtnSt = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  background: #000;

  & {
    span {
      width: 40%;
      height: 2px;
      background: #fff;
      transition: margin 0.2s ease-in-out, transform 0.2s ease-in-out;

      position: absolute;
      left: 30%;
      top: calc(50% - 1px);
    }
    span:first-child {
      margin-top: -14%;
    }
    span:nth-child(2) {
      margin-top: 14%;
    }
  }

  &:hover {
    span {
      margin-top: 0;
      transition: margin 0.2s ease-in-out, transform 0.2s ease-in-out 0.3s;
    }
    span:first-child {
      transform: rotate(90deg);
    }
    span:nth-child(2) {
      transform: rotate(180deg);
    }
  }

  &.on {
    span {
      margin-top: 0;
      transition: margin 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
    span:first-child {
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      transform: rotate(135deg);
    }
  }

  &.on:hover {
    span {
      margin-top: 0;
    }
    span:first-child {
      transform: rotate(135deg);
    }
    span:nth-child(2) {
      transform: rotate(225deg);
    }
  }

  ${media.small`
    width: 28px;
    height: 28px;
  `}
`;
const NavButtonAnimationContainerSt = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
