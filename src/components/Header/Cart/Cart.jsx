import thumbnail1 from "../../../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../../assets/images/icon-delete.svg";

export default function Cart({ className, cartItems, setCartItems }) {

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div
            className={`${className} font-kumbh flex flex-col px-3 py-6 rounded-3xl bg-white backdrop-blur-lg shadow-xl border border-white/30`}
        >
            <div>
                <p className="font5 text-grey-950">Cart</p>
                <hr className="w-full border-grey-100" />
            </div>

            {cartItems.length === 0 ? (
                <div className="pt-18 pb-15 justify-center flex">
                    <p className="font5 text-grey-500">Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            <div className="flex items-center gap-4 py-6">
                                <img
                                    src={thumbnail1}
                                    alt="Product thumbnail"
                                    className="w-[50px] h-[50px] object-cover rounded-sm"
                                />
                                <div className="flex flex-col">
                                    <p className="text-grey-500 font3">{item.name}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="font3 text-grey-500">
                                            ${item.price.toFixed(2)} × {item.quantity}
                                        </p>
                                        <span className="font5 text-grey-950">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={() => setCartItems([])} className="cursor-pointer">
                                    <img src={deleteIcon} alt="Delete cart" />
                                </button>
                            </div>

                            <button className="bg-orange-500 hover:bg-orange-300 rounded-[10px] py-4 px-26 font5 cursor-pointer">
                                Checkout
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}