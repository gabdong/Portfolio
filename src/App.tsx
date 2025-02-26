import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import About from '@pages/About';
import Experience from '@pages/experience/Experience';
import Nav from '@components/Nav/Nav';

export default function App() {
  console.log('---------- App rendering ----------');

  console.log(import.meta.env.BASE_URL);
  return (
    <WrapperSt id="wrapper">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Nav />
        <MainSt>
          <Routes>
            <Route path="/" element={<Experience />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </MainSt>
      </BrowserRouter>
    </WrapperSt>
  );
}

const WrapperSt = styled.div`
  width: 100%;
  height: 100%;
`;
const MainSt = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
