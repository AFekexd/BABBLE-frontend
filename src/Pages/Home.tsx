const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-3">
            <div className="w-full">
                <h1 className="text-3xl font-bold">CHATTER</h1>
                <p>Üdvözöllek a NextUI alapú oldalon.</p>
                <div className="flex flex-col gap-4 max-h-full overflow-auto">
                    {Array(10)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i} className="flex flex-col gap-4">
                                <div> Header </div>
                                <div> Content </div>
                                <div> Footer </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
