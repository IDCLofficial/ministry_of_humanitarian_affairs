"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const info = {
    logo: "/logo.png",
    ministry: "Humanitarian Affairs",
    description: "The Ministry of Humanitarian Affairs in Imo State was established to coordinate responses to emergencies, oversee social welfare programs, and champion the rights and dignity of all citizens. Since its inception, the ministry has evolved to address emerging humanitarian challenges, deliver targeted interventions, and implement people-centered policies that foster sustainable human development across the state.",
    quickLinks: [
        {
            label: "Projects",
            href: "/projects" 
        },
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Units",     
            href: "/units"
        },
        {
            label: "Events",
            href: "/events"
        },
        {
            label: "Media",
            href: "/media"
        },
        {
            label: "Contact Us",        
            href: "/contact-us"
        },
    ],
    newsletter: [
        {
            label: "Signup to Our Newsletter",          
            href: "/"
        },
        {
            label: "Subscribe",
            href: "/"
        },
    ],
    contact: [
        {
            label: "no informtion",
            href: "/"
        },
        {
            label: "humanitarian@imostate.gov.ng",
            href: "/"
        },  
        {
            label: "Ministry Address: Block 10, State Secretariat Complex, Owerri, Imo State",
            href: "/"
        },
    ]
}

export default function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    return (
        <footer className="w-full bg-white pt-10 px-4 lg:px-18">
            <div className="mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 pb-8">
                {/* Logo and Description */}
                <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2">
                        <Image src={info.logo} alt="Imo State Logo" width={40} height={40} />
                        <span className="font-semibold text-sm text-gray-900 leading-tight">
                        Imo State Ministry<br />
                        of {info.ministry}
                        </span>
                    </div>
                    <p className="text-xs text-gray-600 max-w-xs">
                        {info.description}
                    </p>
                </div>
                {/* Quick Links */}
                <div className="lg:flex-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
                    <div className="flex flex-col flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
                        {info.quickLinks.map((link) => (
                            <Link href={link.href} className="hover:underline" key={link.label}>{link.label}</Link>
                        ))}
                    </div>
                </div>
                {/* Newsletter and Contact */}
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-3">{info.newsletter[0].label}</h4>
                    <form
                        className="flex mb-3"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setError("");
                            setSuccess(false);
                            if (!email) {
                                setError("Please enter a valid email address.");
                                return;
                            }
                            setLoading(true);
                            try {
                                // Simulate API call
                                await new Promise((resolve) => setTimeout(resolve, 1500));
                                setSuccess(true);
                                setEmail("");
                            } catch (err) {
                                setError("Subscription failed. Please try again.");
                            } finally {
                                setLoading(false);
                            }
                        }}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Myemail@gmail.com"
                            className="border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r text-sm font-medium flex items-center justify-center min-w-[90px]"
                            disabled={loading}
                        >
                            {loading ? (
                                <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            ) : null}
                            {loading ? "Loading..." : info.newsletter[1].label}
                        </button>
                    </form>
                    {success && (
                        <div className="text-green-600 text-sm mb-2">Thank you for subscribing!</div>
                    )}
                    {error && (
                        <div className="text-red-600 text-sm mb-2">{error}</div>
                    )}
                    <div className="text-xs text-gray-700 space-y-1 flex flex-col">
                        {info.contact.map((item) => (
                            <Link href={item.href} key={item.label}>{item.label}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 text-center py-3 text-xs text-gray-500">Powered by IDCL.</div>
        </footer>
    );
} 