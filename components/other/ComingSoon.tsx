import Image from "next/image";
import comingsoon from '@/public/icons/others/comming.svg'
import Link from "next/link";
import Button from "./Button";

const ComingSoon = () => {
    return (
        <div className="bg-white h-full rounded-3xl flex justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-[50px] font-semibold">COMING <span className="text-primary">SOON</span></h1>
                <p className="text-gray-500 mt-2">InshaAllah this feature will be available very soon</p>
                <div className="bg-[#f1faf5] p-12 rounded-full my-8">
                    <Image src={comingsoon} alt='Coming Soon' />
                </div>
                <Link href='/' className="my-4 flex justify-center">
                    <Button text="← Back to Home" className="" />
                </Link>
            </div>

        </div>
    );
}

export default ComingSoon;