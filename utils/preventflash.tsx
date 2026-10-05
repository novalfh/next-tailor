'use client'

import { ModeToggle } from "@/components/darkmode"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


export default function PreventFlash() {
    const {setTheme, theme} = useTheme()
    const [mounted, setMounted] = useState()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return null
    }
    return (
        <ModeToggle></ModeToggle>
    )
}