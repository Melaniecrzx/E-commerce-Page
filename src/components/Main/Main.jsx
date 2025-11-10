import { useState } from "react"
import minus from "../../assets/images/icon-minus.svg"
import plus from "../../assets/images/icon-plus.svg"
import cart from "../../assets/images/icon-cart.svg"
import Gallery from "./Gallery/Gallery"


export default function Main({ setCartItems }) {

    const [quantity, setQuantity] = useState(0);


    const handleQuantityChanger = (amount) => {
        setQuantity(prev => Math.max(0, prev + amount));
    }

    const handleAddToCart = () => {
        if (quantity === 0) return;

        const product = {
            id: 1,
            name: "Fall Limited Edition Sneakers",
            price: 125.00,
            quantity,
            image: "../../assets/images/image-product-1-thumbnail.jpg"
        };

            setCartItems(prevCart => {
                const existingItem = prevCart.find(item => item.id === product.id);
                if(existingItem) {
                    return prevCart.map(item => 
                        item.id === product.id
                        ? {...item, quantity: item.quantity + quantity}
                        : item
                    )
                };
                return [...prevCart, product];
            });

            setQuantity(0);
    }

        return (
            <div className="font-kumbh flex flex-col lg:flex-row gap-6 pt-6 md:gap-12 lg:gap-32 md:py-12 md:px-20 lg:p-41  justify-center items-center">
                <Gallery />

                <div className="font-kumb flex flex-col gap-8 p-6 lg:p-0 md:gap-6 lg:gap-8 md:w-[608px] lg:w-[445px]">
                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                        <div className="flex flex-col gap-4 sm:gap-6">
                            <p className="uppercase text-grey-500 font4">Sneaker Company</p>
                            <h1 className="font1 text-grey-950">Fall Limited Edition Sneakers</h1>
                        </div>
                        <p className="text-grey-500 font3">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    </div>
                    <div className="flex justify-between md:flex-col md:gap-2">
                        <div className="flex gap-4 items-center sm:gap-6">
                            <p className="font2 text-grey-950">$125.00</p>
                            <p className="bg-grey-950 text-white w-13 text-center font5 rounded-md">50%</p>
                        </div>
                        <p className="text-grey-500"><strike>$250.00</strike></p>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row w-full sm:gap-2 lg:gap-4">
                        <div className="bg-grey-50 flex justify-between p-4 rounded-[10px] sm:w-1/2 lg:w-1/3 backdrop-blur-lg shadow-xl border border-white/30">
                            <button disabled={quantity == 0} onClick={() => handleQuantityChanger(-1)}
                                className="cursor-pointer">
                                <img src={minus} alt="minus icon" />
                            </button>
                            <p className="text-grey-950 font5">{quantity}</p>
                            <button onClick={() => handleQuantityChanger(1)}
                                className="cursor-pointer">
                                <img src={plus} alt="plus icon" />
                            </button>
                        </div>
                        <button className="flex bg-orange-500 hover:bg-orange-300 p-4 rounded-[10px] gap-4 justify-center items-center cursor-pointer md:w-1/2 lg:w-2/3 backdrop-blur-lg shadow-xl border border-white/30"
                        onClick={handleAddToCart}>
                            <img src={cart} alt="cart icon" className="h-4 text-grey-950" />
                            <span className="font5 text-grey-950">Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }