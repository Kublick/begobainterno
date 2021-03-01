module.exports = {
	siteMetadata: {
		title: "Psicologa Berenice Bastidas",
		description: `Entrenamiento para Psicologos incrementa tu numero de pacientes y duplica tus ingresos`,
		author: `@psicberenicebastidas`,
	},
	pathPrefix: "/interno",
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",

		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Psicologa Berenice Bastidas`,
				short_name: `Psicologa Berenice Bastidas`,
				start_url: `/interno`,
				display: `standalone`,
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-facebook-pixel`,
			options: {
				pixelId: "227610218315785",
			},
		},
	],
};
