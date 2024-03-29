import { Footer } from './components/landing/footer/Footer';
import { Pricing } from './components/landing/pricing/Pricing';
import { ProblemAgitation } from './components/landing/problem-agitation/ProblemAgitation';
import { Hero } from './components/landing/hero/Hero';
import { auth } from "@/auth";
import FAQ from "./components/landing/faq/FAQ";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <Hero session={session} />
      <ProblemAgitation />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );

}