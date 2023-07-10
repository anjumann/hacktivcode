'use client'

import { ThemeProvider } from "next-themes"

const Providers = ({ children }) => {
    return <ThemeProvider attribute="class" forcedTheme="light" > {children} </ThemeProvider>
}

export default Providers