export type Locale = 'es' | 'en';

export type Profile = {
	meta: { title: string; description: string };
	nav: {
		about: string;
		experience: string;
		education: string;
		skills: string;
		projects: string;
		contact: string;
	};
	hero: {
		role: string;
		tagline: string;
		location: string;
		summary: string;
		ctaContact: string;
		ctaWork: string;
	};
	footer: {
		title: string;
		blurb: string;
		ctaHello: string;
	};
	contact: { email: string; phone: string; linkedInLabel: string; githubLabel: string };
	experience: Array<{
		title: string;
		company: string;
		period: string;
		mode?: string;
		bullets: string[];
	}>;
	education: {
		degree: string;
		institution: string;
		date: string;
		honor: string;
	};
	skills: { category: string; items: string }[];
	languages: string;
	projects: { title: string; body: string };
};

const profiles: Record<Locale, Profile> = {
	es: {
		meta: {
			title: 'Gabriel Gamez — Desarrollador Full Stack',
			description:
				'Portafolio de Gabriel Jose Gamez Ramirez: Full Stack (SQL, Ruby on Rails, React), BI y productos EdTech.',
		},
		nav: {
			about: 'Sobre mí',
			experience: 'Experiencia',
			education: 'Educación',
			skills: 'Stack',
			projects: 'Proyectos',
			contact: 'Contacto',
		},
		hero: {
			role: 'Desarrollador Full Stack',
			tagline: 'SQL · Ruby on Rails · React',
			location: 'Ocumare del Tuy, Miranda, Venezuela',
			summary:
				'Desarrollador full-stack en transición hacia el ecosistema de datos, con experiencia en soluciones escalables en Ruby on Rails y React. Uso SQL para inteligencia de negocios, consultas analíticas y KPIs en tiempo real, y automatización de reportes. T.S.U. en Informática (graduado con honores), con trayectoria en productos EdTech y coordinación de equipos técnicos.',
			ctaContact: 'Contacto',
			ctaWork: 'Ver experiencia',
		},
		footer: {
			title: 'Hablemos',
			blurb: 'Si tienes un proyecto, producto o rol en mente, me encantaría conocerlo.',
			ctaHello: 'Enviar correo',
		},
		contact: {
			email: 'gabrielgamezdev@gmail.com',
			phone: '+58 424-131-6678',
			linkedInLabel: 'LinkedIn',
			githubLabel: 'GitHub',
		},
		experience: [
			{
				title: 'Desarrollador Full Stack',
				company: 'Akdemia',
				period: 'Marzo 2024 – Actualidad',
				mode: 'Híbrido',
				bullets: [
					'Desarrollo end-to-end: ciclo de vida completo, desde esquemas SQL hasta UI con Ruby on Rails, Haml y SCSS.',
					'Business Intelligence: consultas SQL analíticas para métricas de uso y registros en tiempo real.',
					'Eficiencia operativa: automatización de reportes internos e incidencias con scripts en Ruby.',
					'Metodología ágil: flujos basados en tickets, entregas en sprints y control de versiones con Git.',
				],
			},
			{
				title: 'Desarrollador Frontend',
				company: 'Prolesys Consultores C.A.',
				period: 'Marzo 2023 – Febrero 2024',
				bullets: [
					'Coordinación técnica del equipo frontend en proyectos críticos y entregas bajo cronograma.',
					'Arquitectura de UI con Material UI (MUI) y UX consistente en proyectos corporativos.',
					'Componentes reutilizables y optimización en JavaScript para carga y mantenibilidad.',
					'Apoyo técnico para bloqueos y alineación con gerencia.',
				],
			},
			{
				title: 'Pasante de desarrollo de software',
				company: 'Eje Sanitario N°2 "Valles del Tuy"',
				period: 'Marzo 2021 – Junio 2021',
				bullets: [
					'Sistema de gestión de personal en PHP y MySQL; gran mejora de eficiencia frente a procesos manuales.',
					'Arquitectura RBAC para protección de datos sensibles.',
					'Despliegue en intranet local con accesos seguros para personal administrativo.',
				],
			},
		],
		education: {
			degree: 'Técnico Superior Universitario (T.S.U.) en Informática',
			institution: 'Instituto Universitario de Tecnología Tomás Lander (IUTTOL)',
			date: 'Julio 2022',
			honor: 'Mención honorífica por trabajo especial de grado.',
		},
		skills: [
			{ category: 'Datos y bases de datos', items: 'SQL, PostgreSQL, MySQL, modelado de datos.' },
			{ category: 'Lenguajes y frameworks', items: 'Ruby on Rails, React.js, JavaScript ES6+, PHP, Python.' },
			{ category: 'Herramientas', items: 'Git, Docker, GNU/Linux, Jira, Linear.' },
			{ category: 'Metodologías', items: 'Agile, Scrum, Kanban, análisis y diseño de sistemas.' },
		],
		languages: 'Español (nativo), inglés (competencia técnica / aprendizaje continuo).',
		projects: {
			title: 'Proyectos destacados',
			body: 'Pronto añadiré aquí los proyectos que quiero mostrar. Esta es la primera iteración del portafolio.',
		},
	},
	en: {
		meta: {
			title: 'Gabriel Gamez — Full Stack Developer',
			description:
				'Portfolio of Gabriel Jose Gamez Ramirez: Full Stack (SQL, Ruby on Rails, React), BI and EdTech products.',
		},
		nav: {
			about: 'About',
			experience: 'Experience',
			education: 'Education',
			skills: 'Stack',
			projects: 'Projects',
			contact: 'Contact',
		},
		hero: {
			role: 'Full Stack Developer',
			tagline: 'SQL · Ruby on Rails · React',
			location: 'Ocumare del Tuy, Miranda, Venezuela',
			summary:
				'Full-stack developer transitioning into the data ecosystem, with experience building scalable solutions in Ruby on Rails and React. I use SQL for business intelligence, analytical queries and real-time KPIs, and reporting automation. Associate Degree in Computer Science (graduated with honors), with a background in EdTech products and technical team coordination.',
			ctaContact: 'Contact',
			ctaWork: 'View experience',
		},
		footer: {
			title: "Let's talk",
			blurb: "If you have a project, product, or role in mind, I'd love to hear from you.",
			ctaHello: 'Send email',
		},
		contact: {
			email: 'gabrielgamezdev@gmail.com',
			phone: '+58 424-131-6678',
			linkedInLabel: 'LinkedIn',
			githubLabel: 'GitHub',
		},
		experience: [
			{
				title: 'Full Stack Developer',
				company: 'Akdemia',
				period: 'March 2024 – Present',
				mode: 'Hybrid',
				bullets: [
					'End-to-end development: full SDLC for EdTech, from PostgreSQL schema design to Rails, Haml, and SCSS frontends.',
					'Business Intelligence: analytical SQL for real-time adoption and business metrics.',
					'Operational efficiency: Ruby scripts for internal reporting automation and incident resolution.',
					'Agile delivery: ticket-based workflows, sprint cadence, and Git version control.',
				],
			},
			{
				title: 'Frontend Developer',
				company: 'Prolesys Consultores C.A.',
				period: 'March 2023 – February 2024',
				bullets: [
					'Technical coordination of the frontend team on critical projects with on-schedule delivery.',
					'UI architecture with Material UI (MUI) and consistent UX across corporate projects.',
					'Reusable components and JavaScript optimizations for load speed and maintainability.',
					'Technical support for blockers and alignment with stakeholders.',
				],
			},
			{
				title: 'Software Developer Intern',
				company: 'Eje Sanitario N°2 "Valles del Tuy"',
				period: 'March 2021 – June 2021',
				bullets: [
					'Personnel management system in PHP and MySQL with a large gain in efficiency over manual processes.',
					'RBAC architecture to protect sensitive employee data.',
					'Local intranet deployment with secure access for administrative staff.',
				],
			},
		],
		education: {
			degree: 'Associate Degree in Computer Science',
			institution: 'Instituto Universitario de Tecnología Tomás Lander (IUTTOL)',
			date: 'July 2022',
			honor: 'Graduated with Honors for the degree project (highest distinction).',
		},
		skills: [
			{ category: 'Data & databases', items: 'SQL, PostgreSQL, MySQL, data modeling.' },
			{ category: 'Languages & frameworks', items: 'Ruby on Rails, React.js, JavaScript ES6+, PHP, Python.' },
			{ category: 'Tools & infrastructure', items: 'Git, Docker, GNU/Linux, Jira, Linear.' },
			{ category: 'Methodologies', items: 'Agile, Scrum, Kanban, systems analysis & design.' },
		],
		languages: 'Spanish (native), English (technical proficiency / continuous learning).',
		projects: {
			title: 'Featured projects',
			body: 'I will add the projects I want to showcase here soon. This is the first iteration of the portfolio.',
		},
	},
};

export function getProfile(locale: string | undefined): Profile {
	const key = locale === 'en' ? 'en' : 'es';
	return profiles[key];
}

export const LINKEDIN_URL = 'https://www.linkedin.com/in/gabrieljgamezr';
export const GITHUB_URL = 'https://github.com/gabrielgamezdev';
