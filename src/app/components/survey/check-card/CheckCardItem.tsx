
interface CheckCardItemProps {
    text: string;
}

const CheckCardItem = ({ text }: CheckCardItemProps) => {

    //Temporary implementation for the Tick. Requires further styling or use state to toggle the tick
    return (
        <label className="flex items-center gap-4 font-medium">
            <input type="checkbox" className="
            appearance-none
            w-6 h-6
            relative
            border-2 border-gray-300
            checked:border-primary
            checked:appearance-auto
            " />
            {text}
        </label>
    );
}

export default CheckCardItem;