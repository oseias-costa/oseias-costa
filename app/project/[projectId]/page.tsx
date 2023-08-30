"use client";
import { ProjectsContainer } from "@/components/ProjectsCovers/projectsCovers.styles"
import { projects } from "./_data"
import ProjectDescription from "@/components/Project/ProjectDescription";
import { ImageLogo, ImgProject, ProjectItem } from "@/components/Project/project.styles";
import Logo from "../../../public/oseias-logo-two.svg";
import Link from "next/link";
import { useRouter } from 'next/navigation'

interface Params {
    params: {
        projectId: string 
    }
}

export default function Page({ params }: Params){
    const router = useRouter()
    const item = projects.filter(item => item.link === params.projectId)[0]
    
    return ( 
            <ProjectsContainer>
                <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
                <ImageLogo src ={Logo} alt='Logo Oséias Costa' />
                <ProjectItem>
                    <ImgProject src={item.img} alt={item.alt} />
                    <ProjectDescription 
                        alt={item.alt}            
                        description={item.description}
                        tecnologies={item.technologies}
                        adress={item.adress}
                        code={item.code}
                        status={item.status}
                    />
                </ProjectItem>
            </ProjectsContainer>)
}

async function generateMetadata({ params }: Params) {
    const item = projects.filter(item => item.link === params.projectId )[0]

    return {
        title: `Projeto ${item.alt}`,
        description: `Projeto página - ${item.alt}`
    }
}