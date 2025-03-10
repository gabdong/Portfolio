import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import media from '@lib/mediaQueries';

import Madeinreal from '@pages/experience/MadeinReal';
import Samsung from '@pages/experience/Samsung';
import Blog from '@pages/experience/Blog';
import MaxWidthContainer from '@components/MaxWidthContainer';
import ClosePortfolioViewBtn from '@components/ClosePortfolioViewBtn';
import { setHeaderVisibility } from '@lib/utils';
import ScrollActiveEl from '@components/ScrollActiveEl';

type ExperienceListData = {
  animationPosition: 'left' | 'top' | 'right';
  coverColor: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
};

const PUBLIC_DIR = import.meta.env.VITE_PUBLIC_DIR;

const experienceArr: ExperienceListData[] = [
  {
    animationPosition: 'left',
    coverColor: 'var(--gray)',
    title: 'MADEINREAL',
    description: '병/의원 자동화 플랫폼',
    link: 'madeinreal',
    thumbnail: `${PUBLIC_DIR}images/mir/thumbnail.jpg`,
  },
  {
    animationPosition: 'top',
    coverColor: 'var(--gray-l)',
    title: '삼성생명',
    description: '삼성생명 이벤트 페이지',
    link: 'samsung',
    thumbnail: `${PUBLIC_DIR}images/samsung/thumbnail.jpg`,
  },
  {
    animationPosition: 'right',
    coverColor: 'var(--gray-l-2)',
    title: 'Blog',
    description: '블로그 제작',
    link: 'blog',
    thumbnail: `${PUBLIC_DIR}images/blog/thumbnail.png`,
  },
];

export default function Experience() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const portFolioViewName = searchParams.get('name');

  const experienceItemListRef = useRef<HTMLUListElement>(null);
  const portFolioViewWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //* 작업물리스트 커버 애니메이션
    const experienceItemList =
      experienceItemListRef.current as HTMLUListElement;
    const experienceItem = experienceItemList.children;

    if (!portFolioViewName) {
      for (const item of experienceItem) {
        item.classList.add('active');
        setHeaderVisibility(true);
      }
    }

    //* 작업물소개 영역 애니메이션
    const portFolioViewWrap = portFolioViewWrapRef.current as HTMLDivElement;
    if (portFolioViewName) {
      setTimeout(() => {
        portFolioViewWrap.classList.add('active');
      }, 200);
    } else if (portFolioViewWrap.classList.contains('active')) {
      portFolioViewWrap.classList.remove('active');
    }
  }, [portFolioViewName]);

  return (
    <>
      {/* //* 작업물 리스트 */}
      <MaxWidthContainer style={{ paddingTop: '140px' }} className="scroll">
        <WrapperSt id="experienceListWrap">
          <h2 className="blind">작업물 리스트</h2>
          <ExperienceListSt id="experienceList" ref={experienceItemListRef}>
            {experienceArr.map((data, i) => {
              const { title, description, link, thumbnail } = data;

              return (
                <ExperienceItemSt className="experienceListItem" key={i}>
                  <Link to={`/experience?name=${link}`}>
                    <img src={thumbnail} />
                    <div className="experienceItemCover" />
                    <div className="experienceItemInfoCover">
                      <h3 className="title">{title}</h3>
                      <span className="normalText">{description}</span>
                    </div>
                  </Link>
                  <Link to={`/experience?name=${link}`}>
                    <div className="experienceItemInfoText">
                      <ScrollActiveEl className="fadeIn">
                        <h3 className="title">{title}</h3>
                        <span className="normalText">{description}</span>
                      </ScrollActiveEl>
                    </div>
                  </Link>
                </ExperienceItemSt>
              );
            })}
          </ExperienceListSt>
        </WrapperSt>
      </MaxWidthContainer>

      {/* //* 작업물 소개 */}
      <PortfolioViewWrapSt ref={portFolioViewWrapRef}>
        <ClosePortfolioViewBtn />
        {portFolioViewName === 'madeinreal' && <Madeinreal />}
        {portFolioViewName === 'samsung' && <Samsung />}
        {portFolioViewName === 'blog' && <Blog />}
      </PortfolioViewWrapSt>
    </>
  );
}

const WrapperSt = styled.section`
  width: 100%;
`;
const ExperienceListSt = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 20px;

  width: 100%;
  height: 100%;
  padding-bottom: 80px;

  ${experienceArr.map((data, i) => {
    const { animationPosition, coverColor } = data;
    const delay = 0.3 * (i + 1);
    return `
    & .experienceListItem:nth-child(${i + 1}) {
      .experienceItemCover {
        background: ${coverColor};
        transition: ${animationPosition} 0.2s ease-in-out ${delay}s;
        ${animationPosition}: 0;
      }
    }
    & .experienceListItem:nth-child(${i + 1}).active {
      .experienceItemCover {
        ${animationPosition}: -100%;
      }
    }`;
  })}

  ${media.medium`
    flex-direction: column;
    gap: 80px;
  `}

  ${media.small`
    flex-direction: column;
    gap: 60px;
  `}
`;
const ExperienceItemSt = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 33.333%;
  transition: transform 0.3s;

  a:first-child {
    width: 100%;
    aspect-ratio: 4 / 5;
    overflow: hidden;

    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .experienceItemInfoCover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;

    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.3s;

    position: absolute;
    left: 0;
    top: 0;

    .normalText {
      font-size: 18px;
    }
  }

  .experienceItemCover {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    z-index: 1;
  }

  .experienceItemInfoText {
    .fadeIn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;

      transition-delay: 0.3s;

      .normalText {
        font-size: 18px;
      }
    }
  }

  ${media.large`
    &:hover {
      transform: scale(0.95);
  
      .experienceItemInfoCover {
        opacity: 1;
      }
    }

    .experienceItemInfoText {
      display: none;
    }
  `}

  ${media.medium`
    gap: 20px;

    width: 50%;
    margin: 0 auto;

    .experienceItemInfoCover {
      display: none;
    }

    .experienceItemInfoText {
      display: flex;
      justify-content: center;

      .fadeIn {
        gap: 4px;
      }
    }
  `}

  ${media.small`
    gap: 14px;

    width: 80%;
    margin: 0 auto;
  `}
`;
const PortfolioViewWrapSt = styled.div`
  width: 100%;
  height: 100%;
  transition: top 0.2s ease-in-out;

  position: fixed;
  left: 0;
  top: 100%;
  z-index: 1;

  &.active {
    top: 0;
    transition: top 1s ease-in-out;
  }

  #closePortfolioViewBtn {
    position: absolute;
    right: 50px;
    top: 50px;
    z-index: 5;
  }

  ${media.small`
    #closePortfolioViewBtn {
      right: 24px;
      top: 24px;
    }
  `}
`;
