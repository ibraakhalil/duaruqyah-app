import { API_URL } from "@/constants/constants"

export const getCategories = async () => {
    const categories = await fetch(`${API_URL}/categories`)
    return categories.json()
}

export const getSubCategories = async () => {
    const sub_categories = await fetch(`${API_URL}/sub_categories`)
    return sub_categories.json()
}

export const getDuaNames = async () => {
    const duas = await fetch(`${API_URL}/duas`)
    const res = await duas.json()
    return res.map((item: any) => {
        return {
            dua_id: item.dua_id,
            dua_name_en: item.dua_name_en,
            subcat_id: item.subcat_id
        }
    })
}
export const getDuas = async () => {
    const duas = await fetch(`${API_URL}/duas`)
    return duas.json()
}