"use client"

import { usePathname } from "next/navigation";

import chez from "@/public/images/chez-logo.jpg"

import { FloatingWhatsApp } from "react-floating-whatsapp"

export default function Whatsapp() {
    const path = usePathname()

    const isDashboard = path.startsWith('/dashboard');
    const isSignIn = path.startsWith('/sign-in');

    return (
        <>
            <FloatingWhatsApp
                phoneNumber="123456789"
                accountName="Chez Bakery & Cafe"
                allowEsc
                notification
                notificationSound
                chatMessage="Hi there! 👋 Welcome to Chez Bakery & Cafe — where everything is freshly baked with love! 🧁🍞🥐
                Is there anything I can help you with today? 😊\nFeel free to ask about our menu, custom orders, delivery, or anything else!"
                chatboxHeight={450}
                avatar="/images/chez-logo.jpg"
            />
        </>
    )
}