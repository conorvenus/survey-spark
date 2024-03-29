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
        <FAQEntry question="Why should I use SurveySpark?" answer=
        "No matter what your task may be, time is the most valuable resource in ensuring it is done to the best it can be. SurveySpark is designed to replace the time spent writing surveys with time spent doing what actually matters - getting responses." />
        <FAQEntry question="Is SurveySpark free?" answer=
        "We provide new users with 10 FREE credits to create a survey using our cutting edge generator. After that, credits can be purchased to generate more forms." />
        <FAQEntry question="Why should I use SurveySpark?" answer="" />
        <FAQEntry question="Why should I use SurveySpark?" answer="" />
        <FAQEntry question="Why should I use SurveySpark?" answer="" />
      </div>
    </section>
    );
}
export default FAQ;