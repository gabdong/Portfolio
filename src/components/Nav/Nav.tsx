import { useState } from 'react';
import styled from 'styled-components';

import Header from '@components/Nav/Header';
import Menu from '@components/Nav/Menu';
import { useLocation } from 'react-router-dom';

export default function Nav() {
  const [menuOn, setMenuOn] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <NavSt id="nav">
      <Header menuOn={menuOn} setMenuOn={setMenuOn} pathname={pathname} />
      <Menu menuOn={menuOn} setMenuOn={setMenuOn} pathname={pathname} />
    </NavSt>
  );
}

const NavSt = styled.nav`
  overflow: hidden;
`;
