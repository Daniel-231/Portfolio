import React from "react";
import ReactOriginalIcon from "react-devicons/react/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import PythonOriginalIcon from "react-devicons/python/original";
import MongodbOriginalIcon from "react-devicons/mongodb/original";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";

const projects = [
    {
        title: "SecureWatch Dashboard",
        description: "A real-time threat intelligence dashboard built during my internship. Aggregates scraped data from multiple sources, visualises anomalies, and sends alerts via webhook integrations.",
        period: "2024",
        tags: [
            { name: "React", icon: ReactOriginalIcon },
            { name: "Python", icon: PythonOriginalIcon },
            { name: "MongoDB", icon: MongodbOriginalIcon },
            { name: "Node.js", icon: NodejsOriginalIcon },
        ],
    },
    {
        title: "Portfolio",
        description: "This site. Minimal, dark-first personal portfolio built with Next.js and Tailwind. Fully responsive with a clean layout focused on readability.",
        period: "2025",
        tags: [
            { name: "Next.js", icon: NextjsOriginalIcon },
            { name: "TypeScript", icon: TypescriptOriginalIcon },
            { name: "React", icon: ReactOriginalIcon },
        ],
    },
    {
        title: "AI Support Chatbot",
        description: "Freelance project for Cosman-IT. Chatbot backed by a Flask API with PDF reference parsing and user feedback loop. Integrated into an existing React frontend.",
        period: "2025",
        tags: [
            { name: "Python", icon: PythonOriginalIcon },
            { name: "React", icon: ReactOriginalIcon },
        ],
    },
];

export default function Projects(): React.ReactNode {
    return (
        <main className="flex-1 relative z-10 flex flex-col gap-12 py-6 lg:py-12 animate-fade-in">
            <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-6">
                Projects
            </p>

            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group p-6 rounded-xl transition-all duration-300 
                                   hover:scale-[1.02] active:scale-[0.98]
                                   bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)]
                                   border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]
                                   hover:border-[color-mix(in_srgb,var(--foreground)_20%,transparent)]"
                    >
                        <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-3">
                            {project.period}
                        </p>
                        <p className="font-medium text-lg mb-3 group-hover:text-[color-mix(in_srgb,var(--foreground)_80%,transparent)] transition-colors">
                            {project.title}
                        </p>
                        <p className="text-sm opacity-60 leading-relaxed mb-5">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(({ name, icon: Icon }) => (
                                <span
                                    key={name}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium
                                               bg-[color-mix(in_srgb,var(--foreground)_7%,transparent)]
                                               border border-[color-mix(in_srgb,var(--foreground)_12%,transparent)]
                                               hover:bg-[color-mix(in_srgb,var(--foreground)_12%,transparent)] transition-all"
                                >
                                    {Icon && <Icon size="14px" />}
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}