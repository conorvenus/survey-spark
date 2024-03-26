import CheckCardItem from "./CheckCardItem";

interface CheckCardProps {
    question: string;
    entries: string[];
}

export default function CheckCard({ question="No Question Provided", entries = [] }: CheckCardProps) {
    return (
        <div className="bg-primary-content shadow-md flex flex-col min-h-32 rounded-box p-8 gap-4">
            <h1 className="text-lg text-gray-600 font-bold">{question}</h1>
            <div className="flex flex-col gap-2">
                {entries.map((entry, index) => <CheckCardItem text={entry} />)}
                {entries.length === 0 && <p className="text-gray-400">No entries</p>}
            </div>
        </div>
    )
}