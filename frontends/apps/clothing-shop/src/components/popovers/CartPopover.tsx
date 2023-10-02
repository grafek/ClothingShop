import { Popover, PopoverContent, PopoverTrigger } from "@ui/components/popover";
import { CartIcon } from "@ui/icons/index";

export default function CartPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <img src={CartIcon} />
      </PopoverTrigger>
      <PopoverContent>{'Cart'}</PopoverContent>
    </Popover>
  );
}
