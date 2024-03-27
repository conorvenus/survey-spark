import RadioCard from "../components/survey/radio-card/RadioCard"
import CheckCard from "../components/survey/check-card/CheckCard"
import LongTextCard from "../components/survey/text-card/LongTextCard"
import ShortTextCard from "../components/survey/text-card/ShortTextCard"
import RatingCard from "../components/survey/rating-card/RatingCard"

export default async function Surveys() {
    return (
        <div className="flex flex-col gap-4 py-16">
            <RadioCard 
            question="What is your favorite color?"
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
            <RatingCard
            question="Rate this survey"
            stars={5} />
            <RatingCard 
            question="Rate this survey again"
            stars={10} />
        </div>
    )
}