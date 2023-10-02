import { Popover, PopoverContent, PopoverTrigger } from "@ui/components/popover";
import {  HeartIcon } from "@ui/icons/index";

export default function FavoritesPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <img src={HeartIcon} />
      </PopoverTrigger>
      <PopoverContent>{'fav'}</PopoverContent>
    </Popover>
  );
}
