import image1 from "../../../assets/images/image-product-1.jpg";
import image2 from "../../../assets/images/image-product-2.jpg";
import image3 from "../../../assets/images/image-product-3.jpg";
import image4 from "../../../assets/images/image-product-4.jpg";
import thumbnail1 from "../../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../../assets/images/image-product-4-thumbnail.jpg";
import next from "../../../assets/images/icon-next.svg";
import prev from "../../../assets/images/icon-previous.svg";

import Lightbox from "./Lightbox/Lightbox";

import { useState } from "react";

export default function Gallery() {

    const images = [
        {
            id: 1,
            full: image1,
            thumbnail: thumbnail1
        },
        {
            id: 2,
            full: image2,
            thumbnail: thumbnail2
        },
        {
            id: 3,
            full: image3,
            thumbnail: thumbnail3
        },
        {
            id: 4,
            full: image4,
            thumbnail: thumbnail4
        }
    ]

    const [activeImage, setActiveImage] = useState(0);
    const [lightBoxOpen, setLightBoxOpen] = useState(false);



    const handleNext = () => {
        setActiveImage((prevIndex) => prevIndex + 1);
    }
    const handlePrev = () => {
        setActiveImage((prevIndex) => prevIndex - 1);
    }

    return (
        <div className="relative flex justify-center items-center">
            <button className="absolute z-40 top-[197px] md:top-[125px] left-4 md:left-[12.5px] rounded-full bg-white h-10 w-10 flex items-center justify-center lg:hidden"
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
                            className={`${index == activeImage ? "block" : "hidden"} w-[375px] md:w-[608px] lg:w-[448px] h-[300px] md:h-[290px] lg:h-[445px] object-cover object-center md:rounded-[15px] cursor-pointer`}
                            onClick={() => setLightBoxOpen(true)}
                        />
                    ))}
                </div>
                <div className="hidden lg:flex gap-8">
                    {images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.thumbnail}
                            alt={`Product thumbnail ${index + 1}`}
                            className={`${index == activeImage ? "border-2 border-solid border-orange-500 opacity-75" : "opacity-100 border-none"} w-22 rounded-[10px] cursor-pointer`}
                            onClick={(() => setActiveImage(index))}
                        />
                    ))}
                </div>
            </div>

            <button className="absolute z-40 top-[197px] md:top-[125px] right-4 md:right-[12.5px] rounded-full bg-white h-10 w-10 flex items-center justify-center lg:hidden"
                onClick={handleNext} disabled={activeImage + 1 == images.length}>
                <img src={next} alt="next button" />
            </button>

            {lightBoxOpen && (
                <Lightbox 
                    images={images}
                    onClose={() => setLightBoxOpen(false)}
                />
            )}

        </div>
    )
}