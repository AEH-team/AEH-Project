import React, { useState } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface CarouselProps {
    slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [current, setCurrent] = useState<number>(0);

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative rounded-lg">
            <div
                className={`flex transition ease-out duration-400 rounded-lg`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <img key={index} src={s} alt={`slide ${index}`} />
                ))}
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center px-5 md:px-10 text-white text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((_, i) => (
                    <div
                        onClick={() => {
                            setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-3 h-3 md:w-5 md:h-5 cursor-pointer  ${
                            i === current ? "bg-white" : "bg-gray-500"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
