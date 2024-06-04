//@ts-nocheck
import { Button, Checkbox, Image, Input, Link } from "@nextui-org/react";

import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "next-themes";
import { CustomToast } from "../components/CustomToast";
import { useRegisterMutation } from "../features/auth/authApiSlice";

const Register = () => {
  const { theme } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [trigger] = useRegisterMutation({});
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
  });
  const validateUser = (user) => {
    if (user.password !== user.password2) {
      CustomToast("A jelszavak nem egyeznek!", "error");
    } else {
      trigger({
        username: user.username,
        password: user.password,
      })
        .then(() => {
          CustomToast("Sikeres regisztráció!", "success");
        })
        .catch((err) => {
          CustomToast("Sikertelen regisztráció!", "error");
        });
    }
  };

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
        <Input
          variant="faded"
          size="sm"
          label="Felhasználónév"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Input
          variant="faded"
          size="sm"
          label="Jelszó"
          type={isPasswordVisible ? "text" : "password"}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
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
          value={user.password2}
          onChange={(e) => setUser({ ...user, password2: e.target.value })}
          type={isPasswordVisible ? "text" : "password"}
        />
      </div>
      <div className="flex flex-col gap-2 w-72 hidden">
        <p className="text-sm text-gray-500 mt-2">
          <Checkbox />
          Elfogadom az Általános Szerződési Feltételeket .
        </p>
      </div>
      <Button
        className="w-72"
        color="primary"
        style={{ marginTop: 10 }}
        onPress={() => validateUser(user)}
      >
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
