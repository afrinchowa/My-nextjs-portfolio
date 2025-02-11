import React from 'react';
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb, SiHtml5, SiTypescript } from 'react-icons/si';

const Skills: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-5xl font-bold text-center mb-10">
                My <span className="text-[#49d9d3]">Skills</span>
            </h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="skill-card text-center bg-[#0a1d29] text-white p-6 rounded-lg shadow-xl">
                    <SiReact className="text-5xl mb-4 text-[#49d9d3]" />
                    <h2 className="text-2xl font-semibold">React</h2>
                    <p>Building interactive and dynamic user interfaces with React.js.</p>
                </div>
                <div className="skill-card text-center bg-[#0a1d29] text-white p-6 rounded-lg shadow-xl">
                    <SiNodedotjs className="text-5xl mb-4 text-[#49d9d3]" />
                    <h2 className="text-2xl font-semibold">Node.js</h2>
                    <p>Creating server-side logic and APIs with Node.js.</p>
                </div>
                <div className="skill-card text-center bg-[#0a1d29] text-white p-6 rounded-lg shadow-xl">
                    <SiJavascript className="text-5xl mb-4 text-[#49d9d3]" />
                    <h2 className="text-2xl font-semibold">JavaScript</h2>
                    <p>Writing efficient and scalable JavaScript code for both frontend and backend.</p>
                </div>
                <div className="skill-card text-center bg-[#0a1d29] text-white p-6 rounded-lg shadow-xl">
                    <SiMongodb className="text-5xl mb-4 text-[#49d9d3]" />
                    <h2 className="text-2xl font-semibold">MongoDB</h2>
                    <p>Designing and managing databases with MongoDB for data storage.</p>
                </div>
                <div className="skill-card text-center bg-[#0a1d29] text-white p-6 rounded-lg shadow-xl">
                    <SiHtml5 className="text-5xl mb-4 text-[#49d9d3]" />
                    <h2 className="text-2xl font-semibold">HTML5</h2>
                    <p>Creating semantic and well-structured HTML code for web pages.</p>
                </div>
               
                <div className="skill-card text-center bg-[#0a1d29] text-white p-6 rounded-lg shadow-xl">
                    <SiTypescript className="text-5xl mb-4 text-[#49d9d3]" />
                    <h2 className="text-2xl font-semibold">TypeScript</h2>
                    <p>Enhancing JavaScript code quality with TypeScript for better maintainability.</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
