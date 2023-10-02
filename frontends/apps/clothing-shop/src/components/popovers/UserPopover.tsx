import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui/components/popover";
import { UserIcon } from "@ui/icons/index";

export default function UserPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <img src={UserIcon} />
      </PopoverTrigger>
      <PopoverContent>{'user'}</PopoverContent>
    </Popover>
  );
}
