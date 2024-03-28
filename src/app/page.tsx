import { auth } from "@/auth";
import { Banknote, Check, Gift, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import AvatarGroup from "./components/reviews/AvatarGroup";
import CheckoutButton from "./components/CheckoutButton";
import FAQ from "./components/faq/FAQ";

export default async function Home() {
  const session = await auth();

  return (

    <main>
      <div className="hero h-screen pb-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16 items-center justify-center">
          <div className="mockup-browser border border-base-300 flex-1">
            <div className="mockup-browser-toolbar">
              <div className="input border border-base-300">
                <p className="text-sm text-base-content pt-1">https://surveyspark.com</p>
                </div>
            </div>
            <div className="flex justify-center px-4 py-32 border-t border-base-300">
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-5xl font-bold">Let your ideas spark the perfect survey</h1>
            <p className="leading-6 text-lg">The AI powered survey generator with everything you need to get responses in minutes, <span className="relative text-secondary-content font-bold px-2 py-0.5">not hours.<span className="absolute bg-secondary rounded-md w-full h-full left-0 top-0 -z-10 -rotate-2"></span></span></p>
            <div className="flex flex-col my-4">
              <div className="flex gap-4 items-center">
                <Check className="text-primary" />
                <span>Easy to use</span>
              </div>
              <div className="flex gap-4 items-center">
                <Check className="text-primary" />
                <span>Fast to ship</span>
              </div>
              <div className="flex gap-4 items-center">
                <Check className="text-primary" />
                <span>Open source</span>
              </div>
            </div>
            <Link href={session?.user ? "/#pricing" : "/api/auth/signin"} className="btn btn-primary w-fit px-8">
              <Zap />
              Get SurveySpark
            </Link>
            <div className="flex items-center gap-2">
              <Gift className="font-black text-primary" />
              <p>
                <span className="font-bold text-primary">50%</span> off all packages for the first 100 customers!
              </p>
            </div>

            <AvatarGroup />

          </div>
        </div>
      </div>

      <section className="py-16 flex flex-col items-center gap-8 justify-center">
        <h2 className="text-xl font-bold text-primary">We understand the struggle</h2>
        <h1 className=" font-bold text-5xl mb-10">Making Surveys shouldn't be this hard.</h1>
        <div className="flex w-full justify-between px-[6vw]">
          <div className="flex flex-col items-center gap-4 bg-red-200 p-4 rounded-box">
            <h2 className="text-2xl font-bold text-gray-800">Without SurveySpark</h2>
            <ul className="timeline timeline-vertical max-w-[26rem]">
              <li>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <div className="timeline-start timeline-box">Have an idea</div>
                <hr className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                </div>
                <div className="timeline-end timeline-box">Search for issues</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                </div>
                <div className="timeline-start timeline-box">Think of questions</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                </div>
                <div className="timeline-end timeline-box">Write questions</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                </div>
                <div className="timeline-start timeline-box">
                  Gather responses
                  </div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                </div>
                <div className="timeline-end timeline-box">Realise you missed something</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                </div>
                <div className="timeline-start timeline-box">Interview again</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-down"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                </div>
                <div className="timeline-end timeline-box">Repeat</div>
              </li>
            </ul>
          </div>

          <div className="divider divider-horizontal">OR</div>

          <div className="flex flex-col items-center gap-4 bg-green-200 p-4 rounded-box">
            <h2 className="text-2xl font-bold text-gray-800">With SurveySpark</h2>
            <ul className="timeline timeline-vertical max-w-[26rem]">
              <li>
                <div className="timeline-start timeline-box">Have an idea</div>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <hr className="bg-black"/>
              </li>
              <li>
                <hr className="bg-black"/>
                <div className="timeline-end timeline-box">
                  Gather responses!
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {/* <Sparkles color="#a61fde" /> */}
                    ✨
                    </div>
                  
                  </div>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                </div>
                
              </li>             
            </ul>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16 flex flex-col items-center gap-8 justify-center" id="pricing">
        <h1 className="text-primary font-bold text-lg">Pricing</h1>
        <h2 className="text-5xl font-bold text-center max-w-[800px]">Save hours and get responses coming in minutes!</h2>
        <div className="flex items-center xl:gap-8 mt-8 xl:flex-row flex-col gap-16">
          <div className="card w-96 bg-base-100 border indicator shadow-md">
            <div className="indicator-item text-2xl font-bold bg-primary rounded-box text-primary-content indicator-top indicator-center w-fit px-4 py-2 flex items-center gap-2">
              <span className="text-lg line-through opacity-50">$9.99</span>
              $4.99
            </div>
            <div className="card-body gap-4 py-16">
              <h2 className="card-title text-2xl font-bold border-b mb-2">Basic</h2>
              <div className="flex gap-2 items-center text-2xl text-primary font-bold">
                <Banknote className="w-8 h-8" />
                <span>50 Credits</span>
              </div>
              <div className="card-actions">
                <CheckoutButton credits={50} />
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 border indicator shadow-md">
            <div className="indicator-item text-2xl font-bold bg-primary rounded-box text-primary-content indicator-top indicator-center w-fit px-4 py-2 flex items-center gap-2">
              <span className="text-lg line-through opacity-50">$19.99</span>
              $9.99
            </div>
            <div className="card-body gap-4 py-16">
              <h2 className="card-title text-2xl font-bold border-b mb-2">Deluxe</h2>
              <div className="flex gap-2 items-center text-2xl text-primary font-bold">
                <Banknote className="w-8 h-8" />
                <span>150 Credits</span>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary w-full">
                  <Zap />
                  Get SurveySpark
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 border indicator shadow-md">
            <div className="indicator-item text-2xl font-bold bg-primary rounded-box text-primary-content indicator-top indicator-center w-fit px-4 py-2 flex items-center gap-2">
              <span className="text-lg line-through opacity-50">$29.99</span>
              $14.99
            </div>
            <div className="card-body gap-4 py-16">
              <h2 className="card-title text-2xl font-bold border-b mb-2">Ultimate</h2>
              <div className="flex gap-2 items-center text-2xl text-primary font-bold">
                <Banknote className="w-8 h-8" />
                <span>250 Credits</span>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary w-full">
                  <Zap />
                  Get SurveySpark
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <hr className="absolute w-full left-0" />
      <footer className="footer p-10 text-base-content items-center">
        <aside className="items-center grid-flow-col">
          <Zap className="text-primary" />
          <p><span className="font-bold text-primary">Survey Spark</span><br />Let your ideas spark the perfect survey!</p>
        </aside>
        <nav>
          <h6 className="footer-title">Links</h6>
          <Link href={"/#pricing"} className="link link-hover">Pricing</Link>
          <a className="link link-hover">Support </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
      </footer>
    </main>
  );


}