interface ShortTextCardProps {
    question: string;
}

export default function ShortTextCard({question = "No Question Provided"} : ShortTextCardProps) {
    return (
        <div className="bg-primary-content shadow-md flex flex-col min-h-32 rounded-box p-8 gap-4">
            <h1 className="text-lg text-gray-600 font-bold">{question}</h1>
            <div>
                <input type="text" className="py-2 rounded-box bg-primary-content outline-none w-full" placeholder="Let me see it buddy..."/>
                <hr />
            </div>
        </div>
    )
}