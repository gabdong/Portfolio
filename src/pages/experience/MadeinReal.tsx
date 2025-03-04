import { useEffect } from 'react';
import styled from 'styled-components';

import { setHeaderVisibility } from '@lib/utils';
import media from '@lib/mediaQueries';

import ScrollActiveEl from '@components/ScrollActiveEl';

const PUBLIC_DIR = import.meta.env.VITE_PUBLIC_DIR;

export default function Madeinreal() {
  useEffect(() => {
    setHeaderVisibility(false);
  }, []);

  return (
    <WrapperSt className="scroll">
      <h2 className="blind">메이드인리얼 작업내용</h2>

      <div className="con1 con">
        <img
          src={`${PUBLIC_DIR}images/mir/logo.png`}
          id="mirLogo"
          alt="메이드인리얼 로고"
        />
        <img
          src={`${PUBLIC_DIR}images/mir/main.png`}
          alt="메이드인리얼 메인 목업"
        />
      </div>

      <div className="con2 con">
        <div className="container">
          <ScrollActiveEl className="fadeIn">
            <span className="titleXL">Automated</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span className="titleXL">Medical</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span className="titleXL">Web Business</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span className="titleXL">Platform.</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeIn">
            <span
              className="normalText"
              style={{ display: 'inline-block', marginTop: '15px' }}
            >
              반복되는 업무를 자동화, 단순화하여 운영자의 피로감을 감소시키는
              솔루션
            </span>
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con3 con">
        <div className="bannerWrap">
          <ScrollActiveEl className="cover coverChange" />
          <div className="bannerContainer">
            <img src={`${PUBLIC_DIR}images/mir/banner.png`} alt="배너 이미지" />
            <img src={`${PUBLIC_DIR}images/mir/banner.png`} alt="배너 이미지" />
          </div>
        </div>
      </div>

      <div className="con4 con">
        <div className="mockUpImgWrap">
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/builder_mockup.png`}
              alt="빌더 메인 목업이미지"
            />
          </ScrollActiveEl>
        </div>
        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <span className="titleL">누구나 전문가처럼 페이지를 제작</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="normalText">
              비전문가도 전문가 수준으로 병/의원 웹페이지를 구축하고
            </span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="normalText">
              운영할 수 있도록 지원하는 웹 기반 자동화 플랫폼(오토메디) 개발
            </span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="normalText">
              약 400개 병/의원에서 실제 활용하며 베타 테스트를 통해 지속적인
              개선 진행 중
            </span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="caption">
              <em>*</em> 현재 프로젝트는 개발 단계로, 세부 내용 공개가
              어려우므로 핵심 내용은 도식화하여 디자인으로 제공하며
              <br />
              상세한 설명은 대면 미팅을 통해 설명해 드릴 예정입니다.
            </span>
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con5 con">
        <div className="textWrap">
          <div className="line"></div>
          <span className="subTitle">Features & Development</span>
          <div className="line"></div>
        </div>
        <div className="backgroundWrap">
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/background_half_circle.png`}
              alt="배경 원형 꾸밈요소"
            />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/background_half_circle.png`}
              alt="배경 원형 꾸밈요소"
            />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/background_half_circle.png`}
              alt="배경 원형 꾸밈요소"
            />
          </ScrollActiveEl>
        </div>
      </div>

      <div className="con6 con">
        <div className="backgroundWrap">
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/background_circle.png`}
              alt="배경 원형 꾸밈요소"
            />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/background_circle.png`}
              alt="배경 원형 꾸밈요소"
            />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/background_circle.png`}
              alt="배경 원형 꾸밈요소"
            />
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/background_circle.png`}
              alt="배경 원형 꾸밈요소"
            />
          </ScrollActiveEl>
        </div>

        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <span className="title">페이지 관리 시스템</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="caption">
              <em>*</em> UI 및 기본 스킨 제공으로 비전문가도 코딩없이 간편하게
              <br /> 웹페이지를 구축 할 수 있도록 지원하는 서비스
            </span>
          </ScrollActiveEl>
        </div>

        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <span className="subTitle">페이지 제작 기능</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/builder_main.png`}
              alt="페이지 빌더 이미지"
            />
          </ScrollActiveEl>
          <ul className="infoUl">
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 텍스트 및 이미지를 간편하게 교체할 수 있는 기능
                  제공
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 페이지요소 스타일 수정 UI
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> JSON으로 구조, 스타일정보 저장 및 출력
                </span>
              </ScrollActiveEl>
            </li>
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 페이지 전체의 공통된 디자인 요소 일괄 수정 기능
                  제공
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 스타일을 별도의 테이블에 저장해 참조하여 사용
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 여러개의 스타일을 중첩하여 HTML class와 동일한
                  방식으로 사용가능
                </span>
              </ScrollActiveEl>
            </li>
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 페이지에 사용될 메뉴구성, 업장정보 등의 관리페이지
                  및 소비자용 웹페이지 연동기능 제공
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 관리자 수정사항의 소비자용 웹페이지 자동반영으로
                  별도 웹페이지 수정작업 불필요
                </span>
              </ScrollActiveEl>
            </li>
          </ul>
        </div>

        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <span className="subTitle">팝업 관리 기능</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/builder_popup.png`}
              alt="팝업 관리 기능 이미지"
            />
          </ScrollActiveEl>
          <ul className="infoUl">
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 팝업을 리스트화 하여 관리
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 여러개의 팝업 동시 노출 여부 조절
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 노출기간, 팝업위치 등 설정 UI 제공
                </span>
              </ScrollActiveEl>
            </li>
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 기본 템플릿 제공으로 별도의 외주 없이 팝업을 등록
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 팝업 테마 설정(슬라이드, 페이드인 등)
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 시즌별 팝업 내부컨텐츠 시안 제공
                </span>
              </ScrollActiveEl>
            </li>
          </ul>
        </div>

        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <span className="subTitle">상담 및 진료 예약시스템 개선</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <img
              src={`${PUBLIC_DIR}images/mir/builder_reserve.png`}
              alt="예약 페이지 이미지"
            />
          </ScrollActiveEl>
          <ul className="infoUl">
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 기존의 단순 시간예약 시스템에서 상품별 소요시간,
                  의료진별 진료시간 등을 연동
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 예약완료시 자동 문자/알림톡 발송기능 제공
                </span>
              </ScrollActiveEl>
            </li>
          </ul>
        </div>
      </div>

      <div className="con7 con">
        <div className="container">
          <ScrollActiveEl className="fadeUp">
            <span className="title">장비 & 상품 관리</span>
          </ScrollActiveEl>
          <ScrollActiveEl className="fadeUp">
            <span className="caption">
              <em>*</em> 병원 내 보유 장비 및 상품을 관리 할 수 있는 서비스
            </span>
          </ScrollActiveEl>
        </div>
        <div className="deviceImgWrap">
          <div className="deviceImgContainer">
            <ScrollActiveEl className="cover coverChange" />
            <img
              src={`${PUBLIC_DIR}images/mir/device_placeholder.png`}
              alt="장비, 상품관리 빈칸이미지"
            />
            <img
              src={`${PUBLIC_DIR}images/mir/device_01.png`}
              alt="의료장비 이미지"
            />
            <img
              src={`${PUBLIC_DIR}images/mir/device_02.png`}
              alt="의료장비 이미지"
            />
            <img
              src={`${PUBLIC_DIR}images/mir/device_03.png`}
              alt="의료장비 이미지"
            />
            <img
              src={`${PUBLIC_DIR}images/mir/device_placeholder.png`}
              alt="장비, 상품관리 빈칸이미지"
            />
          </div>
        </div>
        <div className="container">
          <ul className="infoUl">
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 장비, 상품 관리
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 장비/상품의 정보, 이미지 등을 직접 관리 할 수 있는
                  서비스
                </span>
              </ScrollActiveEl>
            </li>
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 자동 페이지 연동
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 장비 및 상품정보 수정 시, 소비자용 웹페이지에
                  적용되도록 자동화
                </span>
              </ScrollActiveEl>
            </li>
            <li>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>▶︎</em> 상품 결제 기능 연동
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 등록된 상품 목록과 연동된 결제 서비스
                </span>
              </ScrollActiveEl>
              <ScrollActiveEl className="fadeUp">
                <span>
                  <em>*</em> 이벤트 기간 및 이벤트 가격, 할인 비율 등 설정 기능
                </span>
              </ScrollActiveEl>
            </li>
          </ul>
        </div>
      </div>

      <div className="con8 con">
        <div className="">
          <div className="container">
            <ScrollActiveEl className="fadeUp">
              <span className="title">CRM 및 협업툴</span>
            </ScrollActiveEl>
            <ScrollActiveEl className="fadeUp">
              <span className="caption">
                <em>*</em> 업무 효율 극대화를 위한 CRM 및 부서간 협업 시스템
              </span>
            </ScrollActiveEl>
          </div>

          <div className="imageAnimationWrap right">
            <ScrollActiveEl className="imageAnimation">
              <img
                src={`${PUBLIC_DIR}images/mir/crm_service.png`}
                alt="crm 관련 이미지"
              />
            </ScrollActiveEl>
          </div>
        </div>

        <div>
          <div className="imageAnimationWrap left">
            <ScrollActiveEl className="imageAnimation">
              <img
                src={`${PUBLIC_DIR}images/mir/works_service.png`}
                alt="협업툴 관련이미지"
              />
            </ScrollActiveEl>
          </div>
          <div className="container">
            <ul className="infoUl">
              <li>
                <ScrollActiveEl className="fadeUp">
                  <span>
                    <em>▶︎</em> 소수의 인원으로 다수의 업무를 소화 할 수 있도록
                    자동화
                  </span>
                </ScrollActiveEl>
                <ScrollActiveEl className="fadeUp">
                  <span>
                    <em>*</em> 도입 후 업무 부하율 52% 감소
                  </span>
                </ScrollActiveEl>
                <ScrollActiveEl className="fadeUp">
                  <span>
                    <em>*</em> 상황별 메세지 설정으로 자동 문자/알림톡 발송
                  </span>
                </ScrollActiveEl>
                <ScrollActiveEl className="fadeUp">
                  <span>
                    <em>*</em> 회원별 진료 및 결제기록 관리
                  </span>
                </ScrollActiveEl>
              </li>
              <li>
                <ScrollActiveEl className="fadeUp">
                  <span>
                    <em>▶︎</em> 여러 부서의 실시간 업무 진행상태 공유 및 관리를
                    위한 업무 연동 기능
                  </span>
                </ScrollActiveEl>
                <ScrollActiveEl className="fadeUp">
                  <span>
                    <em>*</em> socket.io를 이용한 실시간 알림 및 댓글
                  </span>
                </ScrollActiveEl>
                <ScrollActiveEl className="fadeUp">
                  <span>
                    <em>*</em> 상/하위 계층구조의 프로젝트 관리로 업무 진행과정
                    확인
                  </span>
                </ScrollActiveEl>
              </li>
            </ul>
          </div>
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
  background: var(--dark-m);
  line-height: 1.2;
  overflow-x: hidden;

  img {
    max-width: 100%;
  }

  .con {
    width: 100%;
    padding-top: 180px;
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
    z-index: 1;

    .caption {
      font-size: 16px;
    }

    .subTitle {
      font-size: 28px;
      color: #fff;
    }

    .normalText {
      word-break: keep-all;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;

      margin-top: 20px;

      li {
        display: flex;
        flex-direction: column;
        gap: 8px;

        span > em {
          font-size: 12px;
        }

        .fadeUp:nth-child(1) {
          transition-delay: 0.3s;

          span {
            display: flex;
            align-items: center;
            gap: 8px;

            font-size: 20px;
            word-break: keep-all;
          }
        }

        .fadeUp:not(:nth-child(1)) {
          span {
            display: flex;
            align-items: center;
            gap: 8px;

            margin-left: 18px;
            font-size: 16px;
            word-break: keep-all;
          }
        }

        .fadeUp:nth-child(2) {
          transition-delay: 0.4s;
        }

        .fadeUp:nth-child(3) {
          transition-delay: 0.5s;
        }

        .fadeUp:nth-child(4) {
          transition-delay: 0.6s;
        }
      }
    }
  }

  .con6,
  .con7 {
    padding-top: 120px;
    padding-bottom: 120px;

    .container {
      gap: 28px;

      padding: 60px 0;
    }
  }

  .con1 {
    background: black;

    #mirLogo {
      width: 40%;
      max-width: 300px;
      margin-bottom: 60px;

      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .con2 {
    background: linear-gradient(to bottom, var(--dark-l), var(--dark-m));

    .container {
      gap: 14px;
    }

    .fadeIn {
      &:nth-child(2) {
        transition-delay: 0.2s;
      }

      &:nth-child(3) {
        transition-delay: 0.4s;
      }

      &:nth-child(4) {
        transition-delay: 0.6s;
      }

      &:nth-child(5) {
        transition-delay: 0.8s;
      }
    }

    .normalText {
      font-size: 24px;
    }
  }

  .con3 {
    .bannerWrap {
      width: 100%;

      position: relative;

      .bannerContainer {
        display: flex;
        gap: 20px;

        width: 300%;
        animation: banner 20s linear infinite;

        img {
          max-width: unset;
          width: 50%;
        }
      }
    }
  }

  .con4 {
    padding: unset;
    margin-top: 180px;
    background-image: url('${PUBLIC_DIR}images/mir/builder_sample.png');
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: rgba(23, 23, 23, 0.7);
    background-blend-mode: multiply;

    .mockUpImgWrap {
      width: 70%;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 20%;

      .fadeUp {
        transition-delay: 0.3s;
      }
    }

    .container {
      margin-top: 30px;
      text-align: center;

      .normalText {
        display: block;
        font-size: 18px;
        color: #fff;
      }

      .fadeUp:first-child {
        transition-delay: 0.3s;
      }

      .fadeUp:nth-child(2) {
        margin-top: 40px;
        transition-delay: 0.6s;
      }

      .fadeUp:nth-child(3) {
        transition-delay: 0.9s;
      }

      .fadeUp:nth-child(4) {
        margin-top: 20px;
        transition-delay: 1.2s;
      }

      .fadeUp:nth-child(5) {
        transition-delay: 1.5s;
        margin-top: 40px;
      }
    }
  }

  .con5 {
    aspect-ratio: 4.99 / 1;
    position: relative;

    .textWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      width: 50%;
      color: #fff;

      position: absolute;
      left: 50%;
      top: 60%;
      z-index: 1;
      transform: translateX(-50%);

      .line {
        flex: 1;

        height: 1px;
        background: #fff;
      }

      .subTitle {
        font-size: 18px;
      }
    }

    .backgroundWrap {
      .fadeUp {
        width: 40%;
        position: absolute;

        &:nth-child(1) {
          left: 0;
          bottom: 0;
          transition-delay: 0.6s;
        }

        &:nth-child(2) {
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          transition-delay: 0.5s;
        }

        &:nth-child(3) {
          right: 0;
          bottom: 0;
          transition-delay: 0.6s;
        }

        img {
          width: 100%;
        }
      }
    }
  }

  .con6 {
    position: relative;

    .backgroundWrap {
      .fadeUp {
        width: 100%;
        max-width: 800px;
        transition-delay: 0.5s;

        position: absolute;

        img {
          width: 100%;
        }
      }

      .fadeUp:nth-child(1) {
        right: -5%;
        top: 5%;
      }

      .fadeUp:nth-child(2) {
        left: -5%;
        top: 40%;
      }

      .fadeUp:nth-child(3) {
        left: -5%;
        top: 80%;
      }

      .fadeUp:nth-child(4) {
        left: 30%;
        top: 85%;
      }
    }

    .container {
      > .fadeUp:nth-child(1) {
        transition-delay: 0.3s;
      }
      > .fadeUp:nth-child(2) {
        transition-delay: 0.6s;
      }
    }
  }

  .con7 {
    background-image: url('${PUBLIC_DIR}images/mir/background_half_circle.png');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center bottom;

    .deviceImgWrap {
      width: 100%;
      overflow: hidden;

      position: relative;

      .deviceImgContainer {
        display: flex;
        justify-content: center;

        width: 95%;
        margin: 0 auto;
        overflow: hidden;

        position: relative;

        img {
          width: 25%;
        }

        img:nth-child(2) {
          transform: scale(0.7);
          margin-right: -3%;
        }

        img:nth-child(3) {
          transform: scale(0.9);
          margin-right: 1%;
        }

        img:nth-child(4) {
          margin-right: 1%;
        }

        img:nth-child(5) {
          transform: scale(0.9);
          margin-right: -3%;
        }

        img:nth-child(6) {
          transform: scale(0.7);
        }
      }
    }
  }

  .con8 {
    display: flex;
    flex-direction: column;
    gap: 80px;

    padding: 120px 0;

    > div {
      display: flex;
      gap: 40px;

      .container {
        justify-content: center;
        flex: 1;

        width: unset;
        max-width: 50%;
      }

      .imageAnimationWrap {
        flex: 1;

        max-width: 50%;
        background-size: 70%;
        background-repeat: no-repeat;
        position: relative;

        .imageAnimation {
          opacity: 0;
          transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;
          transition-delay: 0.3s;

          &.active {
            opacity: 1;
          }
        }
      }

      .imageAnimationWrap.right {
        background-image: url('${PUBLIC_DIR}images/mir/background_gradation_right.png');
        background-position: right center;

        right: 0;
        top: 0;

        .imageAnimation {
          width: 120%;
          max-width: 1000px;
          transform: translateX(15vw);

          img {
            width: 100%;
          }

          &.active {
            transform: translateX(-2vw);
          }
        }
      }

      .imageAnimationWrap.left {
        background-image: url('${PUBLIC_DIR}images/mir/background_gradation_left.png');
        background-position: left center;

        left: 0;

        .imageAnimation {
          width: 90%;
          max-width: 800px;
          transform: translateX(-4vw);

          img {
            width: 100%;
          }

          &.active {
            transform: translateX(2vw);
          }
        }
      }
    }

    > div:first-child {
      .container {
        padding-left: 15%;
      }
    }

    > div:last-child {
      .container {
        padding-right: 15%;
      }
    }
  }

  //- Medium
  ${media.medium`
    .con {
      padding-top: 120px;
    }

    .container {
      .caption {
        font-size: 16px;
      }

      .subTitle {
        font-size: 26px;
      }

      ul {
        gap: 18px;

        margin-top: 14px;

        li {
          gap: 4px;

          .fadeUp:nth-child(1) {
            span {
              font-size: 18px;
            }
          }

          .fadeUp:not(:nth-child(1)) {
            span {
              font-size: 16px;
              margin-left: 16px;
            }
          }
        }
      }
    }

    .con6,
    .con7,
    .con8 {
      padding-top: 80px;
      padding-bottom: 80px;

      .container {
        gap: 22px;

        padding: 40px 0;
      }
    }

    .con1 {
      #mirLogo {
        max-width: 260px;
        margin-bottom: 50px;
      }
    }

    .con2 {
      .container {
        gap: 10px;
      }

      .normalText {
        font-size: 18px;
      }
    }

    .con3 {
      .bannerWrap {
        .bannerContainer {
          gap: 20px;
        }
      }
    }

    .con4 {
      margin-top: 120px;

      .container {
        margin-top: 20px;

        .normalText {
          font-size: 18px;
        }
      }
    }

    .con8 {
    }
  `}

  //- Small
  ${media.small`
    .con {
      padding-top: 100px;
    }

    .container {
      .caption {
        font-size: 12px;
      }

      .subTitle {
        font-size: 22px;
      }

      ul {
        gap: 24px;

        li {
          gap: 12px;

          .fadeUp:nth-child(1) {
            span {
              font-size: 16px;
            }
          }

          .fadeUp:not(:nth-child(1)) {
            span {
              font-size: 14px;
            }
          }
        }
      }
    }

    .con6,
    .con7,
    .con8 {
      padding-top: 40px;
      padding-bottom: 40px;

      .container {
        padding: 40px 0;
      }
    }

    .con2 {
      .normalText {
        font-size: 15px;
      }
    }

    .con3 {
      .bannerWrap {
        .bannerContainer {
          width: 3200px;
        }
      }
    }

    .con4 {
      margin-top: 120px;

      .mockUpImgWrap {
        width: 80%;
        margin-top: 5%;
      }

      .container {
        .normalText {
          font-size: 15px;
        }
      }
    }

    .con5 {
      .textWrap {
        gap: 14px;

        width: 80%;

        top: 40%;

        .subTitle {
          font-size: 14px;
        }
      }
    }

    .con6 {
      .backgroundWrap {
        .fadeUp {
          width: 80%;
        }
      }
    }

    .con8 {
      > div {
        flex-direction: column;

        .container {
          width: 1080px;
          max-width: 70%;
        }

        .imageAnimationWrap {
          flex: 1;

          max-width: 100%;
        }
      }

      > div:first-child {
        .container {
          padding-left: 0;
        }
      }

      > div:last-child {
        flex-direction: column-reverse;

        .container {
          padding-right: 0;
        }
      }
    }
  `}
`;
