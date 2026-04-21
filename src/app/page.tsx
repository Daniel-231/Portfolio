import React from "react";

export default function Home(): React.ReactNode  {
    return (
        <div className="">
            <main className="flex-1">
                <div
                    id="about"
                    className="flex flex-col text-center  text-2xl"
                >

                    <div className="">
                        <p className="">
                            Full-Stack Junior Developer based in Athens, Greece. I build and
                            deploy web applications end-to-end — from React frontends to Python
                            Flask /Node Express APIs and SQL/NoSQL databases.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}