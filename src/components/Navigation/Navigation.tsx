import {
    Avatar,
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdAppRegistration, MdLogin, MdLogout } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import LangSelector from "../LangSelector";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme();
    const [isLogged] = useState(false);
    const menuItems = [
        {
            title: "Fórum",
            href: "/forum",
        },
        {
            title: "Üzenetek",
            href: "/chat",
        },
    ];

    const [activeItem, setActiveItem] = useState(menuItems[0].title);

    useEffect(() => {
        console.log(activeItem);
    }, [activeItem]);
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={
                (theme === "dark"
                    ? "bg-mainbg text-white"
                    : "bg-gray-300 text-black") + ""
            }
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link as={RouterLink} to="/" aria-current="page">
                        <p className="font-bold text-inherit">CHATTER</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link
                        as={RouterLink}
                        to="/"
                        className="font-bold text-inherit"
                    >
                        CHATTER
                    </Link>
                </NavbarBrand>
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            color={
                                item.title === activeItem
                                    ? "warning"
                                    : theme === "dark"
                                    ? "foreground"
                                    : "secondary"
                            }
                            to={item.href}
                            size="lg"
                            onClick={() => setActiveItem(item.title)}
                        >
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarItem className="lg:flex">
                    <LangSelector />
                </NavbarItem>
                {!isLogged && (
                    <>
                        <NavbarItem className="lg:flex">
                            <Button
                                color="success"
                                as={Link}
                                href="login"
                                variant={theme === "dark" ? "flat" : "solid"}
                                startContent={<MdLogin />}
                            >
                                <span className="hidden lg:block">
                                    {" "}
                                    Bejelentkezés
                                </span>
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="warning"
                                href="register"
                                variant={theme === "dark" ? "flat" : "solid"}
                                startContent={<MdAppRegistration />}
                            >
                                <span className="hidden lg:block">
                                    {" "}
                                    Regisztáció
                                </span>
                            </Button>
                        </NavbarItem>
                    </>
                )}
                {!isLogged && (
                    <NavbarItem>
                        <Popover placement="bottom" offset={20} showArrow>
                            <PopoverTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="danger"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </PopoverTrigger>
                            <PopoverContent>
                                <Button variant="light">
                                    {" "}
                                    Profil megtekintése
                                </Button>

                                <Button variant="light" color="secondary">
                                    Beállítások
                                </Button>
                                <Button
                                    variant="light"
                                    color="danger"
                                    startContent={<MdLogout />}
                                >
                                    Kijelentkezés
                                </Button>
                            </PopoverContent>
                        </Popover>
                    </NavbarItem>
                )}
            </NavbarContent>

            <NavbarMenu
                aria-label="Main navigation"
                className={
                    theme === "dark"
                        ? "bg-mainbg text-white"
                        : "bg-gray-200 text-black"
                }
            >
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            className="w-full"
                            color={"foreground"}
                            to="#"
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Link
                        as={RouterLink}
                        className="w-full"
                        color={"foreground"}
                        to="#"
                        size="lg"
                    >
                        Beállítások
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="lg:flex">
                    <ThemeSwitcher />
                    <LangSelector />
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Navigation;
