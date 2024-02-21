import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

type ModalTypes = {
    show: boolean,
    setShow: any
}

const HeaderModal = ({ show, setShow }: ModalTypes) => {
    const lists: any = [
        { name: "Support Us", icon: "support" },
        { name: "Download Dua App", icon: "download" },
        { name: "Privacy Policy", icon: "privacy" },
        { name: "Thanks & Credits", icon: "credit" },
        { name: "About Us", icon: "about" },
        { name: "About Us", icon: "about" },
        { name: "Copyright Warning", icon: "copyright" },
        { name: "Our Other Projects", icon: "projects" },
    ]
    return (
        <div>
            <div className={cn("hidden absolute mt-5 -right-8 w-80 max-w-sm transform px-4 opacity-100 translate-y-0 z-50", { "block": show })}>
                <div className="flex flex-row justify-end mr-14 -mb-1">
                    <Image src="/icons/header/polygon.svg" width={30} height={30} alt="profile" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 ">
                    <div className="relative gap-6 bg-white px-4 pt-6 pb-5">
                        {lists.map((list: any, i: number) => <Link key={i} href={`/${list.icon}`}>
                            <div className="flex items-center rounded-lg transition  hover:bg-gray-50 cursor-pointer">
                                <div className="flex h-10 w-10 items-center justify-center">
                                    <Image className="w-5" src={`/icons/header/${list.icon}.svg`} width={24} height={24} alt={`${list.icon}`} />
                                </div>
                                <div className="">
                                    <p className="text-m ml-1 text-gray-600">{list.name}</p>
                                </div>
                            </div>
                        </Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderModal;