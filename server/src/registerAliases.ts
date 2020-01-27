import moduleAlias from 'module-alias';
const { readdirSync } = require('fs');

const getDirectories = (source: string): string[] =>
	readdirSync(source, { withFileTypes: true })
		.filter((dirent: any) => dirent.isDirectory())
		.map((dirent: any) => dirent.name);

console.log(getDirectories('./src'));
moduleAlias.addAliases(
	getDirectories('./src').reduce((agg, cur) => {
		agg[cur] = `../${cur}`;
		return agg;
	}, {} as any),
);
