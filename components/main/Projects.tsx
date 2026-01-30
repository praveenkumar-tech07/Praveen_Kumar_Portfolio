import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 relative"
            id="projects"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>
            
            <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 py-20 animate-gradient">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 relative z-10">
                <ProjectCard
                    src="/resume-screening.svg"
                    title="Smart Resume Screening System"
                    description="Automated resume screening using Python, OCR, and NLP. Extracted candidate information and matched profiles against job descriptions with similarity scoring to rank resumes by skill relevance."
                />
                <ProjectCard
                    src="/eva-assistant.svg"
                    title="Eva - Personal AI Assistant"
                    description="Generative AI-based desktop assistant with voice commands. Designed modular architecture for Speech-to-Text, Text-to-Speech, and NLP components. Integrated APIs for task automation and intelligent responses."
                />
                <ProjectCard
                    src="/brain-tumor.svg"
                    title="Brain Tumor Detection using YOLOv8"
                    description="Trained YOLOv8 and YOLOv9 deep learning models for brain tumor detection using medical imaging datasets. Achieved mAP@0.5 above 0.90 with strong precision and recall performance."
                />
            </div>
        </div>
    );
};

export default Projects;