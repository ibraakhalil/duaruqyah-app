import Action from "@/components/duas/Action";
import { getDuas } from "@/lib/getRequest";
import Image from "next/image";

export async function generateStaticParams() {
    const allDuas = await getDuas()
    return allDuas.map((dua: any) => ({
        id: dua.dua_id.toString()
    }))
}

const page = async ({ params }: { params: any }) => {
    const allDuas = await getDuas()
    const { id } = params
    const item = allDuas.filter((dua: any) => dua.dua_id == id)[0]

    return (
        <div>
            <div id={item.dua_id} className='item bg-white mb-4 rounded-xl p-6'>
                <div className="header flex items-center gap-4 text-primary font-medium">
                    <Image src={'/icons/duacard.svg'} width={40} height={40} alt='img' />
                    <p className='font-semibold'>{item.dua_id}. {item.dua_name_en}  </p>
                </div>
                <div className="body text-lg py-5 font-medium">
                    {item.top_en && <p>
                        {item.top_en}
                    </p>}
                    {item.dua_indopak && <p className='my-8 text-right text-3xl'>
                        {item.dua_indopak}
                    </p>}
                    {item.transliteration_en && <p className='my-4'><i className='font-semibold'>
                        Transliteration: </i>{item.transliteration_en}
                    </p>}
                    {item.translation_en && <p className='my-4'>
                        <b>Translation: </b>{item.translation_en}
                    </p>}
                    {item.bottom_en && <p>
                        {item.bottom_en}
                    </p>}
                </div>
                {item.refference_en && <div className="reference text-lg font-medium">
                    <p className='text-primary'>Reference:</p>
                    <p>{item.refference_en}</p>
                </div>}
                <Action src={item.audio} />
            </div>
        </div>
    );
}

export default page;