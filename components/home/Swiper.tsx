import cn from "@/utils/cn";
import TextSlider from "../other/TextSlider";


type ButtonProps = {
    className: string
}

const Swiper = ({ className }: ButtonProps) => {
    return (
        <div className={cn("h-[190px] rounded-[30px] bg-no-repeat bg-bottom bg-cover bg-[url('/images/slider.png')] flex items-center", className)}>
            <TextSlider />
        </div>
    );

}

export default Swiper;