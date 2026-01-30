import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-[#2A0E61] bg-[#03001417] backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-purple-500 hover:shadow-purple-500/50 group">
            <div className="relative overflow-hidden">
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="relative p-6 bg-gradient-to-b from-transparent to-[#03001417]">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 group-hover:scale-105 transition-transform duration-300">{title}</h1>
                <p className="text-gray-300 leading-relaxed">{description}</p>
                
                <div className="mt-4 flex items-center gap-2 text-cyan-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
        </div>
    );
};

export default ProjectCard;