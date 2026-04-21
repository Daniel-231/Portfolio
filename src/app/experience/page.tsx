import React from "react";
import ReactOriginalIcon from "react-devicons/react/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import PythonOriginalIcon from "react-devicons/python/original";
import MongodbOriginalIcon from "react-devicons/mongodb/original";

const experiences = [
    {
        title: "Software Development Intern",
        company: "Trust-IT Security Intelligence",
        location: "Athens, Greece",
        period: "Jul 2024 – Mar 2025",
        bullets: [
            "Built full-stack web applications using Python, JavaScript, React.js, MongoDB, and AWS EC2.",
            "Optimized code to improve load times and scalability.",
            "Built and maintained web scraping scripts, integrated into the main application.",
        ],
        tags: [
            { name: "React", icon: ReactOriginalIcon },
            { name: "Python", icon: PythonOriginalIcon },
            { name: "MongoDB", icon: MongodbOriginalIcon },
            { name: "NodeJS", icon: NodejsOriginalIcon },
        ],
    },
    {
        title: "Freelance Software Engineer",
        company: "Cosman-IT",
        location: "Remote",
        period: "Jul 2025 – Dec 2025",
        bullets: [
            "Improved UI with HTML/CSS/Bootstrap and JavaScript for better responsiveness.",
            "Wrote RESTful APIs with Python Flask to handle data flow and backend logic.",
            "Added AI-driven chatbot features including user feedback and PDF reference handling.",
        ],
        tags: [
            { name: "React", icon: ReactOriginalIcon },
            { name: "Python", icon: PythonOriginalIcon },
        ],
    },
];

export default function Experience(): React.ReactNode {
    return (
        <section className="max-w-170 mx-auto py-8">
            <h2 className="text-3xl font-extrabold mb-5">
                Experience
            </h2>
            <div className="ml-3 space-y-8">
                {experiences.map((exp, i: number) => (
                    <div
                        className="relative" key={i}>
                        <div className="">
                            <p style={{fontSize: 24, fontWeight: 500, margin: 0}}>{exp.title}</p>
                            <span className="text-xl">{exp.period}</span>
                        </div>
                        <p className="text-2xl">
                            {exp.company}{exp.location ? ` · ${exp.location}` : ""}
                        </p>
                        <ul style={{fontSize: 16}}>
                            {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                        <div className="flex">
                            {exp.tags.map(({ name, icon: Icon }) => (
                                <Icon key={name} size="22px" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}