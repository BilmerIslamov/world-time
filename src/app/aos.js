"use client"
import React, { useEffect } from 'react'
import Script from "next/script"
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import ico from './favicon.ico'

export default function Aos() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Head>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="../../public/favicon.ico" />
                {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" /> */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-CBD7KWSDWW" strategy="afterInteractive" />
        </div>
    )
}
