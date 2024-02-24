import Image from "next/image";
import Link from "next/link";

const Books = () => {
    const array = [1, 2]
    return (
        <div className="h-full grid grid-cols-5 gap-4 py-6">
            {array.map((book, i) => <Link key={i} href={''}>
                <div className="bg-white rounded-xl p-4">
                    <div className=" flex items-center justify-center rounded-xl py-9 bg-[#E3F8FF] w-full h-auto dark:bg-dark-bg-dark">
                        <Image src='/icons/home/book.svg' width='120' height='90' alt='' />
                    </div>
                    <div className="pt-4">
                        <h3 className="mb-2 font-medium">Dua Book</h3>
                        <p className="text-gray-500 text-[14px]">Collected From Internet</p>
                    </div>
                </div>
            </Link>)}
        </div>
    );
}

export default Books;