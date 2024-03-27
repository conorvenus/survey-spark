import { Bot, RefreshCw } from "lucide-react";

export default function GenerateButton() {
    return (
        <button className="btn bg-gray-700 shadow-md text-primary-content">
            <Bot className="w-6 h-6" />
            Generate with AI
        </button>
    )
}