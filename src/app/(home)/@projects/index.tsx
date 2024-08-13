import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GoDotFill } from "react-icons/go"
import { GoRepoForked } from "react-icons/go"
import { FaStar } from "react-icons/fa"
import "./index.scss"
import { Repo, listRepo } from "./listRepo"
import Link from "next/link"
import { Button } from "@/components/ui/button"



const Projects = async () => {
    // const response = await fetch('https://api.github.com/users/nqmihn/repos?limit=6')
    const repos: Repo[] = listRepo
    return (
        <>
            <div className="flex flex-1 gap-10 px-3 py-5">

                <div className="flex flex-col gap-5 mt-32 w-11/12 px-3 py-5 mx-auto" id="repos">
                    <h1 className="text-foreground text-4xl font-normal float-left inline">
                        Repositories
                    </h1>
                    <div className="flex w-full gap-5 flex-wrap">
                        {repos.map((repo, index) => {
                            return <>
                                <Link href={repo.html_url}>
                                    <Card className="w-[400px] h-[200px] py-6 rounded-[2px] shadow-lg hover:cursor-pointer repo-card duration-300 hover:duration-300 hover:-translate-y-[1px]">
                                        <CardHeader className="pt-2">
                                            <CardTitle className="text-2xl">
                                                {repo.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            {repo.description}
                                        </CardContent>
                                        <CardFooter className="flex items-center justify-between">
                                            <div className="flex gap-2 items-center justify-center">
                                                <div className="flex items-center justify-center gap-1">
                                                    <GoDotFill className="size-4" />
                                                    <span className="text-sm">{repo.language}</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-1">
                                                    <GoRepoForked className="size" />
                                                    <span className="text-sm">{repo.forks_count}</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-1">
                                                    <FaStar className="size" />
                                                    <span className="text-sm">{repo.stargazers_count}</span>
                                                </div>
                                            </div>
                                            <span className="text-sm">{(repo.size / 1024).toFixed(2)} MB</span>
                                        </CardFooter>
                                    </Card>
                                </Link>

                            </>
                        })}
                    </div>
                    <Link href="https://github.com/nqmihn" className="mx-auto">
                        <Button className="px-6 py-5 rounded border-solid border-[1px] hover:bg-white hover:text-hover-foreground">See more</Button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Projects
