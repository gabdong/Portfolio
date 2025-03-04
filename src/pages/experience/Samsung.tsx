import { useEffect } from 'react';
import styled from 'styled-components';

import { setHeaderVisibility } from '@lib/utils';

import ScrollActiveEl from '@components/ScrollActiveEl';
import media from '@lib/mediaQueries';

const PUBLIC_DIR = import.meta.env.VITE_PUBLIC_DIR;

export default function Samsung() {
  useEffect(() => {
    setHeaderVisibility(false);
  }, []);

  return (
    <WrapperSt className="scroll">
      <h2 className="blind">삼성생명 이벤트페이지 작업내용</h2>

      <div className="con con1">
        <div className="backgroundWrap">
          <ScrollActiveEl className="fadeIn">
            <img
              src={`${PUBLIC_DIR}images/samsung/background_obj_01.png`}
              alt="꾸밈요소"
            />
          </ScrollActiveEl>
        </div>
        <div className="container">
          <ScrollActiveEl className="fadeIn">
            <img
              src={`${PUBLIC_DIR}images/samsung/logo.png`}
              id="samsungLogo"
              alt="삼성생명 로고"
            />
          </ScrollActiveEl>
        </div>
        <ScrollActiveEl className="fadeUp">
          <img
            src={`${PUBLIC_DIR}images/samsung/main.jpg`}
            alt="삼성생명 메인 목업"
          />
        </ScrollActiveEl>
      </div>

      <div className="con con2">
        <div className="backgroundWrap">
          <ScrollActiveEl className="fadeIn">
            <img
              src={`${PUBLIC_DIR}images/samsung/background_obj_02.png`}
              alt="배경 꾸밈요소 별모양"
            />
          </ScrollActiveEl>
          <img
            src={`${PUBLIC_DIR}images/samsung/background_obj_03.png`}
            alt="배경 꾸밈요소 사각형"
          />
          <img
            src={`${PUBLIC_DIR}images/samsung/background_obj_04.png`}
            alt="배경 꾸밈요소"
          />
        </div>
        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/samsung/award_logo.png`}
              alt="60회 연도상 로고"
            />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/samsung/text_01.png`}
              alt="삼성행사 텍스트"
            />
            {/* <span className="titleXL">The 60th</span> */}
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/samsung/text_02.png`}
              alt="삼성행사 텍스트"
            />
            {/* <span className="titleXL">SAMSUNG LIFE INSURANCE</span> */}
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/samsung/text_03.png`}
              alt="삼성행사 텍스트"
            />
            {/* <span className="titleXL">ANNUAL AWARDS</span> */}
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con con3">
        <div className="backgroundWrap" style={{ overflow: 'visible' }}>
          <img
            src={`${PUBLIC_DIR}images/samsung/trophy.png`}
            alt="배경 트로피 이미지"
          />
          <img
            src={`${PUBLIC_DIR}images/samsung/background_obj_05.png`}
            alt="배경 꾸밈요소"
          />
          <ScrollActiveEl className="fadeIn">
            <img
              src={`${PUBLIC_DIR}images/samsung/background_obj_06.png`}
              alt="배경 꾸밈요소"
            />
          </ScrollActiveEl>
          <img
            src={`${PUBLIC_DIR}images/samsung/background_3d_circle.png`}
            alt="배경 3d 원형도형"
            className="balloonAnimation"
          />
        </div>
        <div className="container" style={{ textAlign: 'right' }}>
          <ScrollActiveEl className="fadeUp">
            <span className="label">Mobile Brochure</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="titleL">
              삼성생명 연도상
              <br />
              모바일 브로슈어로 더욱 특별하게
            </span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="normalText">
              기존의 종이 브로슈어 배포 방식에서 벗어나, <br /> 모바일
              브로슈어를 도입하여 친환경적이고 효율적인 정보 제공이 가능하도록{' '}
              <br />
              페이지를 개발 및 보수 작업하였습니다.
            </span>
          </ScrollActiveEl>
        </div>
        <ScrollActiveEl className="fadeUp scrollAnimationWrap">
          <div className="scrollWrap">
            <img
              src={`${PUBLIC_DIR}images/samsung/mockup_empty.png`}
              alt="페이지 스크롤 애니메이션 이미지"
            />
            <div className="scrollContainer">
              <img
                src={`${PUBLIC_DIR}images/samsung/scroll_img.png`}
                alt="페이지 스크롤 애니메이션 이미지"
              />
            </div>
          </div>
        </ScrollActiveEl>
        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <span className="label">Eco-friendly</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="titleL">
              친환경적인 변화
              <br />
              지속 가능한 가치 실현
            </span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="normalText">
              기존 지류 브로슈어는 제작과 배포 과정에서 많은 자원이
              소모되었습니다.
              <br />
              하지만 모바일 브로슈어를 통해 불필요한 종이 사용을 줄이고,
              <br />
              인쇄 및 유통 비용 절감은 물론 환경 보호에도 기여할 수 있었습니다.
            </span>
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con con4">
        <div className="container">
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem red">
              <span className="keywordItemText">휴대성</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem blue">
              <span className="keywordItemText">편리성</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItemDeco">
              <img
                src={`${PUBLIC_DIR}images/samsung/deco_cheese.png`}
                alt="데코 치즈도형"
                style={{
                  marginRight: '-10px',
                  position: 'relative',
                  zIndex: '1',
                }}
              />
              <img
                src={`${PUBLIC_DIR}images/samsung/deco_square.png`}
                alt="데코 사각형"
              />
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem red">
              <span className="keywordItemText">MYSQL</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem blue">
              <span className="keywordItemText">PHP</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem red">
              <span className="keywordItemText">JS</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem blue">
              <span className="keywordItemText">HTML</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem red">
              <span className="keywordItemText">CSS</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItemDeco">
              <img
                src={`${PUBLIC_DIR}images/samsung/deco_01.png`}
                alt="데코 도형"
              />
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem blue">
              <span className="keywordItemText">엑셀 업로드</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItemDeco">
              <img
                src={`${PUBLIC_DIR}images/samsung/background_obj_02.png`}
                alt="데코 도형"
              />
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem red">
              <span className="keywordItemText">브로슈어 다운</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItem blue">
              <span className="keywordItemText">프로필 다운</span>
            </div>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <div className="keywordItemDeco">
              <img
                src={`${PUBLIC_DIR}images/samsung/deco_02.png`}
                alt="데코 도형"
              />
            </div>
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con con5">
        <div className="backgroundWrap">
          <img
            src={`${PUBLIC_DIR}images/samsung/background_obj_07.png`}
            alt="배경 꾸밈요소"
          />
          <img
            src={`${PUBLIC_DIR}images/samsung/background_obj_08.png`}
            alt="배경 꾸밈요소"
            className="balloonAnimation"
          />
          <img
            src={`${PUBLIC_DIR}images/samsung/background_obj_09.png`}
            alt="배경 꾸밈요소"
          />
          <img
            src={`${PUBLIC_DIR}images/samsung/background_3d_circle.png`}
            alt="배경 꾸밈요소"
            className="balloonAnimation"
          />
        </div>
        <div className="container reverse">
          <ScrollActiveEl className="fadeLeft textWrapAnimation">
            <div
              className="textWrap"
              style={{
                justifyContent: 'end',
                textAlign: 'right',
              }}
            >
              <span className="label">Glorious Protagonist</span>
              <span className="title">
                더욱 영광스럽고
                <br /> 특별한 수상식 연출
              </span>
              <span className="normalText">
                수상자의 정보를 더욱 돋보이도록 구성하고 본인의 프로필을
                다운로드하여 활용할 수 있도록 함으로써 한층 더 특별한 수상식을
                연출했습니다.
              </span>
            </div>
          </ScrollActiveEl>
          <div className="imgWrap">
            <ScrollActiveEl className="fadeLeft leftImg">
              <img
                src={`${PUBLIC_DIR}images/samsung/profile_left.png`}
                alt="프로필 선택시 이미지"
              />
            </ScrollActiveEl>
            <ScrollActiveEl className="fadeRight rightImg">
              <img
                src={`${PUBLIC_DIR}images/samsung/profile_right.png`}
                alt="프로필 선택시 이미지"
              />
            </ScrollActiveEl>
          </div>
        </div>

        <div className="container">
          <div className="imgWrap changeImgWrap"></div>
          <ScrollActiveEl className="fadeRight textWrapAnimation">
            <div className="textWrap">
              <span className="label">Convenience</span>
              <span className="title">
                언제 어디서나
                <br /> 편리한 정보 확인
              </span>
              <span className="normalText">
                모바일 브로슈어는 웹과 모바일 환경에서 언제든지 접근할 수 있어,
                수상자 및 참석자들이 시간과 장소에 구애받지 않고 필요한 정보를
                손쉽게 확인할 수 있습니다.
              </span>
              <span className="normalText">
                또한, 로그인 기능을 통해 프라이버시를 보호하고 카테고리를
                세분화하여 검색에 용이하도록 구성했습니다.
              </span>
            </div>
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con con6">
        <img
          src={`${PUBLIC_DIR}images/samsung/main_02.png`}
          alt="목업 이미지"
        />
      </div>

      <div className="con con7">
        <div className="container">
          <img
            src={`${PUBLIC_DIR}images/samsung/deco_group.png`}
            alt="도형 그룹이미지"
          />
          <span className="title">사용자 만족도 향상, 긍정적인 피드백</span>
          <span className="normalText">
            새로운 방식으로 제공된 모바일 브로슈어는
            <br /> 내부적으로 긍정적인 반응을 얻었으며, <br /> 앞으로 진행될
            연도상에도 지속적으로 활용될 예정입니다.
          </span>
        </div>
      </div>
    </WrapperSt>
  );
}

