import Image from "next/image";
import nodata from "@/public/icons/others/nodata.svg"

const NoData = ({ text }: any) => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="p-16 rounded-full bg-[#deeae9]">
                <Image className="w-[120px] h-[120px]" src={nodata} alt='No Data' />
            </div>
            <h3 className="text-[30px] mt-8">{text}</h3>
        </div>
    );
}

export default NoData;