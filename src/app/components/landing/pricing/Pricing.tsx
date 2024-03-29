import React from "react";
import { Banknote, Zap } from "lucide-react";
import CheckoutButton from "../../CheckoutButton";

export function Pricing() {
  return <section className="min-h-screen py-16 flex flex-col items-center gap-8 justify-center" id="pricing">
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
      </section>;
}
  