const WrapperSt = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background: #fff;
  color: var(--gray);
  line-height: 1.2;
  overflow-x: hidden;

  img {
    max-width: 100%;
  }

  .con {
    width: 100%;
    font-size: 0;

    position: relative;
  }

  .container {
    display: flex;
    flex-direction: column;

    width: 1080px;
    max-width: 80%;
    margin: 0 auto;

    position: relative;
    z-index: 4;

    .label {
      color: #e94e4c;
    }

    .normalText {
      font-size: 20px;
      word-break: keep-all;
    }
  }

  .con1 {
    display: flex;
    flex-direction: column;
    gap: 80px;

    padding-top: 180px;

    .backgroundWrap {
      .fadeIn {
        width: 120px;
        transition-delay: 0.9s;

        position: absolute;
        left: -1px;
        top: -1px;
      }
    }

    .container {
      .fadeIn {
        text-align: center;
        transition-delay: 0.9s;

        #samsungLogo {
          max-width: 280px;
        }
      }
    }

    & > .fadeUp {
      transition-delay: 1.2s;
    }
  }

  .con2 {
    padding: 0 0 280px 0;
    background: linear-gradient(to bottom, #fff, rgba(236, 236, 236));

    .backgroundWrap {
      img,
      .fadeIn {
        position: absolute;
      }

      :nth-child(1) {
        width: 120px;
        transition-delay: 1.5s;

        right: 20%;
        top: 35%;
      }

      :nth-child(2) {
        left: 0;
        bottom: 0;
      }

      :nth-child(3) {
        right: 0;
        bottom: 0;
      }
    }

    .container {
      gap: 30px;

      :nth-child(1) {
        img {
          width: 120px;
        }

        transition-delay: 0.3s;
      }

      :nth-child(2) {
        transition-delay: 0.6s;

        img {
          height: 46px;
        }
      }

      :nth-child(3) {
        transition-delay: 0.9s;

        img {
          height: 46px;
        }
      }

      :nth-child(4) {
        transition-delay: 1.2s;

        img {
          height: 46px;
        }
      }
    }
  }

  .con3 {
    display: flex;
    flex-direction: column;
    gap: 80px;

    padding: 180px 0;

    .backgroundWrap {
      img,
      .fadeIn,
      .fadeUp {
        position: absolute;
      }

      & > img:nth-of-type(1) {
        width: 450px;

        left: 3%;
        top: -12%;
        z-index: 3;
      }

      :nth-child(2) {
        left: -1px;
        top: -1px;
        z-index: 2;
      }

      :nth-child(3) {
        width: 500px;
        transition-delay: 0.6s;

        left: -10%;
        top: 10%;
        z-index: 1;
      }

      :nth-child(4) {
        width: 500px;
        transition-delay: 0.6s;

        right: -10%;
        bottom: 40%;
      }
    }

    .scrollAnimationWrap {
      transition-delay: 1.2s;

      z-index: 1;
    }

    .scrollWrap {
      width: 30%;
      max-width: 600px;
      margin: 0 auto;
      aspect-ratio: 222 / 445;

      position: relative;
      z-index: 1;

      > img {
        position: absolute;
        left: 0;
        top: 09;
        z-index: 1;
      }

      .scrollContainer {
        width: 86%;
        height: 73.3%;
        overflow: hidden;

        position: absolute;
        left: 50%;
        top: 14.4%;
        transform: translateX(-50%) translateZ(0);
        will-change: transform;
        clip-path: inset(0 0 0 0);

        img {
          width: 100%;
          animation: mockupScroll 10s ease-in-out infinite;

          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }

    .container {
      gap: 10px;

      text-align: center;

      :nth-child(1) {
        transition-delay: 0.3s;
      }

      :nth-child(2) {
        transition-delay: 0.6s;
      }

      :nth-child(3) {
        transition-delay: 0.9s;
      }
    }
  }

  .con4 {
    padding: 180px 0;
    background: var(--dark-m);

    .container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;

      .keywordItem {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 60px;
        padding: 0 70px;
        border-radius: 30px;

        &.red {
          background: #e84e4c;
        }

        &.blue {
          background: #adbbe0;
        }

        .keywordItemText {
          font-size: 20px;
          color: #fff;
        }
      }

      .keywordItemDeco {
        display: flex;
        height: 60px;

        img {
          height: 100%;
        }
      }

      :nth-child(1) {
        transition-delay: 0.1s;
      }

      :nth-child(2) {
        transition-delay: 0.2s;
      }

      :nth-child(3) {
        transition-delay: 0.3s;
        animation: wobble 1.2s ease-in-out infinite;
      }

      :nth-child(4) {
        transition-delay: 0.4s;
      }

      :nth-child(5) {
        transition-delay: 0.5s;
      }

      :nth-child(6) {
        transition-delay: 0.6s;
      }

      :nth-child(7) {
        transition-delay: 0.7s;
      }

      :nth-child(8) {
        transition-delay: 0.8s;
      }

      :nth-child(9) {
        transition-delay: 0.9s;
      }

      :nth-child(10) {
        transition-delay: 1s;
      }

      :nth-child(11) {
        transition-delay: 1.1s;
        animation: rotate360 1.5s ease-in-out infinite;
      }

      :nth-child(12) {
        transition-delay: 1.2s;
      }

      :nth-child(13) {
        transition-delay: 1.3s;
      }

      :nth-child(14) {
        transition-delay: 1.4s;
      }
    }
  }

  .con5 {
    display: flex;
    flex-direction: column;
    gap: 240px;

    padding: 180px 0;
    background: linear-gradient(to bottom, #fff 80%, #c6c6c6);

    .backgroundWrap {
      & > img,
      .scrollActiveEl {
        position: absolute;
      }

      img:nth-of-type(1) {
        width: 50%;
        opacity: 0.6;

        left: -10%;
        top: 10%;
      }

      img:nth-of-type(2) {
        opacity: 0.7;
        transition-delay: 0.6s;

        right: -5%;
        bottom: 60%;
      }

      img:nth-of-type(3) {
        width: 50%;
        opacity: 0.5;

        right: -10%;
        bottom: 5%;
      }

      img:nth-of-type(4) {
        width: 10%;
        opacity: 0.5;

        left: 5%;
        bottom: 5%;
      }
    }

    .container {
      flex-direction: row;
      align-items: center;
      gap: 20px;

      .imgWrap {
        display: flex;
        justify-content: center;
        flex: 1;

        width: 50%;

        position: relative;

        .scrollActiveEl {
          width: 50%;
        }

        .rightImg {
          margin-top: 50px;
          margin-left: -50px;
          transition-delay: 0.3s;
        }

        &.changeImgWrap {
          width: 25%;
          max-height: 600px;
          aspect-ratio: 301 / 666;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;

          @keyframes changeBackground {
            0% {
              background-image: url('${PUBLIC_DIR}images/samsung/filter_01.png');
              opacity: 1;
            }
            25% {
              opacity: 0.9;
            }
            50% {
              background-image: url('${PUBLIC_DIR}images/samsung/filter_02.png');
              opacity: 1;
            }
            75% {
              opacity: 0.9;
            }
            100% {
              background-image: url('${PUBLIC_DIR}images/samsung/filter_01.png');
              opacity: 1;
            }
          }
          animation: changeBackground 3s infinite;
        }
      }

      .textWrapAnimation {
        flex: 1;

        &.fadeRight {
          flex: 1.55;
        }
      }

      .textWrap {
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 40px;
        border-radius: 14px;
        box-shadow: inset 0px 0px 10px #eee;
        -webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
        transition-delay: 0.6s;
      }
    }
  }

  .con6 {
    img {
      width: 100%;
    }
  }

  .con7 {
    padding: 180px 0;
    background: var(--dark-m);

    color: #e94e4c;

    .container {
      align-items: center;
      gap: 30px;

      text-align: center;

      img {
        width: 60%;
        max-width: 400px;
      }
    }
  }

  //- Medium
  ${media.medium`
    .container {
      .normalText {
        font-size: 18px;
      }
    }

    .con1 {
      gap: 60px;

      padding-top: 140px;

      .backgroundWrap {
        .fadeIn {
          width: 120px;
        }
      }

      .container {
        .fadeIn {
          #samsungLogo {
            max-width: 240px;
          }
        }
      }
    }

    .con2 {
      padding-bottom: 200px;

      .backgroundWrap {
        :nth-child(1) {
          width: 70px;

          top: 20%;
        }

        :nth-child(2) {
          width: 140px;
        }

        :nth-child(3) {
          width: 140px;
        }
      }

      .container {
        :nth-child(1) {
          img {
            width: 100px;
          }
        }

        :nth-child(2) {
          img {
            height: 40px;
          }
        }

        :nth-child(3) {
          img {
            height: 40px;
          }
        }

        :nth-child(4) {
          img {
            height: 40px;
          }
        }
      }
    }

    .con3 {
      gap: 60px;

      padding: 140px 0;

      .scrollWrap {
        width: 50%;
      }

      .backgroundWrap {
        & > img:nth-of-type(1) {
          width: 300px;

          left: 2%;
        }

        :nth-child(2) {
          width: 140px;
        }

        :nth-child(3) {
          width: 460px;
        }

        :nth-child(4) {
          width: 340px;
        }
      }

      .container {
        gap: 10px;
        text-align: center;

        .titleL {
          font-size: 36px;
        }
      }
    }

    .con4 {
      padding: 120px 0;

      .container {
        gap: 12px;

        .keywordItem {
          height: 50px;
          padding: 0 40px;
          border-radius: 25px;

          .keywordItemText {
            font-size: 18px;
          }
        }

        .keywordItemDeco {
          height: 50px;
        }
      }
    }

    .con5 {
      gap: 180px;

      padding: 140px 0;

      .backgroundWrap {
        img:nth-of-type(1) {
          width: 40%;
        }

        img:nth-of-type(2) {
          bottom: 50%;
        }

        img:nth-of-type(3) {
          width: 40%;
        }
      }
    }

    .con7 {
      padding: 140px 0;

      .container {
        gap: 20px;

        img {
          max-width: 300px;
        }
      }
    }
  `}

  //- Small
  ${media.small`
    .container {
      .normalText {
        font-size: 16px;
      }

      .label {
        font-size: 16px;
      }
    }

    .con1 {
      gap: 40px;

      padding-top: 120px;

      .backgroundWrap {
        .fadeIn {
          width: 80px;
        }
      }

      .container {
        .fadeIn {
          #samsungLogo {
            max-width: 140px;
          }
        }
      }
    }

    .con2 {
      padding-bottom: 140px;

      .backgroundWrap {
        :nth-child(1) {
          width: 50px;
        }

        :nth-child(2) {
          width: 60px;
        }

        :nth-child(3) {
          width: 60px;
        }
      }

      .container {
        gap: 20px;

        :nth-child(1) {
          img {
            width: 60px;
          }
        }

        :nth-child(2) {
          img {
            max-width: unset;
            aspect-ratio: 666 / 115;
            height: 16px;
          }
        }

        :nth-child(3) {
          img {
            max-width: unset;
            aspect-ratio: 2039 / 115;
            height: 16px;
          }
        }

        :nth-child(4) {
          img {
            max-width: unset;
            aspect-ratio: 223 / 19;
            height: 16px;
          }
        }
      }
    }

    .con3 {
      gap: 60px;

      padding: 120px 0;

      .backgroundWrap {
        & > img:nth-of-type(1) {
          width: 180px;

          top: -8%;
          left: -4%;
        } 

        :nth-child(2) {
          width: 60px;
          z-index: 2;
        }

        :nth-child(3) {
          width: 200px;
        }

        :nth-child(4) {
          width: 120px;

          right: -10%;
          bottom: 40%;
        }
      }

      .scrollWrap {
        width: 80%;
      }

      .container {
        .titleL {
          font-size: 20px;
        }
      }
    }

    .con4 {
      padding: 100px 0;

      .container {
        gap: 10px;

        .keywordItem {
          height: 34px;
          padding: 0 20px;
          border-radius: 17px;

          .keywordItemText {
            font-size: 14px;
          }
        }

        .keywordItemDeco {
          height: 34px;
        }
      }
    }

    .con5 {
      gap: 140px;

      padding: 120px 0;

      .container {
        flex-direction: column;

        &.reverse {
          flex-direction: column-reverse;
        }

        .imgWrap {
          width: 90%;

          &.changeImgWrap {
            width: 90%;
          }
        }
      }
    }

    .con7 {
      padding: 80px 0;

      img {
        max-width: 300px;
      }
    }
  `}
`;
