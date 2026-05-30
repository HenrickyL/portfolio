import { LocalizationTexts } from "@/types/LocalizationTexts";
import { experiencesEN, experiencesPT } from "./Experiences";
import { StacksTypes } from "@/types/stacks";

export const LocalizationPT: LocalizationTexts = {
    experiences: experiencesPT,
    projects: [],
    pages: {
        professional: {
            header: "Profissional",
            info:{
              title: "Fullstack Developer",
              region: "Fortaleza, CE, Brasil",
              stacks: [StacksTypes.DotNet, StacksTypes.ReactJs, StacksTypes.NodeJs, StacksTypes.SpringBoot, StacksTypes.Python]
            },
            experiences: "Experiências",
            label: "Dev",
            curriculum: "/archives/resume-henricky-br.pdf",
            curriculumTitle: "Currículo",
            curriculumSubtitle: "Fullstack",
            home: {
              eyebrow: "Portfolio profissional",
              title: "Desenvolvedor Fullstack focado em produtos web",
              intro: "Construo aplicações web com backend sólido, interfaces claras e atenção a arquitetura, performance e manutenção.",
              primaryAction: "Ver experiências",
              secondaryAction: "Baixar currículo",
              aboutTitle: "Sobre mim",
              aboutText: "Sou desenvolvedor com experiência em sistemas web, APIs REST, microsserviços e interfaces React. Gosto de transformar regras de negócio em soluções simples, testáveis e fáceis de evoluir.",
              skillsTitle: "Skills",
              expertiseTitle: "Expertises",
              metrics: [
                { value: "3+", label: "Anos em backend" },
                { value: "5+", label: "Stacks principais" },
                { value: "UFC", label: "Ciência da Computação" }
              ],
              skillGroups: [
                { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Styled Components"] },
                { title: "Backend", skills: ["Python", "Django", ".NET", "Java", "Spring Boot"] },
                { title: "Dados", skills: ["PostgreSQL", "SQL Server", "Modelagem", "APIs REST"] },
                { title: "Práticas", skills: ["Clean Architecture", "DDD", "Testes", "Scrum"] }
              ],
              expertises: [
                { title: "APIs e integrações", description: "Criação de serviços REST, regras de negócio e integrações entre sistemas." },
                { title: "Arquitetura backend", description: "Organização de camadas, domínio, persistência e testes automatizados." },
                { title: "Interfaces web", description: "Construção de telas responsivas com foco em clareza e uso recorrente." }
              ]
            }
        },
        scholar: {
            header: "Acadêmico",
            info:{
              title: "Bacharel em Ciência da Computação",
              region: "Fortaleza, CE, Brasil",
              stacks: [StacksTypes.CPP]
            },
            label: "Acadêmico"
        },
        gameDev: {
            header: "Desenvolvedor de Jogos",
            info:{
              title: "Desenvolvedor de Jogos",
              region: "Fortaleza, CE, Brasil",
              stacks: [ StacksTypes.CSharp, StacksTypes.Unity, StacksTypes.Blender, StacksTypes.CPP]
            },
            label: "GameDev"

        },
        projects: {
            header: "Projetos",
            label: "Projetos"
        },
        contact: {
            header: "Contato",
            label: "Contato",
            message:"Mensagem",
            name: "Seu Nome",
            send:"Enviar",
            yourEmail: "Seu Email",
            subject: "Assunto"
        }
    }
}


export const LocalizationEN: LocalizationTexts = {
  experiences: experiencesEN,
  projects: [],
  pages: {
    professional: {
      header: "Professional", // Header h1 page
      info:{
        title: "Fullstack Developer",
        region: "Fortaleza, CE, Brazil",
        stacks: [StacksTypes.DotNet, StacksTypes.ReactJs, StacksTypes.NodeJs, StacksTypes.SpringBoot, StacksTypes.Python]
      },
      experiences: "Experiences", // subtitle
      label: "Dev", // menu label
      curriculum: "/archives/resume_henricky_english.pdf",
      curriculumTitle: "Curriculum",
      curriculumSubtitle: "Fullstack",
      home: {
        eyebrow: "Professional portfolio",
        title: "Fullstack developer focused on web products",
        intro: "I build web applications with solid backend foundations, clear interfaces, and attention to architecture, performance, and maintainability.",
        primaryAction: "View experiences",
        secondaryAction: "Download resume",
        aboutTitle: "About me",
        aboutText: "I am a developer with experience in web systems, REST APIs, microservices, and React interfaces. I like turning business rules into simple, testable, and easy-to-evolve solutions.",
        skillsTitle: "Skills",
        expertiseTitle: "Expertise",
        metrics: [
          { value: "3+", label: "years in backend" },
          { value: "5+", label: "main stacks" },
          { value: "UFC", label: "Computer Science" }
        ],
        skillGroups: [
          { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Styled Components"] },
          { title: "Backend", skills: ["Python", "Django", ".NET", "Java", "Spring Boot"] },
          { title: "Data", skills: ["PostgreSQL", "SQL Server", "Modeling", "REST APIs"] },
          { title: "Practices", skills: ["Clean Architecture", "DDD", "Testing", "Scrum"] }
        ],
        expertises: [
          { title: "APIs and integrations", description: "REST services, business rules, and integrations between systems." },
          { title: "Backend architecture", description: "Layered organization, domain logic, persistence, and automated tests." },
          { title: "Web interfaces", description: "Responsive screens focused on clarity and recurring use." }
        ]
      }
    },
    scholar: {
      header: "Academic",
      info:{
        title: "Bachelor in Computer Science",
        region: "Fortaleza, CE, Brazil",
        stacks: [StacksTypes.CPP ]
      },
      label: "Academic"
    },
    gameDev: {
      header: "Game Developer",
      info:{
        title: "Game Developer",
        region: "Fortaleza, CE, Brazil",
        stacks: [ StacksTypes.CSharp, StacksTypes.Unity, StacksTypes.Blender, StacksTypes.CPP]
      },
      label: "GameDev"
    },
    projects: {
      header: "Projects",
      label: "Projects"
    },
    contact: {
      header: "Contact",
      label: "Contact",
      message:"Message",
      name: "Your Name",
      send:"Send",
      yourEmail: "Your Email",
      subject: "Subject"
    }
  }
}