import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";

const LangSelector = () => {
    const languages = [
        {
            name: "Hungarian",
            code: "hu",
        },
        {
            name: "English",
            code: "GB",
        },
    ];

    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return (
        <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
                <Button isIconOnly variant="light" className="text-2xl">
                    <MdLanguage />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                {languages.map((lang) => (
                    <Button
                        key={lang.code}
                        onClick={() => setSelectedLang(lang)}
                        variant="light"
                    >
                        {lang.name}
                    </Button>
                ))}
            </PopoverContent>
        </Popover>
    );
};

export default LangSelector;
