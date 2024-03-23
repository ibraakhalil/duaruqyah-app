import Action from '@/components/duas/Action'
import ShowBtn from '@/components/duas/ShowBtn'
import { getCategories, getDuas, getSubCategories } from '@/lib/getRequest'
import Image from 'next/image'

export async function generateStaticParams() {
    const categories = await getCategories()
    return categories.map((category: any) => ({
        id: category.cat_id.toString()
    }))
}

async function page({ params }: { params: any }) {
    const { id } = params
    const subCategories = await getSubCategories()
    const duas = await getDuas(id)

    return (
        <div className='sidebar-thin content-wrapper scroll-smooth  h-[calc(100vh-110px)] overflow-y-auto pr-2'>
            <ShowBtn />
            {subCategories?.filter((item: any) => item.cat_id == id)?.map((subCat: any, i: any) => <div key={i}>
                <div id={`sub_cat_${subCat.subcat_id}`} className="subcategory-name bg-white rounded-xl mb-4 p-4 font-medium">
                    <p><span className='text-primary'>Section:</span> {subCat.subcat_name_en}</p>
                </div>
                <div className="items">
                    {duas?.map((item: any, i: number) => <div id={`dua_${item.dua_id}`} key={i} className='item bg-bg2 mb-4 rounded-xl p-6'>
                        <div className="header flex items-center gap-4 text-primary font-medium">
                            <Image src={'/icons/duacard.svg'} width={40} height={40} alt='img' />
                            <p className='font-semibold'>{item.dua_id}. {item.dua_name_en}  </p>
                        </div>
                        <div className="body text-lg py-5 font-medium text-accent-1">
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
                        {item.refference_en && <div className="reference text-lg font-medium text-accent-1">
                            <p className='text-primary'>Reference:</p>
                            <p>{item.refference_en}</p>
                        </div>}
                        <Action src={item.audio} id={item.dua_id} />
                    </div>)}
                </div>
            </div>)}
        </div>
    )
}

export default page