import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui/components/popover";
import { HeartIcon } from "@ui/icons/index";
import Image from "next/image";

export default function FavoritesPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Image alt="" src={HeartIcon} />
      </PopoverTrigger>
      <PopoverContent>{"fav"}</PopoverContent>
    </Popover>
  );
}
