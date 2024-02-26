const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-3">
            <div className="w-full">
                <h1 className="text-3xl font-bold">CHATTER</h1>
                <p>Üdvözöllek a NextUI alapú oldalon.</p>
                <div className="flex flex-col gap-4 max-h-full overflow-auto"></div>
            </div>
        </div>
    );
};

export default Home;
