import Image from "next/image";

const Education = () => {
    return <>
        <div className="flex flex-1 gap-10 px-3 py-5">

            <div className="flex flex-col gap-5 mt-32 w-11/12 px-3 py-5 mx-auto" id="education">
                <h1 className="text-foreground text-4xl font-normal float-left inline">
                    Education
                </h1>
                <div className="flex gap-10 mt-5">
                    <div>
                        <Image src="/images/uit.png" alt="Uit Logo" height={140} width={100}
                            className="object-cover rounded-[50%] shadow-lg" />
                    </div>
                    <div>
                        <h5 className="text-foreground text-2xl font-bold">Ho Chi Minh University of Information Technology (UIT)</h5>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-foreground text-xl font-medium">
                                Information Technology Major
                            </h5>
                            <p className="text-xl font-light text-subTitle">
                                2021 - Now
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}
export default Education;