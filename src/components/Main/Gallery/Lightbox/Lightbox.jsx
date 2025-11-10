import next from "../../../../assets/images/icon-next.svg";
import prev from "../../../../assets/images/icon-previous.svg";
import close from "../../../../assets/images/icon-close.svg"
import { useState } from "react";



export default function Lightbox({ images, onClose }) {

    const [activeImage, setActiveImage] = useState(0);

    const handleNext = () => {
        setActiveImage((prevIndex) => prevIndex + 1);
    }
    const handlePrev = () => {
        setActiveImage((prevIndex) => prevIndex - 1);
    }


    return (
        <div className="hidden lg:flex fixed inset-0 bg-black/75 z-50 items-center justify-center">
            <div className="relative flex flex-col gap-6">
                <button className="absolute -top-8 right-0 cursor-pointer"
                onClick={onClose}>
                    <img src={close} alt="close Bouton" className="w-5 h-5" />
                </button>
                <button className="absolute z-40 top-[237px] -left-7 rounded-full bg-white h-14 w-14 flex items-center justify-center cursor-pointer"
                    onClick={handlePrev} disabled={activeImage == 0}>
                    <img src={prev} alt="previous button" />
                </button>
                <div className="flex flex-col gap-8">
                    <div className="flex">
                        {images.map((image, index) => (
                            <img
                                key={image.id}
                                src={image.full}
                                alt={`Product image ${index + 1}`}
                                className={`${index == activeImage ? "block" : "hidden"} w-[550px] h-[550px]  object-cover object-center md:rounded-[15px]`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex gap-8 justify-center">
                    {images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.thumbnail}
                            alt={`Product thumbnail ${index + 1}`}
                            className={`${index == activeImage ? "w-22 h-22 border-2 border-solid border-orange-500 opacity-75" : "opacity-100 border-none"} w-22 rounded-[10px] cursor-pointer hover:bg-gray-50`}
                            onClick={(() => setActiveImage(index))}
                        />
                    ))}
                </div>


                <button className="absolute z-40 top-[237px] -right-7 rounded-full bg-white h-14 w-14 flex items-center justify-center cursor-pointer"
                    onClick={handleNext} disabled={activeImage + 1 == images.length}>
                    <img src={next} alt="next button" />
                </button>
            </div>
        </div>
    )
}