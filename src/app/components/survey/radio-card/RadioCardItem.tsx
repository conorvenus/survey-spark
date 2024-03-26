import React from 'react';

interface CheckCardItemProps {
    text: string;
}

const CheckCardItem = ({ text }: CheckCardItemProps) => {
    return (
        <div className="flex items-center gap-4 font-medium">
            <div className="bg-primary-content border-2 border-black h-4 w-4 rounded-full"></div>
            {text}
        </div>
    );
}

export default CheckCardItem;