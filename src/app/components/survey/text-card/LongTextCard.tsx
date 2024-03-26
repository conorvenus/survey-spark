interface LongTextCardProps {
    question: string;
    defaultText?: string;
}

export default function LongTextCard({ question = "No Question Provided", defaultText="Your answer..."} : LongTextCardProps) {
    return (
        <div className="bg-primary-content shadow-md flex flex-col min-h-32 rounded-box p-8 gap-4">
            <h1 className="text-lg text-gray-600 font-bold">{question}</h1>
            <textarea className="py-2 rounded-box bg-primary-content outline-none h-[100px]" placeholder={defaultText}></textarea>
        </div>
    )
}