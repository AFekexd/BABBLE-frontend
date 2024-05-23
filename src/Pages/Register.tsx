import { Button, Checkbox, Image, Input, Link } from "@nextui-org/react";

import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "next-themes";

const Register = () => {
  document.title = "Regisztráció - Chatter";
  const { theme } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="loginHeader flex flex-row items-center justify-center gap-2 font-bold text-2xl">
        <Image
          src="/logobabble.png"
          alt="Chatter"
          width={200}
          height={50}
          className={theme === "light" ? "invert" : ""}
        />
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col gap-2 w-72 ">
        <Input variant="faded" size="sm" label="Felhasználónév" />
        <Input
          variant="faded"
          size="sm"
          label="Jelszó"
          type={isPasswordVisible ? "text" : "password"}
          endContent={
            <Button
              isIconOnly
              size="md"
              variant="light"
              className="focus:outline-none"
              onClick={() => setIsPasswordVisible((v) => !v)}
            >
              {isPasswordVisible ? (
                <BsEyeSlash className="text-xl text-default-400 pointer-events-none" />
              ) : (
                <BsEye className="text-xl text-default-400 pointer-events-none" />
              )}
            </Button>
          }
        />
        <Input
          variant="faded"
          size="sm"
          label="Jelszó újra"
          type={isPasswordVisible ? "text" : "password"}
        />
      </div>
      <div className="flex flex-col gap-2 w-72 hidden">
        <p className="text-sm text-gray-500 mt-2">
          <Checkbox />
          Elfogadom az Általános Szerződési Feltételeket .
        </p>
      </div>
      <Button className="w-72" color="primary" style={{ marginTop: 10 }}>
        {" "}
        Regisztrálás{" "}
      </Button>
      <div>
        <p className="text-sm mt-2">
          {" "}
          Már van fiókod?{" "}
          <Link href="/login" className="text-blue-500 italic ">
            Jelentkezz be!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
