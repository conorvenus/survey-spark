import RadioCard from "../components/survey/radio-card/RadioCard"
import CheckCard from "../components/survey/check-card/CheckCard"
import LongTextCard from "../components/survey/text-card/LongTextCard"
import ShortTextCard from "../components/survey/text-card/ShortTextCard"
import GenerateButton from "../components/GenerateButton"

export default async function Surveys() {
    return (
        <div className="flex flex-col gap-4 py-16">
            <div className="shadow-xl p-12 rounded-box flex flex-col gap-4">
                <div className="gradient-button w-fit">Create a survey that...</div>
                <textarea className="bg-primary-content shadow-md rounded-box p-4 w-full h-48 resize-none" placeholder="Enter your survey description here..."></textarea>
                <GenerateButton />
            </div>
            <RadioCard 
            question={"If you were to pick 4 features within SurveySpark, what would they be and why? Please explain in detail and select using the boxes below."}
            entries={[
                "Field 1",
                "Field 2",
                "Field 3",
                "Field 4"]}/>
            <CheckCard 
            question="What are your favorite colors?"
            entries={[
                "Field 1",
                "Field 2",
                "Field 3",
                "Field 4"]}/>
            <LongTextCard 
            question="Here's a question"/>
            <LongTextCard 
            question="Here's another question"/>
            <ShortTextCard
            question="Here's a question requiring a short response" />
        </div>
    )
}