import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ActionIcon from "../ui/ActionIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TOP_HEADER_ITEMS = [
  {
    iconName: "cart",
    onClickHandler: () => {},
  },
  {
    iconName: "favorite",
    onClickHandler: () => {},
  },
  {
    iconName: "user",
    onClickHandler: () => {},
  },
];

const CATEGORY_ITEMS = [
  {
    path: "women",
  },
  {
    path: "men",
  },
  {
    path: "kids",
  },
  {
    path: "sports",
  },
  {
    path: "brands",
  },
  {
    path: "new",
  },
  {
    path: "sale",
    className: "!text-danger font-normal",
  },
];

export default function Header() {
  return (
    <header className="border-primary-200 bg-primary-100/20 sticky top-0 flex flex-col gap-4 border-b p-4 pb-2 backdrop-blur-[1px]">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img src="/icons/logo-mock.svg" />
        </Link>
        <SearchBar />
        <div className="flex gap-4">
          {TOP_HEADER_ITEMS.map(({ iconName, onClickHandler }) => (
            <ActionIcon
              key={iconName}
              iconName={iconName}
              onClickHandler={onClickHandler}
            />
          ))}
        </div>
      </div>
      <nav>
        <ul className="hidden gap-1 sm:flex">
          {CATEGORY_ITEMS.map(({ className, path }) => (
            <Link
              key={path}
              to={`/category/${path}`}
              className={`hover:bg-primary-200/70 rounded px-4 py-1 font-medium capitalize transition-all duration-200 ${className}`}
            >
              {path}
            </Link>
          ))}
        </ul>

        <div className="flex gap-1 pl-4 sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium">
              Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {CATEGORY_ITEMS.map(({ className, path }) => (
                <DropdownMenuItem key={path}>
                  <Link
                    to={`/category/${path}`}
                    className={`hover:bg-primary-200/70 rounded px-4 py-1 font-medium capitalize transition-all duration-200 ${className}`}
                  >
                    {path}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
