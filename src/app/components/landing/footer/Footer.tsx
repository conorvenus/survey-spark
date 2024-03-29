import React from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

export function Footer({}) {
  return <><hr className="absolute w-full left-0" />
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
      </footer></>;
}
  