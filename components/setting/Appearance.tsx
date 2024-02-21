import Image from "next/image";

const Appearance = () => {
    return (
        <div className="rounded-lg overflow-hidden cursor-pointer">
            <div className="flex items-center gap-4 p-2 border-l-[4px] border-secondary bg-secondary hover:border-l-[4px] hover:border-primary transition-all">
                <div className="bg-icon-bg flex p-3 rounded-full items-center justify-center">
                    <Image id="cat-img" className="" src='/icons/setting/font.svg' width={20} height={20} alt='Home' />
                </div>
                <h2 className="text-primary text-sm">Appearance Settings</h2>
            </div>
        </div>
    );
}

export default Appearance;