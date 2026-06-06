"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "@/app/components/ThemeSwitcher";
import { LightbulbOff, LightbulbIcon } from "lucide-react";

export default function Sidebar(): React.ReactNode {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="flex-1 relative z-10">
      <section className="min-h-[40vh] flex flex-col justify-center py-16">
        {/* Top row: location left, theme button right */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium tracking-widest uppercase opacity-60">
            Full-Stack Developer · Athens, Greece
          </p>

          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-xl border border-current"
          >
            {theme === "light" ? (
              <LightbulbOff size={16} />
            ) : (
              <LightbulbIcon size={16} />
            )}
          </button>
        </div>

        <h1
          className="font-bold leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          <a href="/">
            Daniil
            <br />
            Klimenko
          </a>
        </h1>

        <p
          className="max-w-xl opacity-70 leading-relaxed mb-10"
          style={{ fontSize: "1.1rem" }}
        >
          I build and ship full-stack web applications end-to-end -
          from web scraping pipelines deployed on AWS EC2 to AI chatbots
          with PDF reference handling. Two roles, real production code.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-md font-medium text-sm tracking-wide transition-opacity hover:opacity-80"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            View Projects
          </Link>
          <Link
            href="/experience"
            className="px-6 py-3 rounded-md font-medium text-sm tracking-wide border opacity-60 hover:opacity-100 transition-opacity"
            style={{ borderColor: "var(--foreground)" }}
          >
            Experience
          </Link>
          <a
            href="https://linkedin.com/in/daniel-klimenko"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md font-medium text-sm tracking-wide border opacity-60 hover:opacity-100 transition-opacity"
            style={{ borderColor: "var(--foreground)" }}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Daniel-231"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md font-medium text-sm tracking-wide border opacity-60 hover:opacity-100 transition-opacity"
            style={{ borderColor: "var(--foreground)" }}
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <div
        className="w-full h-px opacity-10"
        style={{ background: "var(--foreground)" }}
      />
    </main>
  );
}