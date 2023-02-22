/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
	},
	externals: {
		"supports-color": "supports-color",
	},
};

module.exports = nextConfig;
