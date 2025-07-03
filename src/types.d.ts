// Secciones superiores
export interface i18nWebsite {
	language: string;
	title: string;
	description: string;
	keywords: string;
	author: string;
	sections: Sections;
}

interface Sections {
	header: HeaderSection;
	hero: HeroSection;
	services: ServicesSection;
	experiences: ExperiencesSection;
	gallery: GallerySection;
	projects: ProjectsSection;
	faq: FAQSection;
	contact: ContactSection;
	footer: FooterSection;
	notFound: NotFoundSection;
}

// Componentes reutilizables
interface FormField {
	label: string;
	placeholder?: string;
}

interface TextImageBlock {
	title: string;
	description: string;
}

interface NavLink {
	text: string;
	href: string;
}

interface SocialLink {
	icon: string;
	href: string;
}

// Secciones individuales
export interface HeaderSection {
	navLinks: string[];
}

export interface HeroSection {
	id: string;
	title: string;
	description: string;
	button: string;
}

export interface ServicesSection {
	id: string;
	title: string;
	description: string;
	more: string;
	services: TextImageBlock[];
}

export interface ExperiencesSection {
	id: string;
	title: string;
	description: string;
	experiences: {
		title: string;
		items: string[];
	}[];
}

export interface GallerySection {
	id: string;
	title: string;
	subtitle: string;
	images: {
		image: string;
		title: string;
		description: string;
	}[];
}

export interface ProjectsSection {
	id: string;
	title: string;
	projects: {
		title: string;
		image: string;
		alt: string;
		description: string;
	}[];
	soon: string;
}

export interface FAQSection {
	id: string;
	title: string;
	faqs: {
		question: string;
		answer: string;
	}[];
}

export interface ContactSection {
	id: string;
	title: string;
	description: string;
	form: ContactForm;
}

interface ContactForm {
	name: FormField;
	email: FormField;
	phone: FormField;
	message: FormField;
	submit: FormField;
	validation: {
		required: string;
		success: string;
		error: string;
		sending: string;
	};
}

export interface FooterSection {
	id: string;
	sectionTitles: {
		navigation: string;
		social: string;
		credits: string;
	};
	navigation: NavLink[];
	socialLinks: SocialLink[];
	credits: {
		text: string;
		year: number;
		tagline: string;
		copyright: string;
	};
}

export interface NotFoundSection {
	id: string;
	title: string;
	subtitle: string;
	message: string;
	button: string;
}
