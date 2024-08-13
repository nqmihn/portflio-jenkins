import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import "./index.scss"
const SocialMedia = () => {
    return (
        <div className="flex mb-4 gap-3">
            <Link href="https://github.com/nqmihn">
                <FaGithub className="icon" id="github" />
            </Link>
            <Link href="mailto:ngminh06112003@gmail.com">
                <CiMail className="icon" id="mail" />
            </Link>
            <Link href="https://twitter.com/gray_aros16">
                <FaXTwitter className="icon" id="twitter" />
            </Link>

        </div>
    );
}
export default SocialMedia;