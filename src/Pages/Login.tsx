import { Button, Image, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { loginUser } from "../hooks/UserHooks";
import "../styles/Login.css";
const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    document.title = "Bejelentkezés - Chatter";

    const handleSubmit = (e: any) => {
        e.preventDefault();
        loginUser(username, password);
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="loginHeader flex flex-row items-center justify-center gap-2 font-bold text-2xl">
            <Image src="/logobabble.png" alt="Chatter" width={200} height={50} />
                <ThemeSwitcher />
            </div>
            <div className="flex flex-col gap-2 w-72 ">
                <Input
                    variant="faded"
                    size="sm"
                    label="Felhasználónév"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <Input
                    variant="faded"
                    size="sm"
                    label="Jelszó"
                    type={isPasswordVisible ? "text" : "password"}
                    className="flex flex-row items-center justify-center gap-2"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    endContent={
                        <button
                            className="focus:outline-none"
                            onClick={() => setIsPasswordVisible((v) => !v)}
                        >
                            {isPasswordVisible ? (
                                <BsEyeSlash className="text-xl text-default-400 pointer-events-none" />
                            ) : (
                                <BsEye className="text-xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                />
            </div>
            <Button
                as={Link}
                href="/home"
                className="w-72"
                color="primary"
                style={{ marginTop: 10 }}
                onClick={handleSubmit}
            >
                {" "}
                Bejelentkezés{" "}
            </Button>
            <div>
                <p className="text-sm mt-2">
                    {" "}
                    Még nincs fiókod?{" "}
                    <Link href="/register" className="text-blue-500 italic ">
                        Regisztrálj!
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
