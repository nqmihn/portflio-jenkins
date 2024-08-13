import "./index.scss"
const SkillProgress = () => {
    return <div className="flex flex-1 gap-10 px-3 py-5">

        <div className="flex flex-col gap-5 skill-container mt-32 w-11/12 px-3 py-5 mx-auto" id="skills">
            <h1 className="text-foreground text-4xl font-normal float-left inline">
                Proficiency
            </h1>
            <div className="text-xl w-3/5 flex flex-col gap-10">
                <p>Frontend</p>
                <div className="meter">
                    <span className="w-2/5"></span>
                </div>
                <p>Backend</p>
                <div className="meter">
                    <span className="w-3/4"></span>
                </div>
                <p>Devops</p>
                <div className="meter">
                    <span className="w-1/12"></span>
                </div>
            </div>

        </div>
    </div>
}
export default SkillProgress;