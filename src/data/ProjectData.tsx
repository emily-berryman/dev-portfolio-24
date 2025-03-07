interface contactLinks {
	linkText: string;
	href: string;
	ariaLabel?: string;
	target: string;
	rel?: string;
}
export const contactLinks = [
	{
		linkText: "Email",
		href: "mailto:emilyrberryman@gmail.com",
		ariaLabel: "Contact email address",
		target: "_blank",
	},
	{
		linkText: "LinkedIn",
		href: "https://www.linkedin.com/in/emily-b-9a6a651a8/",
		ariaLabel: "LinkedIn Profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		linkText: "GitHub",
		href: "https://github.com/emily-berryman",
		ariaLabel: "GitHub Profile",
		target: "_blank",
		rel: "noopener noreferrer",
	},
];

export const projectOverviewData = [
	{
		id: 1,
		title: "Ka Ora Ka Ako",
		description:
			"Co-developed a Laravel/React web app to facilitate healthy lunches in schools across Aotearoa/New Zealand.",
		url: "/project/ka-ora-ka-ako",
		images: [
			{
				src: "/koka-recipe-page.png",
				alt: "",
				width: 1792,
				height: 1365,
			},
			{
				src: "/featured-recipes-section.png",
				alt: "",
				width: 1792,
				height: 1344,
			},
			{
				src: "/nutrition-standards-page.png",
				alt: "",
				width: 896,
				height: 672,
			},
		],
	},
	{
		id: 2,
		title: "NCEA",
		description:
			"Contributed to the re-build of NCEA - a home for resources and guidance on The New Zealand Curriculum for secondary school teachers.",
		url: "/project/ncea",
		images: [
			{
				src: "/ncea-subject-glossary-page.png",
				alt: "",
				width: 1152,
				height: 856,
			},
			{
				src: "/ncea-mobile-menu.png",
				alt: "",
				width: 1019,
				height: 762,
			},
			{
				src: "/ncea-assessment-activity.png",
				alt: "",
				width: 1792,
				height: 1344,
			},
		],
	},
];

interface ProjectFunction {
	function: string;
	description: string;
}

interface Lesson {
	title: string;
	description: string;
}

interface projectCaseStudyData {
	id: number;
	projectTitle: string;
	projectOverviewSectfion: Array<ProjectOverview>;
	projectPurpose: Array<string>;
	projectPurposeImage?: Array<Image>;
	lessonsLearnedImage: Array<Image>;
	projectFunctionality: Array<ProjectFunction>;
	lessonsLearned: Array<Lesson>;
}
interface Image {
	imgSrc: string;
	alt?: string;
}

interface ProjectOverview extends Image {
	projectSummary: Array<string>;
	techStack: Array<string>;
	siteUrls: string;
}

