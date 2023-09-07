"use client";
import { ProjectsContainer } from "@/components/ProjectsCovers/projectsCovers.styles"
import { projects } from "./_data"
import ProjectDescription from "@/components/Project/ProjectDescription";
import { ButtonBack, ImageLogo, ImgProject, ProjectItem } from "@/components/Project/project.styles";
import Logo from "../../../public/oseias-logo-two.svg";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import ArrowIcon from "@/components/Project/ArrowIcon";
import Footer from "@/components/Footer/Footer";

interface Params {
    params: {
        projectId: string 
    }
}

export default function Page({ params }: Params){
    const router = useRouter()
    const item = projects.filter(item => item.link === params.projectId)[0]
    
    return ( 
        <>
            <header>
                <title>{`Projeto ${item.alt}`}</title>
                <meta name='description' content={item.description} />
            </header>
            <ProjectsContainer>
                <ButtonBack type="button" onClick={() => router.back()}>
                    <ArrowIcon /> Voltar
                 </ButtonBack>
                 <Link href='/'>
                    <ImageLogo src ={Logo} alt='Logo Oséias Costa' />
                 </Link>
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
                <Footer />
            </ProjectsContainer>
            </>
        )
}