import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"
import process from "node:process"

const mainlineVersion = process.env.MAINLINE
verifyMainlineVersion(mainlineVersion)

const sourceDirectory = "src"
const destinationDirectory = `dist/${mainlineVersion}`

const filenames = await readdir(sourceDirectory)
const reservedFilenames = ["biome.json", "package.json"]

await mkdir(destinationDirectory, { recursive: true })
await Promise.all(filenames.map(buildFile))

async function buildFile(filename) {
	const destinationFilename = filename.slice(0, -1) // Convert `.jsonc` to `.json`.

	if (reservedFilenames.includes(destinationFilename)) {
		throw new Error(`${filename}: Reserved filename.`)
	}

	const sourcePath = `${sourceDirectory}/${filename}`
	const destinationPath = `${destinationDirectory}/${destinationFilename}`

	try {
		const content = await readFile(sourcePath, "utf8")
		const jsonContent = removeJsonLineComments(content)

		// Discard the `$schema` field to maintain forwards compatibility with newer patch releases of Biome.
		const { $schema, ...fieldsToKeep } = JSON.parse(jsonContent)
		verifyJsonSchemaUrl($schema)

		const minifiedOutput = JSON.stringify(fieldsToKeep)
		await writeFile(destinationPath, minifiedOutput, "utf8")
	} catch (error) {
		throw new Error(`${filename}: ${error.message}.`, { cause: error })
	}
}

function removeJsonLineComments(jsoncContent) {
	return jsoncContent.replace(/(?<=["}\]0-9e],?\s|\t)\/\/.*$/gm, "")
}

function verifyMainlineVersion(version) {
	if (!version) {
		throw new Error("Expected the 'MAINLINE' environment variable to be set")
	}
	// language=jsregexp
	if (!version.match("^\\d+\\.\\d+$")) {
		throw new Error(
			`Expected the 'MAINLINE' environment variable to be a SemVer <major>.<minor> version number, but got '${version}'`,
		)
	}
}

function verifyJsonSchemaUrl(schemaUrl) {
	if (typeof schemaUrl !== "string") {
		throw new Error("Expected the '$schema' field to be a string")
	}
	if (
		!schemaUrl.match(
			// language=jsregexp
			`^https://biomejs\\.dev/schemas/${mainlineVersion}\\.\\d+/schema\\.json$`,
		)
	) {
		throw new Error(
			`Expected the '$schema' field to match the 'MAINLINE' environment variable '${mainlineVersion}', but got '${schemaUrl}'`,
		)
	}
}
