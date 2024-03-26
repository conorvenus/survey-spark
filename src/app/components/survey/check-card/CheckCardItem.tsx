
interface CheckCardItemProps {
    text: string;
}

const CheckCardItem = ({ text }: CheckCardItemProps) => {
    return (
        <label className="flex items-center gap-4 font-medium cursor-pointer">
            <input type="checkbox" className="
            w-6 h-6
            checkbox 
            checkbox-primary
            " />
            {text}
        </label>
    );
}

export default CheckCardItem;