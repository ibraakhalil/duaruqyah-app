import cn from "@/utils/cn";
import Button from "../other/Button";

const BookmarkModal = ({ modal, showModal }: { modal: boolean, showModal: any }) => {
    const themeStyle = 'w-9 h-9 rounded-md'
    return (
        <div className={cn("scale-0 w-[480px] bg-white p-8 rounded-2xl transition ease-in duration-300 max-sm:w-[90vw]", { "scale-100": modal })}>
            <h2 className="text-xl font-semibold mb-4">Favorite</h2>
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="font-medium">Folder Name</h3>
                    <select name="folder-name" className="w-full p-4 rounded-lg mt-2 bg-white border">
                        <option value="favorite">Favorite</option>
                        <option value="ibrahim">Ibrahim</option>
                    </select>
                </div>
                <div>
                    <h3 className="mb-2 font-medium">Or</h3>
                    <div>
                        <input className="w-full border p-4 rounded-lg text-sm" type="text" placeholder="Create New Bookmark Folder" />
                    </div>
                </div>
                <div>
                    <h3 className="mb-2 text-[16px] font-medium">Change Folder Color</h3>
                    <div className="flex justify-between max-sm:flex-wrap max-sm:gap-2 max-sm:justify-start">
                        <div className={cn("bg-primary", themeStyle)}></div>
                        <div className={cn("bg-yellow-400", themeStyle)}></div>
                        <div className={cn("bg-green-500", themeStyle)}></div>
                        <div className={cn("bg-blue-600", themeStyle)}></div>
                        <div className={cn("bg-purple-800", themeStyle)}></div>
                        <div className={cn("bg-red-600", themeStyle)}></div>
                        <div className={cn("bg-lime-400", themeStyle)}></div>
                        <div className={cn("bg-primary", themeStyle)}></div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <div onClick={()=> showModal(false)}>
                        <Button text="Cancel" className="bg-white text-gray-700 border" />
                    </div>
                    <Button text="Save" className="ml-4" />
                </div>
            </div>
        </div>
    );
}

export default BookmarkModal;