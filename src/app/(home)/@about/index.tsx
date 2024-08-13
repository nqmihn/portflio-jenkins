import emoji from "react-easy-emoji";
import SocialMedia from "../@socialMedia";
import { Button } from "@/components/ui/button";
import "./index.scss"
import Image from "next/image";
const AboutPage = () => {
    return <>
        <div className="w-11/12 px-3 py-5 mt-16 mx-auto">
            <div className="flex flex-1 px-3 py-5 text-foreground main-about">
                <div className="flex flex-col gap-8">
                    <div className="flex gap-2 ">
                        <h1 className="text-7xl font-medium">Hi, I'm Aaros</h1>
                        <span className="wave-emoji">{emoji("👋")}</span>
                    </div>
                    <p className="text-3xl font-extralight w-3/4">
                        I'm studying at HCM University of Information Technology (UIT) and having an experience of building web applications with Javascript / Reactjs / Nextjs and other backend frameworks like Nestjs,FastAPI...
                    </p>
                    <SocialMedia />
                    <div className="flex gap-10 mt-4 font-bold">
                        <Button className="uppercase py-6 px-5 text-xl rounded border-solid border-[1px] border-primary transition-all duration-300  hover:bg-white hover:text-hover-foreground hover:transition-all hover:duration-300 hover:-translate-y-[3px]">Contact Me</Button>
                        <Button className="uppercase py-6 px-5 text-xl rounded border-solid border-[1px] border-primary transition-all duration-300  hover:bg-white hover:text-hover-foreground hover:transition-all hover:duration-300 hover:-translate-y-[3px]">See My CV</Button>
                    </div>
                </div>
                <div className="w-full px-10">
                    <Image src="/images/gura-hello.png" alt="Gura Hello Image" width={600} height={900} />
                </div>
            </div>
        </div>
    </>
}

export default AboutPage;