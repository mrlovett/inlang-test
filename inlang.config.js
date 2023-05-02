export async function defineConfig(env) {
	const { pluginJson } = await env.$import(
		"https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@1/dist/index.js",
	)

	return {
		referenceLanguage: "en",
		plugins: [
			pluginJson({
				pathPattern: "translations/{language}.json",
			}),
		],
	}
}
