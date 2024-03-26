export default function RadioCard() {
    return (
        <div className="bg-primary-content shadow-md flex flex-col min-h-32 rounded-box p-8 gap-4">
            <h1 className="text-lg text-gray-600 font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eligendi?</h1>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 font-medium">
                    <div className="bg-primary-content border-2 border-black h-4 w-4 rounded-full"></div> 
                    Choice 1
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <div className="bg-primary-content border-2 border-black h-4 w-4 rounded-full"></div> 
                    Choice 2
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <div className="bg-primary-content border-2 border-black h-4 w-4 rounded-full"></div> 
                    Choice 3
                </div>
                <div className="flex items-center gap-4 font-medium">
                    <div className="bg-primary-content border-2 border-black h-4 w-4 rounded-full"></div> 
                    Choice 4
                </div>
            </div>
        </div>
    )
}