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
              region: "Brasil",
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
              title: "Mestrando em Computação",
              region: "Brasil",
              stacks: [StacksTypes.CPP]
            },
            label: "Acadêmico",
            content: {
              eyebrow: "Formação e pesquisa",
              title: "Formação em computação, pesquisa e desenvolvimento",
              intro: "Trajetória acadêmica entre física, computação e pesquisa de pós-graduação.",
              aboutTitle: "Perfil acadêmico",
              aboutText: "Bacharel em Ciência da Computação pela UFC Quixadá. Interesse em engenharia de software, computação gráfica, jogos e pesquisa em computação.",
              areasTitle: "Áreas de interesse",
              skillsTitle: "Competências",
              timelineTitle: "Trajetória acadêmica",
              materialsTitle: "Materiais",
              metrics: [
                { value: "USP-IME", label: "Mestrado em Computação" },
                { value: "2025.1", label: "Bacharelado concluído" },
                { value: "3", label: "Materiais disponíveis" },
                // { value: "C++", label: "Base em algoritmos" }
              ],
              areas: [
                { title: "Engenharia de software", description: "Arquitetura, requisitos, qualidade e manutenção de sistemas." },
                { title: "Computação gráfica", description: "Álgebra, transformações, renderização e fundamentos visuais." },
                { title: "Programação e algoritmos", description: "Estruturas de dados, lógica, C++ e resolução de problemas." }
              ],
              skills: ["C++", "Algoritmos", "Estruturas de Dados", "Computação Gráfica", "Álgebra Linear", "Pesquisa", "Escrita Técnica", "Didática"],
              timeline: [
                {
                  id: "education-usp-masters",
                  role: "Mestrado em Ciência da Computação",
                  company: "Instituto de Matemática e Estatística — Universidade de São Paulo (IME-USP)",
                  startDate: "Ago 2026",
                  endDate: null,
                  location: "São Paulo, SP, Brasil",
                  description:
                    "Ingresso no Programa de Pós-Graduação em Ciência da Computação, sob orientação da Profa. Dra. Leliane Nunes de Barros. Desenvolvimento de pesquisa na área de Computação.",
                  tags: ["Pesquisa", "Pós-graduação", "Computação"],
                  url: "",
                },
                {
                  id: "education-ufc-computer-science",
                  role: "Bacharelado em Ciência da Computação",
                  company: "Universidade Federal do Ceará — Campus Quixadá",
                  startDate: "Fev 2019",
                  endDate: "Ago 2025",
                  location: "Quixadá, CE, Brasil",
                  description:
                    "Graduação em Ciência da Computação com formação em algoritmos, engenharia de software, computação gráfica e desenvolvimento de software. Trabalho de Conclusão de Curso desenvolvido sob orientação da Profa. Dra. Maria Viviane de Menezes.",
                  tags: [
                    "Algoritmos",
                    "Engenharia de Software",
                    "Computação Gráfica",
                    "Estrutura de Dados",
                    "Planejamento", "IA"
                  ],
                  url: "",
                },
                {
                  id: "education-ufc-physics",
                  role: "Bacharelado em Física",
                  company: "Universidade Federal do Ceará — UFC",
                  startDate: "Mar 2016",
                  endDate: "Dez 2018",
                  location: "Fortaleza, CE, Brasil",
                  description: "Graduação interrompida. Início da graduação em Física, com formação em matemática e fundamentos das ciências exatas. Posteriormente, migrou para o curso de Ciência da Computação.",
                  tags: ["Física", "Matemática", "Álgebra Linear", "Cálculo", "Geometria Analítica", "Métodos Numéricos"],
                  url: "",
                }
              ],
              materials: [
                { title: "Monografia", subtitle: "UFC", date: "2025.1", src: "/img/tcc.png", url: "/archives/TCC_2025.pdf" },
                { title: "Resumo C++", subtitle: "Material - Slide", date: "2025", src: "/img/cpp-resumo.png", url: "/archives/Resumo_CPP.pdf" },
                { title: "Revisão de Álgebra", subtitle: "Computação Gráfica", date: "2024", src: "/img/cg-revisao.png", url: "/archives/CG-revisao_algebra.pdf" }
              ]
            }
        },
        gameDev: {
            header: "Desenvolvedor de Jogos",
            info:{
              title: "Desenvolvedor de Jogos",
              region: "Brasil",
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
        title: "Master's Student in Computing",
        region: "Fortaleza, CE, Brazil",
        stacks: [StacksTypes.CPP ]
      },
      label: "Academic",
      content: {
        eyebrow: "Education and research",
        title: "Education in computing, research, and development",
        intro: "Academic path across physics, computing, and graduate research.",
        aboutTitle: "Academic profile",
        aboutText: "Computer Science graduate from UFC Quixadá. Interests include software engineering, computer graphics, games, and computing research.",
        areasTitle: "Interest areas",
        skillsTitle: "Competencies",
        timelineTitle: "Academic journey",
        materialsTitle: "Materials",
        metrics: [
          { value: "USP-IME", label: "Master's in Computing" },
          { value: "2025.1", label: "Bachelor's completed" },
          { value: "3", label: "Available materials" },
          { value: "C++", label: "Algorithmic base" }
        ],
        areas: [
          { title: "Software engineering", description: "Architecture, requirements, quality, and system maintenance." },
          { title: "Computer graphics", description: "Algebra, transformations, rendering, and visual foundations." },
          { title: "Programming and algorithms", description: "Data structures, logic, C++, and problem solving." }
        ],
        skills: ["C++", "Algorithms", "Data Structures", "Computer Graphics", "Linear Algebra", "Research", "Technical Writing", "Teaching"],
        timeline: [
          {
            id: "education-usp-masters",
            role: "Master's Degree in Computer Science",
            company: "Institute of Mathematics and Statistics — University of São Paulo (IME-USP)",
            startDate: "Aug 2026",
            endDate: null,
            location: "São Paulo, SP, Brazil",
            description:
              "Admitted to the Graduate Program in Computer Science under the supervision of Prof. Dr. Leliane Nunes de Barros. Conducting research in the field of Computer Science.",
            tags: ["Research", "Graduate Studies", "Computer Science"],
            url: "",
          },
          {
            id: "education-ufc-computer-science",
            role: "Bachelor's Degree in Computer Science",
            company: "Federal University of Ceará — Quixadá Campus",
            startDate: "Feb 2019",
            endDate: "Aug 2025",
            location: "Quixadá, CE, Brazil",
            description:
              "Bachelor's degree in Computer Science with a strong foundation in algorithms, software engineering, computer graphics, and software development. Final undergraduate project completed under the supervision of Prof. Dr. Maria Viviane de Menezes.",
            tags: [
              "Algorithms",
              "Software Engineering",
              "Computer Graphics",
              "Data Structures",
              "Planning",
              "Artificial Intelligence",
            ],
            url: "",
          },
          {
            id: "education-ufc-physics",
            role: "Bachelor's Degree in Physics",
            company: "Federal University of Ceará (UFC)",
            startDate: "Mar 2016",
            endDate: "Dec 2018",
            location: "Fortaleza, CE, Brazil",
            description:
              "Undergraduate studies discontinued. Began a Bachelor's degree in Physics, building a strong foundation in mathematics and the physical sciences before transitioning to Computer Science.",
            tags: [
              "Physics",
              "Mathematics",
              "Linear Algebra",
              "Calculus",
              "Analytical Geometry",
              "Numerical Methods",
            ],
            url: "",
          },
        ],
        materials: [
          { title: "Thesis", subtitle: "UFC", date: "2025.1", src: "/img/tcc.png", url: "/archives/TCC_2025.pdf" },
          { title: "C++ Summary", subtitle: "Slides", date: "2025", src: "/img/cpp-resumo.png", url: "/archives/Resumo_CPP.pdf" },
          { title: "Algebra Review", subtitle: "Computer Graphics", date: "2024", src: "/img/cg-revisao.png", url: "/archives/CG-revisao_algebra.pdf" }
        ]
      }
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
