"use client";

import React, { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formspreeId) {
            setStatus("error");
            setErrorMessage("Contact form is not configured. Please try again later.");
            return;
        }

        setStatus("sending");
        setErrorMessage("");

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeId}`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to send message.");
            }

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };
    return (
        <div
            className="flex flex-col items-center justify-center py-20 relative"
            id="contact"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"></div>
            
            <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-20 animate-gradient">
                Get In Touch
            </h1>
            
            <div className="w-full max-w-4xl px-10">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <div className="text-gray-300">
                            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Contact Information
                            </h2>
                            <p className="mb-6 text-gray-400">
                                Feel free to reach out to me for collaborations, opportunities, or just to say hello!
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-[#2A0E61] bg-[#03001417] backdrop-blur-md hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400">Email</h3>
                                <a
                                    href="mailto:praveenkumar07.tech@gmail.com"
                                    className="text-white hover:text-cyan-500 transition-colors"
                                >
                                    praveenkumar07.tech@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-[#2A0E61] bg-[#03001417] backdrop-blur-md hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400">Location</h3>
                                <p className="text-white">India</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-[#2A0E61] bg-[#03001417] backdrop-blur-md hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 mb-2">Connect with me</h3>
                                <div className="flex gap-3">
                                    {Socials.map((social) => (
                                        <a
                                            href={social.link}
                                            key={social.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:scale-110 transition-transform"
                                        >
                                            <Image
                                                src={social.src}
                                                alt={social.name}
                                                width={28}
                                                height={28}
                                                className="cursor-pointer"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex flex-col gap-4">
                        <div className="p-6 rounded-xl border border-[#2A0E61] bg-[#03001417] backdrop-blur-md hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 relative z-10">
                                Send a Message
                            </h2>
                            <form className="flex flex-col gap-4 relative z-10" onSubmit={handleSubmit}>
                                <div>
                                    <label className="text-gray-400 text-sm mb-2 block">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-[#0300145e] border border-[#2A0E61] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-400 text-sm mb-2 block">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-[#0300145e] border border-[#2A0E61] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-400 text-sm mb-2 block">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Your message..."
                                        rows={5}
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-[#0300145e] border border-[#2A0E61] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                                    ></textarea>
                                </div>
                                {status === "success" && (
                                    <p className="text-sm text-emerald-400">
                                        Your message has been sent successfully.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-sm text-rose-400">
                                        {errorMessage}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10">
                                        {status === "sending" ? "Sending..." : "Send Message"}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
