import {
    Avatar,
    Button,
    Image,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
            href: "/messages",
        },
   
        {
            title: "Beszélgetés",
            href: "/chat",
        },
    ];
    const currentPath = window.location.pathname.split("/")[1];
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
          
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link as={RouterLink} to="/" aria-current="page">
                        <Image src="/logobabble.png" alt="Chatter" width={100} height={50} />
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
                       <Image src="/logobabble.png" alt="Chatter"  width={125} height={50} />
                    </Link>
                </NavbarBrand>
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            color={
                                item.href === "/" + currentPath
                                    ? "warning"
                                    : "primary"
                            }
                            style={{ fontWeight: 500,}}
                            to={item.href}
                            size="lg"
                      
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
                 {/*
                <NavbarItem className="lg:flex">
                    <LangSelector />
                </NavbarItem>
                */}
                {!isLogged && (
                    <>
                        <NavbarItem className="lg:flex">
                            <Button
                             
                                as={Link}
                                href="login"
                                variant={theme === "dark" ? "flat" : "solid"}
                                color="primary"
                            >
                                Bejelentkezés
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="warning"
                                href="register"
                                variant={theme === "dark" ? "flat" : "solid"}
                            >
                                Regisztáció
                            </Button>
                        </NavbarItem>
                    </>
                )}
                {isLogged && (
                    <NavbarItem>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="danger"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </NavbarItem>
                )}
            </NavbarContent>

            <NavbarMenu
                aria-label="Main navigation"
                className={
                    theme === "dark"
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 text-black"
                }
            >
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            className="w-full"
                            color={
                                index === 2
                                    ? "warning"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            to="#"
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Navigation;
