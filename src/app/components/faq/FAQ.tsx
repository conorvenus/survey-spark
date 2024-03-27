import exp from "constants";
import FAQEntry from "./FAQEntry";

const FAQ = () => {
    return (
        
      <section className="min-h-screen py-16 grid grid-cols-2 gap-16">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-primary">FAQ</h2>
        <h1 className="text-black font-bold text-4xl">Frequently Asked Questions</h1>
        <div className="flex items-center gap-4">
        <p className="text-gray-500">Got another question?</p>
        <button className="btn btn-secondary font-bold -rotate-2 py-1 px-4">Contact Us!</button>
        </div>
      </div>
      
      <div className="join join-vertical w-full">
        <FAQEntry question="How do I create a survey?" answer="To create a survey, you can click on the 'Create Survey' button and follow the instructions." />
        <FAQEntry question="How do I share my survey?" answer="To share your survey, you can click on the 'Share Survey' button and follow the instructions." />
        <FAQEntry question="How do I analyze survey results?" answer="To analyze survey results, you can click on the 'Analyze Results' button and follow the instructions." />
        <FAQEntry question="How do I export survey responses?" answer="To export survey responses, you can click on the 'Export Responses' button and follow the instructions." />
        <FAQEntry question="How do I delete a survey?" answer="To delete a survey, you can click on the 'Delete Survey' button and follow the instructions." />
        <FAQEntry question="What is SurveySpark?" answer="SurveySpark is a survey platform that allows you to create surveys and collect responses from your audience." />
      </div>
    </section>
    );
}
export default FAQ;