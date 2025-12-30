import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#111827',
				accent: '#ec4899',
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					xl: '1280px',
				},
			},
		},
	},
	plugins: [],
};

export default config;
