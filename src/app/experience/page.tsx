import React from "react";
import ReactOriginalIcon from "react-devicons/react/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import PythonOriginalIcon from "react-devicons/python/original";
import MongodbOriginalIcon from "react-devicons/mongodb/original";
import AWSOriginalIcon from "react-devicons/amazonwebservices/original-wordmark";
import HtmlOriginalIcon from "react-devicons/html5/original";
import CssOriginalIcon from "react-devicons/css3/original";
import BootstrapOriginalIcon from "react-devicons/bootstrap/plain";
import FlaskOriginalIcon from "react-devicons/flask/original";
import AzureOriginalIcon from "react-devicons/azure/original-wordmark";

const experiences = [
    {
        title: "Software Development Intern",
        company: "Trust-IT Security Intelligence",
        location: "Athens, Greece",
        period: "Jul 2024 - Mar 2025",
        bullets: [
            "Built full-stack web applications using Python, JavaScript, React.js, MongoDB, and AWS EC2.",
            "Optimized code to improve load times and scalability.",
            "Built and maintained web scraping scripts, integrated into the main application.",
        ],
        tags: [
            { name: "React", icon: ReactOriginalIcon },
            { name: "Python", icon: PythonOriginalIcon },
            { name: "MongoDB", icon: MongodbOriginalIcon },
            { name: "Node.js", icon: NodejsOriginalIcon },
            { name: "AWS EC2", icon: AWSOriginalIcon },
        ],
    },
    {
        title: "Freelance Software Engineer",
        company: "Cosman-IT",
        location: "Remote",
        period: "Jul - Dec 2025",
        bullets: [
            "Improved UI with HTML/CSS/Bootstrap and JavaScript for better responsiveness.",
            "Wrote RESTful APIs with Python Flask to handle data flow and backend logic.",
            "Added AI-driven chatbot features including user feedback and PDF reference handling.",
        ],
        tags: [
            { name: "HTML", icon: HtmlOriginalIcon },
            { name: "CSS", icon: CssOriginalIcon },
            { name: "JavaScript", icon: NodejsOriginalIcon },
            { name: "Bootstrap", icon: BootstrapOriginalIcon },
            { name: "Flask", icon: FlaskOriginalIcon },
            { name: "Python", icon: PythonOriginalIcon },
            { name: "Azure", icon: AzureOriginalIcon },
        ],
    },
];

export default function Experience(): React.ReactNode {
    return (
        <main className="flex-1 relative z-10 flex flex-col gap-12 py-6 lg:py-12 animate-fade-in">
            <p className="text-xs font-medium tracking-[2px] uppercase opacity-60">
                Experience
            </p>

            <div className="grid grid-cols-1 gap-6">
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="group p-8 rounded-3xl border border-white/10 hover:border-white/30 
                                   bg-white/5 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300"
                    >
                        <p className="text-xs tracking-[1px] uppercase opacity-50 mb-3">
                            {exp.period}
                        </p>
                        <p className="font-medium text-2xl mb-1">{exp.title}</p>
                        <p className="text-sm opacity-60 mb-6">
                            {exp.company} • {exp.location}
                        </p>

                        <ul className="space-y-3 mb-8">
                            {exp.bullets.map((bullet, j) => (
                                <li key={j} className="text-sm opacity-75 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-white/30">
                                    {bullet}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-3">
                            {exp.tags.map(({ name, icon: Icon }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-3xl text-sm font-medium 
                                               bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    {Icon && <Icon size="18px" />}
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}