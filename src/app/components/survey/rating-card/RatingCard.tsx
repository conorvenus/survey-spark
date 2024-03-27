interface RatingCardProps {
    question: string;
    stars?: number;
}

export default function RatingCardProps({ question = "No Question Provided", stars=5 }: RatingCardProps) {
    const renderStars = () => {
        const starElements = [];
        for (let i = 0; i < stars; i++) {
            if(Math.floor(stars/2) == i) {
                starElements.push(<input type="radio" name={question.replace(/\s+/g, '').toLowerCase()} className="mask mask-star-2 bg-primary" defaultChecked />);
            } else {
                starElements.push(<input type="radio" name={question.replace(/\s+/g, '').toLowerCase()} className="mask mask-star-2 bg-primary" />);
            }
        }
        return starElements;
    };

    return (
        <div className="bg-primary-content shadow-md flex flex-col min-h-32 rounded-box p-8 gap-4">
            <h1 className="text-lg text-gray-600 font-bold">{question}</h1>
            <div className="rating">
                {renderStars()}
            </div>
        </div>
    );
}