// Boolean answer regexp
var boolRegex = /^(?:y(?:es)?|n(?:o)?)$/i,
	boolFilter = function(value) {
		value = value.toLowerCase();
		if (value === 'y' || value === 'yes') return true;
		return false;
	};

module.exports = {

	url : {
		name : 'url',
		description : 'URL Omeka will be installed at (ex. example.org):',
		required : true,
		before : function(value) {
			value = value.replace(/\/+$/g, '');
			if (!/^http[s]?:\/\//.test(value)) {
				value = 'http://' + value;
			}
			return value;
		}
	},

	omekaVer : {
		name : 'omekaVer',
		description : 'Omeka Version:',
		required : true,
		advanced : true
	},

	tablePrefix : {
		name : 'tablePrefix',
		description : 'Table prefix:',
		required : true,
		default : 'omeka_'
	},

	dbHost : {
		name : 'dbHost',
		description : 'Database host:',
		required : true,
		default : 'localhost'
	},

	dbName : {
		name : 'dbName',
		description : 'Database name:',
		required : true
	},

	dbUser : {
		name : 'dbUser',
		description : 'Database user:',
		required : true
	},

	dbPass : {
		name : 'dbPass',
		description : 'Database password:',
		required : true
	},

	useGit : {
		name : 'useGit',
		description : 'Use Git?',
		default : 'N',
		pattern : boolRegex,
		before : boolFilter
	},

	submodule : {
		name : 'submodule',
		description : 'Would you like to install Omeka as a submodule?',
		default : 'N',
		pattern : boolRegex,
		before : boolFilter
	},

	customDirs : {
		name : 'customDirs',
		description : 'Would you like to install Omeka with the custom directory structure?',
		default : 'N',
		pattern : boolRegex,
		before : boolFilter
	},

	omekaDir : {
		name : 'omekaDir',
		description : 'Omeka install directory:',
		required : true,
		default : 'wordpress'
	},

	contentDir : {
		name : 'contentDir',
		description : 'Omeka content directory:',
		required : true,
		default : 'content'
	},

	ignoreOmekaCore : {
		name : 'ignoreOmekaCore',
		description : 'Add Omeka Core files to .gitignore?',
		default : 'N',
		required : true,
		pattern : boolRegex,
		before : boolFilter
	},

	theme : {
		name : 'theme',
		description : 'Install a custom theme?',
		default : 'Y',
		pattern : boolRegex,
		before : boolFilter
	},

	themeDir : {
		name : 'themeDir',
		description : 'Destination directory (ex. twentytwelve):',
		required : true
	},

	themeType : {
		name : 'themeType',
		description : 'Theme source type (git/tar):',
		required : true,
		pattern : /^(?:git|tar)$/,
		default : 'git',
	},

	themeGitUser : {
		name : 'user',
		description : 'GitHub username:',
		required : true,
		default : 'wesleytodd'
	},

	themeGitRepo : {
		name : 'repo',
		description : 'GitHub repository name:',
		required : true,
		default : 'YeoPress'
	},

	themeGitBranch : {
		name : 'branch',
		description : 'Repository branch:',
		required : true,
		default : 'template'
	},

	themeTarUrl : {
		name : 'tarballUrl',
		description : 'Remote tarball url (ex. https://github.com/user/repo/tarball/master):',
		required : true
	},

	useVagrant : {
		name : 'useVagrant',
		description : 'Use Vagrant?',
		required : true,
		advanced : true,
		default : 'N',
		pattern : boolRegex,
		before : boolFilter
	},

	correct : {
		name : 'correct',
		description : 'Does everything look correct?',
		default : 'Y',
		pattern : boolRegex,
		before : boolFilter
	}

};
