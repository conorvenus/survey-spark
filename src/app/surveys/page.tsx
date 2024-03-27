"use client"
import GenerateButton from "../components/GenerateButton"
import React from 'react'
import { useState } from 'react'
import { Settings2, Loader } from 'lucide-react'


export default function Surveys() {

    const [char, setChar] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChar(e.target.value.length);
    }

    return (
        <section className="flex flex-col gap-4 py-16">
            <div className="shadow-xl p-12 rounded-box flex flex-col gap-12 relative">
                <h1 className="text-4xl font-bold  self-center">🎉 Enter a prompt to generate your survey!</h1>
                <div className="join rounded-box h-[12rem] relative gradient-button shadow-md">
                    <p className="join-item  min-w-fit p-4">Generate a survey for a...</p>
                    <div className="join-item bg-primary-content p-0 w-full relative overflow-hidden">
                        <textarea maxLength={250} onChange={onChange} className="text-gray-600 focus:outline-none join-item bg-primary-content p-4 w-full h-full resize-none rounded-box" placeholder="Creative Weather App..." />
                        <p className={`absolute right-3 bottom-3 text-sm  ${char >= 250 ? "text-red-500" : "text-gray-400"}`}>{char}/250</p>
                    </div>

                </div>

                <div className="px-10 self-center join">
                    <GenerateButton />
                    <button className="btn join-item" onClick={()=>document.getElementById('settings').showModal()}><Settings2 color="#374151" /></button>
                </div>
                <div className="absolute -top-8 -right-8 -rotate-45">
                    <Loader size={100} color="#058ed9" />
                </div>
                <dialog id="settings" className="modal">
                    <div className="modal-box">
                        <p className="text-lg font-bold text-center mb-8">Number of Questions</p>
                     <input type="range" min="1" max="15" step="1" className="range [--range-shdw:#374151]" />
                     <div className="w-full flex justify-between text-xs px-2 items-center text-gray-300">
                         <span className="text-gray-700 text-lg font-bold">1</span>
                         <span>|</span>
                         <span>|</span>
                         <span>|</span>
                         <span className="text-gray-700 text-lg font-bold">5</span>
                         <span>|</span>
                         <span>|</span>
                         <span>|</span>
                         <span>|</span>
                         <span className="text-gray-700 text-lg font-bold">10</span>
                         <span>|</span>
                         <span>|</span>
                         <span>|</span>
                         <span>|</span>
                         <span className="text-gray-700 text-lg font-bold">15</span>
                     </div>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


        </section>
    )
}

