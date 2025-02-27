import MaxWidthContainer from '@components/MaxWidthContainer';
import media from '@lib/mediaQueries';
import styled from 'styled-components';

const PUBLIC_DIR = import.meta.env.VITE_PUBLIC_DIR;

export default function Contact() {
  return (
    <MaxWidthContainer style={{ paddingTop: '140px' }} className="scroll">
      <WrapperSt>
        <h2 className="blind">연락처 페이지</h2>
        <img src={`${PUBLIC_DIR}images/profile.jpg`} alt="프로필이미지" />
        <div className="textWrap">
          <span className="subTitle">Name: Kim Dong Hwan</span>
          <span className="subTitle">Phone: 010-8737-9411</span>
          <span className="subTitle">Email: hwan970104@gmail.com</span>
          <a href="https://github.com/gabdong" target="_blank">
            <span className="subTitle">Github</span>
          </a>
          <a href="https://gabdong.com" target="_blank">
            <span className="subTitle">Blog</span>
          </a>
        </div>
      </WrapperSt>
    </MaxWidthContainer>
  );
}

const WrapperSt = styled.section`
  display: flex;
  gap: 40px;

  width: 90%;
  margin: 0 auto;

  img {
    max-width: 40%;
    height: auto;
    max-height: 80vh;
    aspect-ratio: 284 / 379;
    object-fit: contain;
  }

  .textWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: end;
    justify-content: end;
    flex: 1;
  }

  ${media.small`
    flex-direction: column;

    img {
      max-width: 90%;
      margin: 0 auto;
    }
  `}
`;
