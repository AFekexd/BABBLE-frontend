import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import ProfileModal from "../Modals/ProfileModal";
import ThemeModal from "../Modals/ThemeModal";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isOpen: isProfileOpen,
    onOpenChange: setProfileOpen,
    onOpen: openProfile,
  } = useDisclosure();

  const {
    isOpen: isThemeOpen,
    onOpenChange: setThemeOpen,
    onOpen: openTheme,
  } = useDisclosure();

  const { theme } = useTheme();
  const [isLogged] = useState(false);
  const menuItems = [
    {
      title: "Fórum",
      href: "/forum",
    },
    {
      title: "Beszélgetés",
      href: "/chat",
    },
  ];
  const currentPath = window.location.pathname.split("/")[1];
  return (
    <>
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
              <Image
                src="/logobabble.png"
                alt="Chatter"
                width={100}
                height={50}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Link as={RouterLink} to="/" className="font-bold text-inherit">
              <Image
                src="/logobabble.png"
                alt="Chatter"
                width={125}
                height={50}
              />
            </Link>
          </NavbarBrand>
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                as={RouterLink}
                color={item.href === "/" + currentPath ? "warning" : "primary"}
                style={{ fontWeight: 500 }}
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
              <NavbarItem className="hidden md:flex">
                <Button
                  as={Link}
                  href="login"
                  variant={theme === "dark" ? "flat" : "solid"}
                  color="primary"
                >
                  Bejelentkezés
                </Button>
              </NavbarItem>
              <NavbarItem className="hidden md:flex">
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
          {!isLogged && (
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="danger"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu
                  variant="faded"
                  aria-label="Dropdown menu with description"
                >
                  <DropdownItem key="profile" onClick={openProfile}>
                    Profil
                  </DropdownItem>
                  <DropdownItem
                    key="themes"
                    onClick={openTheme}
                    description="Oldal témáinak váltása"
                  >
                    Témák
                  </DropdownItem>
                  {true && (
                    <DropdownItem
                      key="admin"
                      color="warning"
                      className="text-warning"
                      description="Szabályok és beállítások"
                      showDivider
                      as={RouterLink}
                      to="/admin"
                    >
                      ADMIN PANEL
                    </DropdownItem>
                  )}
                  <DropdownItem
                    key="logout"
                    className="text-danger"
                    color="danger"
                  >
                    Kijelentkezés
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenu aria-label="Main navigation">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                as={RouterLink}
                color={item.href === "/" + currentPath ? "warning" : "primary"}
                style={{ fontWeight: 500 }}
                to={item.href}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
          {!isLogged && (
            <div className="flex gap-2 fixed bottom-10">
              <NavbarMenuItem className="lg:flex">
                <Button
                  as={Link}
                  href="login"
                  variant={theme === "dark" ? "flat" : "solid"}
                  color="primary"
                >
                  Bejelentkezés
                </Button>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Button
                  as={Link}
                  color="warning"
                  href="register"
                  variant={theme === "dark" ? "flat" : "solid"}
                >
                  Regisztáció
                </Button>
              </NavbarMenuItem>
            </div>
          )}
        </NavbarMenu>
      </Navbar>
      <ProfileModal isOpen={isProfileOpen} onOpenChange={setProfileOpen} />
      <ThemeModal isOpen={isThemeOpen} onOpenChange={setThemeOpen} />
    </>
  );
};

export default Navigation;
