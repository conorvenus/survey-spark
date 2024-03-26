import React from 'react';

interface CheckCardItemProps {
    name: string;
    text: string;
}

const CheckCardItem = ({ text, name }: CheckCardItemProps) => {
    return (
        <label className="flex items-center gap-4 font-medium">
            <input type="radio" name={name} className="
            appearance-none
            w-6 h-6
            rounded-full
            relative
            border-2 border-primary
            before:bg-primary
            before:w-3 
            before:h-3
            before:rounded-full
            before:top-[50%]
            before:left-[50%] 
            before:translate-x-[-50%]
            before:translate-y-[-50%]
            before:absolute
            before:scale-0
            before:transition-transform
            before:duration-300
            before:checked:scale-100
            cursor-pointer" />
            {text}
        </label>
    );
}

export default CheckCardItem;