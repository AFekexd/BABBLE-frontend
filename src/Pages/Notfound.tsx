import { Link } from "@nextui-org/react";

const Notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-3xl font-bold">404</h1>
            <p>A keresett oldal nem található.</p>
            <Link href="/">Vissza a főoldalra</Link>
        </div>
    );
};

export default Notfound;
