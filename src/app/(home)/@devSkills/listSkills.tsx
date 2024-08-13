import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaPhp, FaAws, FaDocker, FaJenkins } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNestjs, SiFastapi, SiKubernetes } from "react-icons/si";
import { DiMysql, DiMongodb } from "react-icons/di";
const listSkills = [
    {
        name: "Html",
        logo: <FaHtml5 />,

    }, {
        name: "Css",
        logo: <FaCss3 />,
    }, {
        name: "Javascript",
        logo: <IoLogoJavascript />,
    }, {
        name: "React",
        logo: <FaReact />,

    }, {
        name: "NodeJs",
        logo: <FaNodeJs />,
    }, {
        name: "NestJs",
        logo: <SiNestjs />,
    }, {
        name: "FastApi",
        logo: <SiFastapi />,
    }, {
        name: "Php",
        logo: <FaPhp />,
    }, {
        name: "Mysql",
        logo: <DiMysql />,
    },
    {
        name: "Mongodb",
        logo: <DiMongodb />,
    }

]
const willLearnSkills = [
    {
        name: "Aws",
        logo: <FaAws />,
    },
    {
        name: "Docker",
        logo: <FaDocker />,
    },
    {
        name: "Kubernetes",
        logo: <SiKubernetes />,

    },
    {
        name: "Jenkins",
        logo: <FaJenkins />,
    }
]
export {
    listSkills,
    willLearnSkills
}