import {IconType} from "react-icons"
import { 
    FaGithub as GithubIcon,
    FaInstagram as InstagramIcon, 
    FaLinkedin  as LinkedinIcon,
    FaEnvelope as MailIcon
} from "react-icons/fa"

import { HiMiniAcademicCap as LattesIcon } from "react-icons/hi2";


export interface SocialMedia {
    name: string
    Icon: IconType,
    url: string,
    resume?: string

}


export const SocialMedias: SocialMedia[] = [
    {
        name: "LinkedIn",
        Icon: LinkedinIcon,
        url: "https://www.linkedin.com/in/henrickyl/",
    },
    {
        name: "GitHub",
        Icon: GithubIcon,
        url: "https://github.com/henrickyL",
    },
    {
        name: "Instagram",
        Icon: InstagramIcon,
        url: "https://www.instagram.com/henrickyl/",
        resume: "HenrickyL"
    },
    {
        name: "EMail",
        Icon: MailIcon,
        url: "Henrickyl1@gmail.com",
    },
    {
        name: "Lattes",
        Icon: LattesIcon,
        url: "http://lattes.cnpq.br/8348478611079334",
    },
    {
        name: "Instagram",
        Icon: InstagramIcon,
        url: "https://www.instagram.com/perikan_studio/",
        resume:"perikan_studio"
    },
]

