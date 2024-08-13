import Image from "next/image";
import DevSkills from "../@devSkills";
import WillLearnSkills from "../@devSkills/willLearn";
const Skills = () => {
    return <>
        <div className="flex w-11/12 flex-1 gap-10 px-3 py-5">
            <div className="w-full px-10">
                <Image src="/images/man-programming.jpg" alt="Man programming" width={1000} height={1000} />
            </div>
            <div className="flex flex-col gap-5 skill-container mt-32 w-11/12 px-3 py-5 mx-auto" id="skills">
                <h1 className="text-foreground text-4xl font-normal float-left inline">
                    Web Development Skills
                </h1>
                <p className="text-secondary-foreground text-xl">Now i can build website with the following skills:</p>
                <DevSkills />
                <p className="text-secondary-foreground text-xl mt-5">Maybe learn in the future:</p>
                <WillLearnSkills />
            </div>
        </div>
    </>
}
export default Skills;