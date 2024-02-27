import Image from "next/image";
import nodata from "@/public/icons/others/nodata.svg"

const NoData = ({ text }: any) => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="p-16 rounded-full bg-[#deeae9] max-md:p-10">
                <Image className="w-[120px] h-[120px] max-md:w-[100px] max-md:h-[100px]" src={nodata} alt='No Data' />
            </div>
            <h3 className="text-[30px] mt-8 max-md:text-[20px]">{text}</h3>
        </div>
    );
}

export default NoData;