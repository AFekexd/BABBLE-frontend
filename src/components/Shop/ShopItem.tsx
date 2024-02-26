const ShopItem = ({ item }: any) => {
    return (
        <div className="flex flex-col items-center justify-center w-64 h-64 p-4 bg-white rounded shadow">
            <img
                className="max-w-full max-h-32 mb-4"
                src={item.img}
                alt={item.name}
            />
            <div className="flex flex-col items-center justify-center w-full">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.price}$</p>
                <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Buy
                </button>
            </div>
        </div>
    );
};

export default ShopItem;
