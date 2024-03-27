"use client"
import GenerateButton from "../components/GenerateButton"
import React from 'react'
import {useState} from 'react'


export default function Surveys() {

    const [char, setChar] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChar(e.target.value.length);
    }

    return (
        <section className="flex flex-col gap-4 py-16">
            <div className="shadow-xl p-12 rounded-box flex flex-col gap-8">
                <h1 className="text-4xl font-bold  self-center">🎉 Enter a prompt to generate your survey!</h1>
                <div className="join rounded-box h-40 relative shadow-md">
                    <p className="join-item gradient-button  min-w-fit">Generate a survey for a...</p>
                    <div className="join-item bg-primary-content p-0 w-full relative overflow-hidden">
                        <textarea maxLength={250} onChange={onChange} className="focus:outline-none join-item bg-primary-content p-4 w-full h-full resize-none" placeholder="Creative Weather App..." />
                        <p className={`absolute right-3 bottom-3 text-sm  ${char >= 250 ? "text-red-500" : "text-gray-400"}`}>{char}/250</p>
                    </div>
                </div>
                <GenerateButton />
            </div>
        </section>
    )
}