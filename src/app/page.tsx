import React from "react";
import Link from "next/link";

// Icons
import ReactOriginalIcon from "react-devicons/react/original";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import PythonOriginalIcon from "react-devicons/python/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import MongodbOriginalIcon from "react-devicons/mongodb/original";
import DatabaseOriginalIcon from "react-devicons/sqldeveloper/original";
import AWSOriginalIcon from "react-devicons/amazonwebservices/original-wordmark";
import FlaskOriginalIcon from "react-devicons/flask/original";
import GitOriginalIcon from "react-devicons/git/original";
import TailwindOriginalIcon from "react-devicons/tailwindcss/original";
import BootstrapOriginalIcon from "react-devicons/bootstrap/plain";
import SQLAlchemyOriginalIcon from "react-devicons/sqlalchemy/original";

const skills = {
  frontend: [
    { name: "React.js", icon: ReactOriginalIcon },
    { name: "Next.js", icon: NextjsOriginalIcon },
    {name: "React Native", icon: ReactOriginalIcon},
    { name: "TypeScript", icon: TypescriptOriginalIcon },
    { name: "Tailwind", icon: TailwindOriginalIcon },
    { name: "Bootstrap", icon: BootstrapOriginalIcon },
  ],
  data: [
    { name: "MongoDB", icon: MongodbOriginalIcon },
    { name: "SQL", icon: DatabaseOriginalIcon },
    { name: "SQL-Alchemy", icon: SQLAlchemyOriginalIcon },
  ],
  tools: [
    { name: "AWS EC2", icon: AWSOriginalIcon },
    { name: "Git", icon: GitOriginalIcon },
  ],
  backend: [
    { name: "Node.js", icon: NodejsOriginalIcon },
    { name: "ExpressJS", icon: NodejsOriginalIcon },
    { name: "Python", icon: PythonOriginalIcon },
    { name: "Flask", icon: FlaskOriginalIcon },
  ],
};

export default function Home(): React.ReactNode {
  return (
    <main className="flex-1 relative z-10 flex flex-col gap-20 lg:gap-24 py-6 lg:py-12 animate-fade-in">

      {/* STACK SECTION */}
      <section>
        <p className="text-xs font-medium tracking-[2px] uppercase opacity-60 mb-8">
          STACK
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 lg:gap-x-16 gap-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-widest opacity-50">
                {category}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-3xl text-sm font-medium 
                                 bg-white/5 hover:bg-white/10 border border-white/10 
                                 hover:border-white/30 hover:scale-105 active:scale-95 transition-all"
                    >
                      {Icon && <Icon size="18px" />}
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "INTERNSHIP",
            title: "Trust-IT Security Intelligence",
            period: "Jul 2024 – Mar 2025",
            desc: "Full-stack apps, web scraping pipelines, and AWS EC2 deployments.",
            href: "/experience",
          },
          {
            label: "FREELANCE",
            title: "Cosman-IT",
            period: "Jul - Dec 2025",
            desc: "AI chatbot with PDF reference handling, Flask APIs, and responsive UI improvements with HTML/Javascript/CSS/Bootstrap.",
            href: "/experience",
          },
          {
            label: "CONTACT",
            title: "Open to opportunities",
            period: "Athens, Greece • Remote",
            desc: "danielklimenko20040426@gmail.com",
            href: "mailto:danielklimenko20040426@gmail.com",
          },
        ].map((card, index) => (
          <Link
            key={card.title}
            href={card.href}
            className="group p-8 rounded-3xl border border-white/10 hover:border-white/30 
                       bg-white/5 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <p className="text-xs tracking-[1px] uppercase opacity-50 mb-3">
              {card.label}
            </p>
            <p className="font-medium text-xl mb-1">{card.title}</p>
            <p className="text-sm opacity-60 mb-5">{card.period}</p>
            <p className="text-sm opacity-75 leading-relaxed">
              {card.desc}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}