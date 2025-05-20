import type { IUser } from "../../types/shared";
import ToggleTheme from "../ToggleTheme";

type HeaderProps = {
  user: IUser | null;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 items-center justify-between px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá {user?.name || "Usuário"}</span>
      <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
