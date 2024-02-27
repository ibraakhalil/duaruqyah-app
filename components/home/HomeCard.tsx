import Image from "next/image";
import Link from "next/link";

const HomeCard = ({ name, icon }: any) => {
    return (
        <div className=" w-full bg-white rounded-xl flex items-center gap-3 flex-grow p-2.5 px-3.5 max-md:flex-col max-md:gap-2 max-md:p-2">
            <div className=" w-16 h-16 flex justify-center items-center bg-icon-bg rounded-xl max-md:w-14 max-md:h-14">
                <Image className="max-md:w-7 max-md:h-7" src={`/icons/home/${icon}.svg`} width='36' height='36' alt='Home Card' />
            </div>
            <p>{name}</p>
        </div>

    );
}

export default HomeCard;