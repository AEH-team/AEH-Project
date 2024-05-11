import { useState } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface CarouselProps {
    slides: string[];
}

const Carousel = ({ slides }:CarouselProps) => {
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
        <div className="overflow-hidden relative">
            <div
                className={`flex transition ease-out duration-400`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <img src={s} key={index} alt={`Slide ${index}`} />
                ))}
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((_, index) => (
                    <div
                        onClick={() => setCurrent(index)}
                        key={"circle" + index}
                        className={`rounded-full w-5 h-5 cursor-pointer ${
                            index === current ? "bg-white" : "bg-gray-500"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
