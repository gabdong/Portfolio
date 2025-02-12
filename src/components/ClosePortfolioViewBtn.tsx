import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setHeaderVisibility } from '@lib/utils';

export default function ClosePortfolioViewBtn() {
  return (
    <BtnSt id="closePortfolioViewBtn">
      <Link to="/experience" onClick={() => setHeaderVisibility(true)}>
        <NavButtonAnimationContainerSt>
          <span>
            <span></span>
            <span></span>
          </span>
        </NavButtonAnimationContainerSt>
      </Link>
    </BtnSt>
  );
}

const BtnSt = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  background: #000;
`;
const NavButtonAnimationContainerSt = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  position: relative;

  &:hover {
    & > span {
      top: 115%;
    }
  }

  & > span {
    display: inline-block;

    width: 30%;
    height: 30%;
    transition: 0.3s;

    position: absolute;
    left: 35%;
    top: 31%;
    transform: rotate(225deg);

    span {
      display: inline-block;

      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-right-color: #000;
      border-bottom-color: #000;

      position: absolute;
      left: 0;
      top: 0;
    }

    span:nth-child(2) {
      transform: translate(200%, 200%);
    }
  }
`;
