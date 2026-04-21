import Link from 'next/link';
import React from "react";

export default function Sidebar(): React.ReactNode  {
    return (
        <div className=" flex items-center justify-between mb-12">
            <div className="text-left">
                <Link href="/">
                    <h1 className="text-4xl font-bold ">Daniil Klimenko</h1>
                    <p className="text-xl text-foreground/60">Fullstack Developer</p>
                </Link>
            </div>
            <nav className="text-2xl flex space-x-40">
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/experience">Experience</Link>
            </nav>
        </div>
    );
}