import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { Banknote, LogOut, NotebookPen, Zap, Home } from "lucide-react";
import Link from "next/link";
import NavLink from "./NavLink";

export default async function Navbar() {
    const session = await auth();
    let user;

    if (session?.user) {
        const prisma = new PrismaClient();
          user = await prisma.user.findUnique({
          where: {
              id: session?.user?.id,
          },
          select: {
              credits: true,
          },
        });
    }

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto py-4 px-8">
          <Link href={"/"} className="navbar-start font-bold gap-2 text-lg">
            <img src="/logo.svg" alt="SurveySpark" className="h-8 w-8" />
            <span className="md:block hidden">SurveySpark</span>
          </Link>
          {session?.user && (
            <div className="navbar-center gap-6 md:gap-12 font-medium">
              <NavLink href={"/"}>
                <Home className="w-5 h-5" />
                Home
              </NavLink>
              <NavLink href={"/surveys"}>
                <NotebookPen className="w-5 h-5" />
                Surveys
              </NavLink>
            </div>
          )}
          <div className="navbar-end gap-2 md:gap-4">
            {session?.user ? 
              <>
                <p className="gap-1 items-center text-lg text-primary font-bold md:flex hidden pt-[4px]">
                  <Banknote />
                  {user?.credits} Credits
                </p>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Icon" src={session.user.image ?? ""} />
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 gap-3 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <p className="flex gap-1 items-center text-lg text-primary font-bold md:hidden">
                        <Banknote />
                        {user?.credits} Credits
                      </p>
                    </li>
                    <li >
                      <Link href={"/#pricing"} className="btn bg-white">
                        <Banknote />
                        Credits
                      </Link>
                    </li>
                    <li>
                      <Link href={"/api/auth/signout"} className="btn btn-primary">
                        <LogOut />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </> : 
              <>
                <Link href={"/api/auth/signin"} className="btn btn-primary">
                  <Zap />
                  Get SurveySpark
                </Link>
              </>
            }
          </div>
        </div>
 
    )
}