/// <reference types="vite/client" />

type HeaderProps = {
  menuOn: boolean;
  setMenuOn: React.Dispatch<React.SetStateAction<boolean>>;
  pathname?: string;
};
