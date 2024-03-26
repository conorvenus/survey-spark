import { Check } from "lucide-react"
import RadioCard from "../components/survey/RadioCard"
import CheckCard from "../components/survey/CheckCard"
import LongTextCard from "../components/survey/LongTextCard"
import ShortTextCard from "../components/survey/ShortTextCard"

export default async function Surveys() {
    return (
        <div className="flex flex-col gap-4 py-16">
            <RadioCard />
            <CheckCard />
            <LongTextCard />
            <LongTextCard />
            <ShortTextCard />
        </div>
    )
}