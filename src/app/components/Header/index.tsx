"use client"
import Link from "next/link";
import ThemeButton from "../ThemeButton";

export default function Header() {
    return <>

        <header className="bg-background w-full px-4 py-5 mx-0 my-auto">
            <Link href="/" className="float-left text-3xl">
                <span className="grey-color"> &lt;</span>
                <span>Logo</span>
                <span className="grey-color">/&gt;</span>
            </Link>
            <ul className="float-right m-0 p-0 list-none text-foreground text-xl flex gap-5 mt-3">
                <li>
                    <Link href="#skills" className="px-4 py-5 hover:bg-hover">Skills</Link>
                </li>
                <li>
                    <Link href="#education" className="px-4 py-5 hover:bg-hover">Education</Link>
                </li>
                <li>
                    <Link href="#repos" className="px-4 py-5 hover:bg-hover">My Source Code</Link>
                </li>
                <li>
                    <Link href="#skill" className="px-4 py-5 hover:bg-hover">Blogs</Link>
                </li>
                <li>
                    <Link href="#skill" className="px-4 py-5 hover:bg-hover">Waifu Showcase</Link>
                </li>
                <li>
                    <ThemeButton />
                </li>
            </ul>
        </header>
    </>
}