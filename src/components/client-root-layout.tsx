"use client"

import { useEffect } from "react"
import Router from "next/router"
import NProgress from "nprogress"
import "@/styles/nprogress.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      easing: "ease",
      speed: 300,
      minimum: 0.1,
    })

    const handleStart = () => {
      console.log("Navigation started")
      NProgress.start()
    }
    const handleStop = () => {
      console.log("Navigation ended")
      NProgress.done()
    }

    Router.events.on("routeChangeStart", handleStart)
    Router.events.on("routeChangeComplete", handleStop)
    Router.events.on("routeChangeError", handleStop)

    return () => {
      Router.events.off("routeChangeStart", handleStart)
      Router.events.off("routeChangeComplete", handleStop)
      Router.events.off("routeChangeError", handleStop)
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
