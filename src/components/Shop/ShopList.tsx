import ShopItem from "./ShopItem";

const ShopList = () => {
    const dummy = [
        {
            id: 1,
            name: "AirPods",
            price: 200000,
            img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000",
        },
        //generate 20 items
        ...Array(20).fill({
            id: 1,
            name: "AirPods",
            price: 200000,
            img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000",
        }),
    ];

    return (
        <div className="w-90">
            <div className="flex justify-center flex-wrap gap-3">
                {/* use ShopItem */}
                {dummy.map((item) => (
                    <ShopItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ShopList;
