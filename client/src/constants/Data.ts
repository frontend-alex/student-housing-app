export const NavbarLinks = (userId: string | null | undefined) => [
    {
        name: "Home",
        path: '/',
    },
    {
        name: "About",
        path: '/about',
    },
    {
        name: "Contact us",
        path: '/contact',
    },
    {
        name: userId ? "Dashboard"  : "" ,
        path: userId ? '/dashboard' : "",
    },
]