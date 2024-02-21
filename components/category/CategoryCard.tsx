import Image from "next/image";

const CategoryCard = () => {
    return (
        <div className=" w-full bg-white rounded-xl flex  justify-between items-center p-3 px-3.5">
            <div className="flex gap-4 items-center">
                <div className=" w-[60px] h-[60px] flex justify-center items-center bg-icon-bg rounded-xl">
                    <Image src={`/icons/home/book.svg`} width='36' height='36' alt='Home Card' />
                </div>
                <div>
                    <p className="font-medium">Dua's Importance</p>
                    <small className="text-gray-500">Subcategory: <span>7</span></small>
                </div>
            </div>
            <div className="text-center mr-5 border-l-[1px] pl-3 font-medium">
                <p>21</p>
                <p className="text-gray-500 text-xs">Duas</p>
            </div>
        </div>
    );
}

export default CategoryCard;