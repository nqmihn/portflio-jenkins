import { willLearnSkills } from "./listSkills"
import "./index.scss"
const WillLearnSkills = () => {
    return (
        <>
            <div>
                <ul className="text-center text-3xl list-none p-0 m-0 flex gap-10">
                    {willLearnSkills.map((skill, index) => {
                        return (
                            <li key={index} className="flex flex-col gap-2 items-center">
                                {skill.logo}
                                <p className="text-sm">{skill.name}</p>

                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default WillLearnSkills;