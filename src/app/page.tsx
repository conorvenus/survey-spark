import { auth } from "@/auth";
import { Banknote, Check, Gift, Zap, Sparkles, Lightbulb, Frown } from "lucide-react";
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
          <div className="flex flex-col items-center gap-4 bg-gray-300 p-4 rounded-box">
            <h2 className="text-2xl font-bold text-gray-800">Without SurveySpark</h2>
            <ul className="timeline timeline-vertical max-w-[26rem]">
              <li>
                <div className="timeline-middle">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">Have an idea</div>
                <hr className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-end timeline-box">Search for issues</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">Think of questions</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-end timeline-box">Write questions</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">
                  Gather responses
                  </div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-end timeline-box">Realise you missed something</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
                <div className="timeline-middle">
                  <Frown className="w-6 h-6" />
                </div>
                <div className="timeline-start timeline-box">Interview again</div>
                <hr  className="bg-black"/>
              </li>
              <li>
                <hr  className="bg-black"/>
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
                <hr className="bg-primary-content"/>
              </li>
              <li>
                <hr className="bg-primary-content"/>
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