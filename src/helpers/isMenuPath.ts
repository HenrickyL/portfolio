export const isMenuPath = (href: string, pathname: string) => {
    if (href === "/") {
        return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
};
