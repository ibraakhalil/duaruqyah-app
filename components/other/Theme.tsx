'use client'

import { useEffect } from "react"

const Theme = () => {
    useEffect(() => {
        const html = document.documentElement
        const systemTheme = window?.matchMedia?.('(prefers-color-scheme:dark)').matches
        if (systemTheme) {
            html.classList.add('dark')
        }
    }, [])
    return (<></>)
}
export default Theme;