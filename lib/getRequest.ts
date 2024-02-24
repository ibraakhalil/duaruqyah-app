import { API_URL } from "@/constants/constants"

export const getCategories = async () => {
    const categories = await fetch(`${API_URL}/categories`)
    return categories.json()
}

export const getSubCategories = async () => {
    const sub_categories = await fetch(`${API_URL}/sub_categories`)
    return sub_categories.json()
}

export const getDuas = async () => {
    const duas = await fetch(`${API_URL}/duas`)
    return duas.json()
}