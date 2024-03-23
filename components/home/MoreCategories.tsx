import Image from "next/image";
import Link from "next/link";

const MoreCategories = () => {
    return (
        <Link href='/all-categories'>
            <div className=" w-full bg-bg2 rounded-xl flex  justify-between items-center p-3 px-3.5">
            <div className="flex gap-4 items-center">
              <div className=" w-[60px] h-[60px] flex justify-center items-center bg-icon-bg rounded-xl">
                <Image src={`/icons/home/more_cats.svg`} width='36' height='36' alt='Home Card' />
              </div>
              <p className="font-medium text-accent-1">See more categories</p>
            </div>
            <div className="text-center mr-5 pl-3 text-accent-1">
              →
            </div>
          </div>
        </Link>

    );
}

export default MoreCategories;