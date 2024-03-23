import Action from "@/components/duas/Action";
import { getAllDuas, getDuas, getSingleDua } from "@/lib/getRequest";
import Image from "next/image";

export async function generateStaticParams() {
    const allDuas = await getAllDuas()
    return allDuas.map((dua: any) => ({
        id: dua.dua_id.toString()
    }))
}

const page = async ({ params }: { params: any }) => {
    const { id } = params
    const res = await getSingleDua(id)
    const dua = res[0]

    return (
        <div>
            <div id={dua.dua_id} className='dua bg-white mb-4 rounded-xl p-6 w-full'>
                <div className="header flex items-center gap-4 text-primary font-medium">
                    <Image src={'/icons/duacard.svg'} width={40} height={40} alt='img' />
                    <p className='font-semibold'>{dua.dua_id}. {dua.dua_name_en}  </p>
                </div>
                <div className="body text-lg py-5 font-medium">
                    {dua.top_en && <p>
                        {dua.top_en}
                    </p>}
                    {dua.dua_indopak && <p className='my-8 text-right text-3xl'>
                        {dua.dua_indopak}
                    </p>}
                    {dua.transliteration_en && <p className='my-4'><i className='font-semibold'>
                        Transliteration: </i>{dua.transliteration_en}
                    </p>}
                    {dua.translation_en && <p className='my-4'>
                        <b>Translation: </b>{dua.translation_en}
                    </p>}
                    {dua.bottom_en && <p>
                        {dua.bottom_en}
                    </p>}
                </div>
                {dua.refference_en && <div className="reference text-lg font-medium">
                    <p className='text-primary'>Reference:</p>
                    <p>{dua.refference_en}</p>
                </div>}
                <Action src={dua.audio} id={id} />
            </div>
        </div>
    );
}

export default page;