import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { buildClassName } from '@lib/utils';

type ScrollActiveElProps = {
  className?: string;
  repeat?: boolean;
};

/**
 * - scroll시 element의 50%가 보이면 active class 추가
 */
export default function ScrollActiveEl({
  children,
  className,
  repeat = false,
}: PropsWithChildren<ScrollActiveElProps>) {
  const [isActive, setIsActive] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (repeat) {
          setIsActive(entry.isIntersecting);
        } else {
          if (entry.isIntersecting) setIsActive(entry.isIntersecting);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (elRef.current) observer.observe(elRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={buildClassName([
        'scrollActiveEl',
        className ? className : '',
        isActive ? 'active' : '',
      ])}
      ref={elRef}
    >
      {children}
    </div>
  );
}
