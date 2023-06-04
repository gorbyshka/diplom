import { FC } from "react";
import { useLocation } from "react-router-dom";
import { NavLinkProps } from "../../types/headerTypes/NavLinkProps";

import {
    ListItem,
    NavLinkLink
} from "./styleHeader.style"

export const NavLink: FC<NavLinkProps> = ({ path, title }) => {
    const location = useLocation();
    const active = location.pathname === path;

    return (
        <ListItem>

            <NavLinkLink
                to={path}
                active={active ? 1 : 0}
            >
                {title}
            </NavLinkLink>

        </ListItem>
    );
};

export type { NavLinkProps };