export const projectCaseStudyData = [
	{
		id: 1,
		projectTitle: "Ka ora Ka ako - Healthy Lunches in Schools",
		projectURL: "ka-ora-ka-ako",
		projectOverviewSection: [
			{
				imgSrc: "/koka-recipe.png",
				alt: "",
				width: 2017,
				height: 1344,
				projectSummary: [
					"Ka ora Ka ako is a custom React and Laravel web app built for NZ’s Ministry of Education.",
					"I worked with two other devs to develop this app from scratch, building both a public-facing site and a secure content management system.",
				],
				techStack: [
					"Laravel",
					"React",
					"HTML5",
					"CSS",
					"Sass",
					"JavaScript",
					"PHP",
					"Docker",
					"Algolia",
				],
				siteURL: "https://kaorakaako.education.govt.nz",
			},
		],
		projectPurpose: [
			"The KOKA app aimed to simplify nutrition standards while also helping suppliers and kitchens streamline the process of planning and creating meals. It enabled kitchens to effectively develop, share, and scale recipes that met these standards, while also allowing nutritionists the ability to review and provide feedback on these menus.",
			"Rather than a one-size-fits-all approach, the app gave suppliers and kitchens the flexibility to create their own recipes or choose from a curated recipe library.",
		],
		projectPurposeImage: [
			{
				imageSrc: "/koka-circle-detail.png",
				alt: "",
				width: 481,
				height: 416,
			},
		],
		projectFunctionality: [
			{
				function: "Recipe Management",
				description:
					"a content management system that allows users to create, edit, update, and delete recipes or select from existing ones.",
			},
			{
				function: "Programme News + Updates",
				description:
					"the ability for users to create, edit, update, and delete news and updates.",
			},
			{
				function: "User Management + Roles",
				description:
					"a user system where new users can be created and assigned specific roles with defined permissions. For example, a Kitchen Admin can create, edit, and submit recipes for review, while a Kitchen Staff Member can only view approved recipes.",
			},
			{
				function: "Search",
				description:
					"multiple search indices, including a recipe search, ingredient lookup (with associated details) and the ability to search for content related to the programme, updates, and news.",
			},
			{
				function: "Public-Facing Site",
				description:
					"a browsable library of recipes, along with educational content on nutrition standards and their implementation.",
			},
		],
		lessonsLearned: [
			{
				title: "",
				description:
					"I learnt so much through this project - far more than I can list here! Working in a small dev team, I played a key role in building all of the core functionality mentioned above. Some of the most valuable areas of learning included designing database structures, applying the MVC pattern to structure our app and deepening my knowledge in React by building a well-componentized front-end. I particularly enjoyed working with Laravel and its Eloquent ORM, which simplified the process of defining database models, establishing relationships and querying data.",
			},
			{
				title: "Recipe Library Search",
				description:
					"One of my key contributions was building the recipe library search, a feature I built from backend logic to frontend implementation. I indexed recipe data using Algolia’s search API with Laravel Scout which creates an index per model, but I needed to make fields from related models searchable too. To solve this, I created a custom searchable array in the Recipe model, extracting and restructuring relevant data before integrating it into the search index. This pattern was then extended to other search indices across the site, enabling a consistent and scalable search implementation.",
			},
			{
				title: "Consistent Code Practices",
				description:
					"A big lesson I took away was the importance of consistent code structure, especially as a project scales. Early on, I noticed inconsistencies in how formatting, structure, and best practices were being applied, leading to extra time spent during PR reviews.To address this, I researched, implemented, and documented a semi-automated linting and formatting solution to support consistent practices. I also created README guidelines for controller patterns and collaborated with colleagues to integrate linting checks into our GitHub Actions workflow. This ensured that developers were alerted to issues before opening a PR, significantly reducing back-and-forth in reviews.",
			},
		],
		lessonsLearnedImg: [
			{
				imageSrc: "/recipe-library-page.png",
				alt: "",
				width: 2124,
				height: 1416,
			},
		],
	},
	{
		id: 2,
		projectTitle: "NCEA - National Certificate of Educational Achievement",
		projectURL: "ncea",
		projectOverviewSection: [
			{
				imgSrc: "/ncea-homepage.png",
				width: 2017,
				height: 1344,
				alt: "",
				projectSummary: [
					"This project focused on rebuilding NCEA, a government website offering resources, updates and tools to help secondary teachers and schools prepare students for national qualification standards. ",
				],
				techStack: [
					"Drupal",
					"Vue",
					"HTML5",
					"CSS",
					"Sass",
					"JavaScript",
					"PHP",
					"Docker",
					"Algolia",
				],
				siteURL: "https://ncea.education.govt.nz",
			},
		],
		projectPurpose: [
			"The NCEA website rebuild aimed to enhance usability for secondary school teachers and leaders by making information and resources easier to find.",
			"Features were designed with Drupal’s user workflow management in mind to support the site's need for frequent content updates.",
		],
		projectPurposeImage: [
			{
				imageSrc: "/teacher-student-detail.png",
				alt: "",
				width: 800,
				height: 403,
			},
		],
		projectFunctionality: [
			{
				function: "Content Taxonomies",
				description:
					"redesigned taxonomy structures to improve content relationships",
			},
			{
				function: "Site-wide Translation",
				description:
					"enabled multilingual content with a toggle for users to switch languages.",
			},
			{
				function: "Downloadable Resources",
				description: "allowed users to download content in multiple formats.",
			},
			{
				function: "Search",
				description:
					"enhanced search functionality, enabling users to search and filter by resource type, learning area, and curriculum.",
			},
			{
				function: "Subject Glossary",
				description:
					"a tool for teachers to view and compare key assessment terms within and across learning areas.",
			},
		],
		lessonsLearned: [
			{
				title: "",
				description:
					"I joined partway through the rebuild, and was mentored by two senior developers who played an important role in honing my dev skills post graduation from Dev Academy. Their guidance helped me deepen my understanding of clean code practices, accessibility-focused development, testing, responsive design, and collaborative coding approaches.",
			},
			{
				title: "Subject Glossary",
				description:
					"Building the initial iteration of the subject glossary was one of my first key responsibilities. I created a content glossary taxonomy within Drupal, which was then pre-processed to integrate with Algolia’s search API. This allowed users to filter and search for terms, while also viewing how those terms were used across different subject areas. There were several complex factors and logic considerations to make this functionality work seamlessly. I was also responsible for this feature end-to-end, developing a responsive and accessible front end with Vue.js for a smooth user experience.",
			},
			{
				title: "Accessibility Focused Development",
				description:
					"I also co-led an accessibility audit of the existing site content and structure. My colleague and I collaborated with the wider web team to research and implement a framework that would help developers, designers, and web advisors consistently follow accessibility best practices. As a result of this process, accessibility knowledge across the team grew significantly, allowing us to address existing issues and establish a clear approach to prevent future challenges.",
			},
		],
		lessonsLearnedImg: [
			{
				imageSrc: "/english-glossary-page.png",
				alt: "",
				width: 2017,
				height: 1344,
			},
		],
	},
];
