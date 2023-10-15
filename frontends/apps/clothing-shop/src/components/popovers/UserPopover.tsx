import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui/components/popover";
import { UserIcon } from "@ui/icons/index";
import Image from "next/image";

export default function UserPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Image alt="" src={UserIcon} />
      </PopoverTrigger>
      <PopoverContent>{"user"}</PopoverContent>
    </Popover>
  );
}
