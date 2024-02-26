import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variant="light"
                isIconOnly
                startContent={theme === "light" ? <BsMoon /> : <BsSun />}
                className="font-bold text-xl color-inherit"
            ></Button>
        </>
    );
};

export default ThemeSwitcher;
