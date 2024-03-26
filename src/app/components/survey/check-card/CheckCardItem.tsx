import React from 'react';
import { Check } from "lucide-react";

interface CheckCardItemProps {
    text: string;
}

const CheckCardItem = ({ text }: CheckCardItemProps) => {
    return (
        <div className="flex items-center gap-4 font-medium">
            <Check className="border-black border-2 h-4 w-4" />
            {text}
        </div>
    );
}

export default CheckCardItem;