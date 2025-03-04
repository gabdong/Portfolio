import { useEffect } from 'react';
import styled from 'styled-components';

import { setHeaderVisibility } from '@lib/utils';
import media from '@lib/mediaQueries';

import ScrollActiveEl from '@components/ScrollActiveEl';

const PUBLIC_DIR = import.meta.env.VITE_PUBLIC_DIR;

export default function Blog() {
  useEffect(() => {
    setHeaderVisibility(false);
  }, []);

  return (
    <WrapperSt className="scroll">
      <h2 className="blind">블로그 작업내용</h2>

      <div className="con con1">
        <ScrollActiveEl className="fadeIn">
          <img
            src={`${PUBLIC_DIR}images/blog/logo.png`}
            id="blogLogo"
            alt="블로그 로고"
          />
        </ScrollActiveEl>
      </div>

      <div className="con con2">
        <img
          src={`${PUBLIC_DIR}images/blog/white_star.png`}
          alt="흰색 별모양 꾸밈요소"
          className="rotateImg"
        />
        <span className="normalText">
          Gabdong is a blog that captures the growth and experiences of a
          frontend developer. <br />
          It serves as a space to document and share problem-solving processes,
          <br />
          the adoption of new technologies, and various development tips
          encountered along the way.
          <br />
          <br />
          This blog goes beyond simple documentation—it aims to provide valuable
          insights and
          <br />
          helpful information for developers facing similar challenges.
        </span>
        <img
          src={`${PUBLIC_DIR}images/blog/white_logo.png`}
          alt="흰색 블로그 로고"
        />
        <img
          src={`${PUBLIC_DIR}images/blog/background_01.png`}
          alt="배경 그라데이션"
        />
      </div>

      <div className="con con3">
        <div className="container">
          <ScrollActiveEl className="fadeIn">
            <img
              src={`${PUBLIC_DIR}images/blog/working_man.png`}
              alt="작업중인 남자 캐릭터"
            />
          </ScrollActiveEl>
          <div className="textWrap">
            <ScrollActiveEl className="fadeUp">
              <span className="titleL">
                프론트엔드 개발자의
                <br /> 성장과 경험을 담은 블로그
              </span>
            </ScrollActiveEl>
            <ScrollActiveEl className="fadeUp">
              <span className="normalText">
                개발하면서 겪은 문제 해결 과정, 새로운 기술 도입, 그리고 개발
                팁들을 정리하여 공유할 공간입니다.
              </span>
            </ScrollActiveEl>
            <ScrollActiveEl className="fadeUp">
              <span className="normalText">
                이 블로그는 단순한 기록을 넘어
                <br />
                같은 고민을 가진 개발자들에게 도움이 될 수 있는 정보를 제공하는
                것을 목표로 합니다.
              </span>
            </ScrollActiveEl>
            <img
              src={`${PUBLIC_DIR}images/blog/blue_star.png`}
              alt="파란색 별모양 꾸밈요소"
              className="rotateImg"
            />
          </div>
        </div>
      </div>

      <div className="con con4">
        <ScrollActiveEl className="fadeIn">
          <img src={`${PUBLIC_DIR}images/blog/mockup.jpg`} alt="목업 이미지" />
        </ScrollActiveEl>
        <ScrollActiveEl className="fadeUp">
          <img
            src={`${PUBLIC_DIR}images/blog/search.png`}
            alt="검색창 이미지"
          />
        </ScrollActiveEl>
        <ScrollActiveEl className="fadeUp">
          <img
            src={`${PUBLIC_DIR}images/blog/login_modal.png`}
            alt="로그인 모달 이미지"
          />
        </ScrollActiveEl>
        <ScrollActiveEl className="fadeUp">
          <img
            src={`${PUBLIC_DIR}images/blog/upload_modal.png`}
            alt="업로드 모달 이미지"
          />
        </ScrollActiveEl>
        <ScrollActiveEl className="fadeUp">
          <img src={`${PUBLIC_DIR}images/blog/post.png`} alt="게시글 이미지" />
        </ScrollActiveEl>
        <ScrollActiveEl className="fadeIn">
          <img
            src={`${PUBLIC_DIR}images/blog/blue_star.png`}
            alt="파란색 별모양 꾸밈요소"
            className="rotateImg"
          />
        </ScrollActiveEl>
      </div>

      <div className="con con5">
        <div className="container">
          <img
            src={`${PUBLIC_DIR}images/blog/number_01.png`}
            alt="숫자 1 이미지"
            className="numberImg"
          />
          <div className="imgWrap">
            <img
              src={`${PUBLIC_DIR}images/blog/login_modal.png`}
              alt="로그인 모달 이미지"
            />
            <img
              src={`${PUBLIC_DIR}images/blog/character_01.png`}
              alt="캐릭터 이미지"
              className="characterImg wobbleImg"
            />
            <img
              src={`${PUBLIC_DIR}images/blog/blue_star.png`}
              alt="파란색 별모양 꾸밈요소"
              className="rotateImg"
            />
          </div>
          <div className="textWrap">
            <ScrollActiveEl className="fadeUp">
              <span className="title">회원가입 및 로그인</span>
            </ScrollActiveEl>
            <ScrollActiveEl className="fadeUp">
              <span className="normalText">
                블로그의 회원 관리 기능을 위해 MYSQL과 JSON Web Token을 이용하여
                <br />
                로그인 기능을 구현했습니다.
              </span>
            </ScrollActiveEl>
            <div className="textWrapContainer">
              <ScrollActiveEl className="fadeUp">
                <img
                  src={`${PUBLIC_DIR}images/blog/key.png`}
                  alt="열쇠 이미지"
                />
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="subTitle">• 회원가입 및 로그인 구현</span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - MYSQL을 이용하여 사용자 정보를 저장하고 관리합니다.
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 비밀번호는 보안을 위해 암호화 후 저장합니다.
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 로그인 시 입력된 아이디와 비밀번호를 검증한 후,
                  <br />
                  유효한 경우 토큰을 발급하여 인증을 처리합니다.
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 권한이 필요한 페이지 접근시 발급된 토큰을 먼저 검증합니다.
                </span>
              </ScrollActiveEl>
            </div>

            <div className="textWrapContainer">
              <ScrollActiveEl className="fadeUp">
                <img
                  src={`${PUBLIC_DIR}images/blog/locked_with_pen.png`}
                  alt="자물쇠와 펜 이미지"
                />
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="subTitle">
                  • 회원 권한에 따른 게시글 작성 기능
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 일반 회원, 일반 관리자, 마스터 관리자를 구분합니다.
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 일반 관리자는 게시글 작성 및 수정이 가능하며,
                  <br />
                  마스터 관리자는 추가적으로 모든 게시글을 관리할 수 있도록
                  구현했습니다.
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 추후 일반회원은 댓글작성이 가능하도록 기능 추가예정입니다.
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 토큰을 검증하여 사용자의 권한을 확인한 후, 권한에 따라
                  기능을 제한합니다.
                </span>
              </ScrollActiveEl>
            </div>
          </div>
        </div>

        <div className="container">
          <img
            src={`${PUBLIC_DIR}images/blog/number_02.png`}
            alt="숫자 2 이미지"
            className="numberImg"
          />
          <div className="imgWrap">
            <img
              src={`${PUBLIC_DIR}images/blog/post.png`}
              alt="게시글 이미지"
            />
            <img
              src={`${PUBLIC_DIR}images/blog/character_03.png`}
              alt="캐릭터 이미지"
              className="characterImg wobbleImg"
            />
            <img
              src={`${PUBLIC_DIR}images/blog/search.png`}
              alt="검색창 이미지"
            />
          </div>
          <div className="textWrap">
            <ScrollActiveEl className="fadeUp">
              <span className="title">게시글 CRUD</span>
            </ScrollActiveEl>
            <div className="textWrapContainer">
              <ScrollActiveEl className="fadeUp">
                <img
                  src={`${PUBLIC_DIR}images/blog/notepad.png`}
                  alt="노트 이미지"
                />
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="subTitle">
                  • 게시글 작성, 조회, 수정, 삭제
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 게시글 수정 및 삭제는 마스터 관리자와 작성자 본인만
                  가능하도록 구현했습니다.
                </span>
              </ScrollActiveEl>
            </div>

            <div className="textWrapContainer">
              <ScrollActiveEl className="fadeUp">
                <img
                  src={`${PUBLIC_DIR}images/blog/tag.png`}
                  alt="태그 이미지"
                />
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="subTitle">• 게시글 태그 기능</span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 게시글 작성 시 태그를 적용할 수 있도록 구현했습니다.
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - 태그는 여러 개 추가할 수 있으며 이를 통해 게시글을
                  분류합니다.
                </span>
              </ScrollActiveEl>
            </div>

            <div className="textWrapContainer">
              <ScrollActiveEl className="fadeUp">
                <img
                  src={`${PUBLIC_DIR}images/blog/magnifying_glass.png`}
                  alt="돋보기 이미지"
                />
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="subTitle">• 게시글 검색 기능</span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span className="normalText">
                  - MYSQL LIKE 검색을 이용하여 게시글 제목과 내용 검색기능을
                  구현했습니다.
                </span>
              </ScrollActiveEl>
            </div>
          </div>
        </div>

        <div className="container">
          <img
            src={`${PUBLIC_DIR}images/blog/number_03.png`}
            alt="숫자 3 이미지"
            className="numberImg"
          />
          <div className="imgWrap">
            <img
              src={`${PUBLIC_DIR}images/blog/upload_modal.png`}
              alt="업로드 모달 이미지"
            />
            <img
              src={`${PUBLIC_DIR}images/blog/character_02.png`}
              alt="캐릭터 이미지"
              className="characterImg wobbleImg"
            />
          </div>
          <div className="textWrap">
            <ScrollActiveEl className="fadeUp">
              <span className="title">
                AWS S3를 이용한
                <br />
                이미지 업로드 기능
              </span>
            </ScrollActiveEl>
            <ScrollActiveEl className="fadeUp">
              <span className="normalText">
                게시글 작성 시 이미지를 업로드할 수 있도록 AWS S3를
                이용했습니다.
                <br />
                업로드된 이미지는 S3 버킷에 저장되며,
                <br />
                저장된 이미지의 URL을 DB에 함께 저장하고 중복된 이미지의
                업로드를 방지합니다.
              </span>
            </ScrollActiveEl>
          </div>
        </div>
      </div>

      <div className="con con6">
        <img
          src={`${PUBLIC_DIR}images/blog/background_03.png`}
          alt="배경 그라데이션"
        />
        <img src={`${PUBLIC_DIR}images/blog/white_logo.png`} alt="흰색 로고" />
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
    max-width: 70%;
    margin: 0 auto;

    position: relative;
    z-index: 4;

    .subTitle {
      font-size: 28px;
    }

    .normalText {
      font-size: 22px;
    }
  }

  .rotateImg {
    animation: rotate360 2s linear infinite;
  }

  .wobbleImg {
    animation: wobble 1.2s ease-in-out infinite;
  }

  .con1 {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 80px 0;

    & > .fadeIn {
      width: 500px;
      max-width: 50%;

      transition-delay: 0.3s;
    }
  }

  .con2 {
    img:first-child {
      width: 50px;

      position: absolute;
      left: 5%;
      top: 5%;
    }

    .normalText {
      color: #fff;

      position: absolute;
      left: 5%;
      top: calc(5% + 74px);
    }

    img:nth-child(3) {
      max-width: 80%;

      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }

    img:nth-child(4) {
      width: 100%;
    }
  }

  .con3 {
    padding: 180px 0;

    .container {
      align-items: center;
      gap: 60px;

      > .fadeIn > img {
        width: 240px;
        border-radius: 120px;
        transition-delay: 0.3s;
      }

      .textWrap {
        display: flex;
        flex-direction: column;
        gap: 20px;

        text-align: center;

        position: relative;

        .fadeUp:nth-of-type(1) {
          transition-delay: 0.3s;
        }

        .fadeUp:nth-of-type(2) {
          transition-delay: 0.6s;
        }

        .fadeUp:nth-of-type(3) {
          transition-delay: 0.9s;
        }

        img {
          width: 40px;

          position: absolute;
          left: -40px;
          top: -40px;
        }
      }
    }
  }

  .con4 {
    .fadeIn:nth-child(1) {
      transition-delay: 0.3s;

      img {
        width: 100%;
      }
    }

    .fadeUp:nth-child(2) {
      width: 360px;
      transition-delay: 0.6s;

      position: absolute;
      left: 5%;
      top: -20px;
    }

    .fadeUp:nth-child(3) {
      width: 320px;
      transition-delay: 0.6s;

      position: absolute;
      left: 3%;
      bottom: -30px;
    }

    .fadeUp:nth-child(4) {
      width: 300px;
      transition-delay: 0.6s;

      position: absolute;
      right: 20%;
      bottom: -30px;
    }

    .fadeUp:nth-child(5) {
      width: 300px;
      transition-delay: 0.6s;

      position: absolute;
      right: 5%;
      bottom: 40px;
    }

    .fadeIn:nth-child(6) {
      width: 60px;
      transition-delay: 0.3s;

      position: absolute;
      right: 5%;
      top: -30px;
    }
  }

  .con5 {
    .container {
      gap: 40px;
      align-items: center;

      width: 100%;
      max-width: unset;
      padding: 120px 0;

      .numberImg {
        width: 120px;
      }

      .imgWrap {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50%;
        margin: 0 auto;

        position: relative;

        .characterImg {
          width: 320px;
          position: absolute;
        }
      }

      .textWrap {
        display: flex;
        flex-direction: column;
        gap: 30px;

        text-align: center;

        .textWrapContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;

          img {
            width: 50px;
          }

          .fadeUp:nth-child(1) {
            transition-delay: 0.1s;
          }

          .fadeUp:nth-child(2) {
            transition-delay: 0.2s;
          }

          .fadeUp:nth-child(3) {
            transition-delay: 0.3s;
          }

          .fadeUp:nth-child(4) {
            transition-delay: 0.4s;
          }

          .fadeUp:nth-child(5) {
            transition-delay: 0.5s;
          }

          .fadeUp:nth-child(6) {
            transition-delay: 0.6s;
          }
        }
      }
    }

    .container:nth-child(1) {
      .imgWrap {
        .characterImg {
          right: -120px;
          top: 50%;
          transform: translateY(-50%);
        }

        img:nth-child(3) {
          width: 80px;

          position: absolute;
          left: -200px;
          bottom: 15%;
        }
      }
    }

    .container:nth-child(2) {
      background-image: url('${PUBLIC_DIR}images/blog/background_02.png');
      background-repeat: no-repeat;
      background-size: cover;

      .imgWrap {
        .characterImg {
          left: -100px;
          bottom: -100px;
        }

        img:nth-child(3) {
          width: 400px;

          position: absolute;
          right: -100px;
          top: -40px;
        }
      }
    }

    .container:nth-child(3) {
      .imgWrap {
        .characterImg {
          right: -120px;
          bottom: -80px;
        }
      }
    }
  }

  .con6 {
    img:first-child {
      width: 100%;
    }

    img:nth-child(2) {
      width: 40%;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  //- Medium
  ${media.medium`
    .container {
      .subTitle {
        font-size: 26px;
      }

      .normalText {
        font-size: 20px;
        word-break: keep-all;
      }
    }

    .con1 {
      padding: 60px 0;

      & > .fadeIn {
        width: 400px;
      }
    }

    .con2 {
      img:first-child {
        width: 40px;
      }

      .normalText {
        top: calc(5% + 64px);
      }

      img:nth-child(3) {
        max-width: 70%;
      }
    }

    .con3 {
      padding: 140px 0;

      .container {
        gap: 50px;

        > .fadeIn > img {
          width: 200px;
          border-radius: 100px;
        }
      }
    }

    .con4 {
      .fadeUp:nth-child(2) {
        width: 320px;
      }

      .fadeUp:nth-child(3) {
        width: 300px;
      }

      .fadeUp:nth-child(4) {
        width: 240px;
      }

      .fadeUp:nth-child(5) {
        width: 240px;
      }

      .fadeIn:nth-child(6) {
        width: 50px;

        right: 5%;
        top: -25px;
      }
    }

    .con5 {
      .container {
        gap: 30px;

        padding: 100px 0;

        .numberImg {
          width: 90px;
        }

        .imgWrap {
          .characterImg {
            width: 260px;
          }
        }

        .textWrap {
          gap: 20px;

          .textWrapContainer {
            img {
              width: 40px;
            }
          }
        }
      }

      .container:nth-child(1) {
        .imgWrap {
          img:nth-child(3) {
            width: 70px;

            position: absolute;
            left: -160px;
          }
        }
      }

      .container:nth-child(2) {
        .imgWrap {
          img:nth-child(3) {
            width: 300px;

            right: -30px;
            top: -10px;
          }
        }
      }
    }
  `}

  //- Small
  ${media.small`
    .container {
      .subTitle {
        font-size: 18px;
      }

      .normalText {
        font-size: 16px;
      }
    }

    .con1 {
      padding: 40px 0;
    }

    .con2 {
      img:first-child {
        width: 30px;

        top: 8%;
      }

      .normalText {
        top: calc(5% + 54px);
      }

      img:nth-child(4) {
        height: 500px;
      }
    }

    .con3 {
      padding: 100px 0;

      .container {
        gap: 40px;

        > .fadeIn > img {
          width: 180px;
          border-radius: 90px;
        }

        .textWrap {
          gap: 14px;

          .titleL {
            font-size: 22px;
          }
        }
      }
    }

    .con4 {
      .fadeUp:nth-child(2) {
        max-width: 40%;

        top: -5%;
      }

      .fadeUp:nth-child(3) {
        max-width: 30%;

        bottom: -5%;
      }

      .fadeUp:nth-child(4) {
        max-width: 20%;

        bottom: -5%;
      }

      .fadeUp:nth-child(5) {
        max-width: 20%;

        bottom: 4%;
      }

      .fadeIn:nth-child(6) {
        width: 40px;

        top: -20px;
      }
    }

    .con5 {
      .container {
        gap: 20px;

        max-width: 100%;
        padding: 80px 20px;

        .numberImg {
          width: 60px;
        }

        .imgWrap {
          width: 80%;

          .characterImg {
            width: 130px;
          }
        }

        .textWrap {
          gap: 20px;

          .textWrapContainer {
            gap: 8px;

            img {
              width: 30px;
            }
          }
        }
      }

      .container:nth-child(1) {
        .imgWrap {
          .characterImg {
            right: -15%;
          }

          img:nth-child(3) {
            width: 40px;

            left: -15%;
          }
        }
      }

      .container:nth-child(2) {
        .imgWrap {
          .characterImg {
            left: -20%;
            bottom: -14%;
          }

          img:nth-child(3) {
            width: 50%;

            position: absolute;
            right: -5%;
            top: -1%;
          }
        }
      }

      .container:nth-child(3) {
        .imgWrap {
          .characterImg {
            right: -20%;
            bottom: -20%;
          }
        }
      }
    }
  `}
`;
