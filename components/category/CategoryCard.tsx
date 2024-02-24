import cn from "@/utils/cn";
import Image from "next/image";


const CategoryCard = ({ category, className }: any) => {
    return (
        <div id={`${category.cat_id}`} className={cn("w-full rounded-xl flex  justify-between items-center p-3 pr-1", className)}>
            <div className="flex gap-4 items-center">
                <div className=" w-[60px] h-[60px] flex justify-center items-center bg-secondary rounded-xl">
                    <Image src={`/icons/category/${category.cat_icon}.svg`} width='36' height='36' alt='Home Card' />
                </div>
                <div>
                    <p className="font-medium text-[15px]">{category.cat_name_en}</p>
                    <small className="text-gray-500">Subcategory: <span>{category.no_of_subcat}</span></small>
                </div>
            </div>
            <div className="text-center mr-5 border-l-[1px] pl-2 font-medium">
                <p>{category.no_of_dua}</p>
                <p className="text-gray-400 text-xs">Duas</p>
            </div>
        </div>
    );
}

export default CategoryCard;