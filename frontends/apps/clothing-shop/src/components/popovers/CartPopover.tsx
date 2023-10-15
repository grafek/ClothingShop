import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui/components/popover";
import { CartIcon } from "@ui/icons/index";
import Image from "next/image";

export default function CartPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Image src={CartIcon} alt="" />
      </PopoverTrigger>
      <PopoverContent>{"Cart"}</PopoverContent>
    </Popover>
  );
}
