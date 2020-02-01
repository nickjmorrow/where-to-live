import moduleAlias from 'module-alias';
const { readdirSync } = require('fs');

const getDirectories = (source: string): string[] =>
	readdirSync(source, { withFileTypes: true })
		.filter((dirent: any) => dirent.isDirectory())
		.map((dirent: any) => dirent.name);

const aliases = getDirectories('./src').reduce((agg, cur) => {
	agg[cur] = `${cur}`;
	return agg;
}, {} as any);

console.log(aliases);
moduleAlias.addAliases(aliases);
