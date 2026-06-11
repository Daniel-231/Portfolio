import React from "react";
import ReactOriginalIcon from "react-devicons/react/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import TailwindOriginalIcon from "react-devicons/tailwindcss/original";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import FlaskOriginalIcon from "react-devicons/flask/original";
import DatabaseOriginalIcon from "react-devicons/sqldeveloper/original";
import SqliteOriginalIcon from "react-devicons/sqlite/original";

const projects = [
    {
        title: "Portfolio",
        description: "This site. Minimal, dark-first personal portfolio built with Next.js and Tailwind. Fully responsive with a clean layout focused on readability.",
        link: "https://github.com/Daniel-231/Portfolio",
        period: "2026",
        tags: [
            { name: "Next.js", icon: NextjsOriginalIcon },
            { name: "TypeScript", icon: TypescriptOriginalIcon },
            { name: "Tailwind", icon: TailwindOriginalIcon },

        ],
    },
    {
        title: "AI-Journal",
        description: "AI-powered journaling app that generates daily prompts, analyzes entries for mood and themes, and provides insights. Built with a React frontend and NodeJS backend, leveraging SQLite for storage.",
        link: "https://github.com/Daniel-231/AI-Journal",
        period: "2025",
        tags: [
            { name: "React", icon: ReactOriginalIcon },
            { name: "SQLlite", icon: SqliteOriginalIcon },
            { name: "Node.js", icon: NodejsOriginalIcon },
            { name: "Tailwind", icon: TailwindOriginalIcon },
        ],
    },
    {
        title: "Personal Reviewer",
        description: "Fullstack web app that allows users to create and manage reviews for products, movies, etc. Features include user authentication, CRUD operations for reviews, and a responsive design. Built with React, Flask, and PostgreSQL.",
        link: "https://github.com/Daniel-231/Personal-Reviewer",
        period: "2025",
        tags: [
            { name: "React", icon: ReactOriginalIcon },
            { name: "Typescript", icon: TypescriptOriginalIcon },
            { name: "Postgres", icon: DatabaseOriginalIcon },
            { name: "Flask", icon: FlaskOriginalIcon },
        ],
    },
];

export default function Projects(): React.ReactNode {
    return (
        <main className="flex-1 relative z-10 flex flex-col gap-12 py-6 lg:py-12 animate-fade-in">
            <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-6">
                Personal Projects
            </p>

            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, i) => (
                    <a
                        key={i}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 rounded-xl transition-all duration-300 
                                   hover:scale-[1.02] active:scale-[0.98]
                                   bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)]
                                   border border-[color-mix(in_srgb,var(--foreground)_10%,transparent)]
                                   hover:border-[color-mix(in_srgb,var(--foreground)_20%,transparent)]
                                   cursor-pointer block"
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
                    </a>
                ))}
            </div>
        </main>
    );
}