import React from 'react';

interface CheckCardItemProps {
    name: string;
    text: string;
}

const CheckCardItem = ({ text, name }: CheckCardItemProps) => {
    return (
        <label className="flex items-center gap-4 font-medium cursor-pointer">
            <input type="radio" name={name} className="
            radio
            radio-primary
            w-6 h-6
            " />
            {text}
        </label>
    );
}

export default CheckCardItem;