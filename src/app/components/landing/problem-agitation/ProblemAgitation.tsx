import React from "react";
import { Frown, Lightbulb, Zap } from "lucide-react";

export function ProblemAgitation({}) {
  return <section className="py-16 flex flex-col items-center gap-8 justify-center">
        <h2 className="text-xl font-bold text-primary">We understand the struggle</h2>
        <h1 className=" font-bold text-5xl mb-10">Making Surveys shouldn't be this hard.</h1>
        <div className="flex w-full justify-between px-[6vw]">
          <div className="flex flex-col items-center gap-4 bg-gray-300 p-4 rounded-box">
            <h2 className="text-2xl font-bold text-gray-800">Without SurveySpark</h2>
            <ul className="timeline timeline-vertical max-w-[26rem]">
              <li>
                <div className="timeline-middle">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">Have an idea</div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-end timeline-box">Search for issues</div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">Think of questions</div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-end timeline-box">Write questions</div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">
                  Gather responses
                  </div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-end timeline-box">Realise you missed something</div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">Interview again</div>
                <hr className="bg-black" />
              </li>
              <li>
                <hr className="bg-black" />
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-end timeline-box">Repeat</div>
              </li>
            </ul>
          </div>

          <div className="divider divider-horizontal">OR</div>

          <div className="flex flex-col items-center gap-4 bg-primary p-4 rounded-box text-primary-content">
            <h2 className="text-2xl font-bold">With SurveySpark</h2>
            <ul className="timeline timeline-vertical max-w-[26rem] flex flex-col">
              <li>
                <div className="timeline-start timeline-box text-primary font-bold">Have an idea</div>
                <div className="timeline-middle">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <hr className="bg-primary-content" />
              </li>
              <li>
                <hr className="bg-primary-content" />
                <div className="timeline-end timeline-box font-bold text-primary">
                  Gather responses!
                  <div className="absolute -top-2 -right-2 text-2xl">
                    ✨
                  </div>
                </div>
                <div className="timeline-middle">
                  <Zap className="w-6 h-6" />
                </div>
              </li>             
            </ul>
          </div>
        </div>
      </section>;
}
  