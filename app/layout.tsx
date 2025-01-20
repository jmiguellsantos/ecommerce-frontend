import '../src/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from "@/src/components/Layout";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'Ecommerce',
description: 'Ecommerce com nextjs',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
        <body className={inter.className}>
        <Layout>{children}</Layout>
        </body>
        </html>
    )
}