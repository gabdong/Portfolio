import MaxWidthContainer from '@components/MaxWidthContainer';
import media from '@lib/mediaQueries';
import styled from 'styled-components';

const PUBLIC_DIR = import.meta.env.VITE_PUBLIC_DIR;

export default function Contact() {
  return (
    <MaxWidthContainer style={{ padding: '140px 0' }} className="scroll">
      <WrapperSt>
        <h2 className="blind">연락처 페이지</h2>
        <img src={`${PUBLIC_DIR}images/full_profile.jpeg`} alt="프로필이미지" />
        <div className="textWrap">
          <span className="titleXL">Kim Dong Hwan</span>
          <span className="subTitle">Phone: 010-8737-9411</span>
          <span className="subTitle">Mail: hwan970104@gmail.com</span>
          <a
            href="https://github.com/gabdong"
            target="_blank"
            style={{ marginTop: '20px' }}
          >
            <span
              className="normalText"
              style={{ marginBottom: '2px', display: 'inline-block' }}
            >
              Github
            </span>
          </a>
          <a href="https://gabdong.com" target="_blank">
            <span
              className="normalText"
              style={{ marginBottom: '2px', display: 'inline-block' }}
            >
              Blog
            </span>
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

    a {
      border: 1px solid var(--primary-color);
      padding: 4px 16px;
      border-radius: 18px;

      span {
        color: var(--primary-color);
      }
    }
  }

  ${media.medium`
    flex-direction: column;

    img {
      max-width: 50%;
      margin: 0 auto;
    }

    .textWrap {
      align-items: center;
    }
  `}

  ${media.small`
    img {
      max-width: 80%;
    }
  `}
`;
