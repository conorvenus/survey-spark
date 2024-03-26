import { Check } from "lucide-react";

export default function CheckCard() {
    return (
        <div className="bg-primary-content shadow-md flex flex-col min-h-32 rounded-box p-8 gap-4">
            <h1 className="text-lg text-gray-600 font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eligendi?</h1>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 font-medium">
                    <Check className="border-black border-2 h-4 w-4" />    
                    Choice 1
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <Check className="border-black border-2 h-4 w-4" />    
                    Choice 2
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <Check className="border-black border-2 h-4 w-4" />    
                    Choice 3
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <Check className="border-black border-2 h-4 w-4" />    
                    Choice 4
                </div>
            </div>
        </div>
    )
}