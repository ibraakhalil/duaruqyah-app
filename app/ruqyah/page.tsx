import HomeCard from "@/components/home/HomeCard";
import AudioPlayer from "@/components/ruqyah/AudioPlayer";
import Image from "next/image";
import Link from "next/link";

const Ruqyah = () => {
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className="h-full ">
            <AudioPlayer />
            <div className="mt-6">
                <h3 className="text-lg font-medium">Categories of Ruqyah</h3>
                <div className="grid grid-cols-3 gap-4 py-6 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {array.map((item, i) => <Link key={i} href=''>
                        <div className=" w-full bg-white rounded-xl flex items-center gap-3 flex-grow p-2.5 px-3.5">
                            <div className=" w-16 h-16 flex justify-center items-center bg-icon-bg rounded-xl">
                                <Image src={`/icons/home/ruqyah.svg`} width='36' height='36' alt='Home Card' />
                            </div>
                            <p>Treatment for general problems</p>
                        </div>
                    </Link>)}
                </div>
            </div>

        </div>
    );
}

export default Ruqyah;