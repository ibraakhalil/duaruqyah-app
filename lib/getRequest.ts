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
    const duaNames = await fetch(`${API_URL}/dua-names`)
    return duaNames.json()
}

export const getAllDuas = async () => {
    const allDuas = await fetch(`${API_URL}/all-duas`)
    return allDuas.json()
}

export const getDuas = async (cat_id: any) => {
    const duaByCategories = await fetch(`${API_URL}/duas?cat_id=${cat_id}`)
    return duaByCategories.json()
}


export const getSingleDua = async (dua_id: any) => {
    const res = await fetch(`${API_URL}/dua/${dua_id}`)
    return res.json()
}