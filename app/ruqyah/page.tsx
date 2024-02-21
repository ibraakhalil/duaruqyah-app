import HomeCard from "@/components/home/HomeCard";
import AudioPlayer from "@/components/ruqyah/AudioPlayer";
import Link from "next/link";

const Ruqyah = () => {
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className="h-full ">
            <AudioPlayer />
            <div className="mt-6">
                <h3 className="text-lg font-medium">Categories of Ruqyah</h3>
                <div className="grid grid-cols-3 gap-4 py-6">
                    {array.map((item, i) => <Link key={i} href=''>
                        <HomeCard name={"Introduction to Ruqyah"} icon={'ruqyah'} />
                    </Link>)}
                </div>
            </div>

        </div>
    );
}

export default Ruqyah;