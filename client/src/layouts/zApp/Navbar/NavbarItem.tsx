import { IconButton, ListItemIcon } from "@mui/material";
import type { NavItem } from "./nav.config";

type Props = {
  item: NavItem;
  onClick?: () => void;
};

export const NavbarItem = ({ item, onClick }: Props) => {
  const Icon = item.icon;

  return (
    <ListItemIcon>
      <IconButton onClick={onClick} aria-label={item.label}>
        <Icon fontSize="medium" />
      </IconButton>
    </ListItemIcon>
  );
};
