/**
 * * className 만들어주는 함수
 * @param arr - className으로 만들 배열
 * @returns - className
 */
export function buildClassName(arr: (string | undefined)[]): string {
  return arr.filter((str) => str && str != '').join(' ');
}

/**
 * - header display 조절
 */
export function setHeaderVisibility(isVisible: boolean): void {
  const header = document.getElementById('header') as HTMLHeadElement;

  if (isVisible) {
    header.classList.remove('hide');
  } else {
    header.classList.add('hide');
  }
}
