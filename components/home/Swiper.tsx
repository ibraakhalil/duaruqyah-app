import cn from "@/utils/cn";

type ButtonProps = {
    className: string
}

const Swiper = ({ className }: ButtonProps) => {
    return (
        <div className={cn("h-[190px] rounded-[30px] bg-no-repeat bg-bottom bg-cover bg-[url('/images/slider.png')] flex items-center", className)}>
            <p className="w-[85%] mx-auto text-center text-white">None has the right to be worshipped except Allah, He is alone, without any partner, to Him belong all sovereignty and praise, and He is over all things omnipotent. <br /><br />

                [Bukhari: 3293]</p>
        </div>
    );
}

export default Swiper;