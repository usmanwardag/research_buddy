function testSearchPapers() {
	throw 'errors in search paper';
	searchPapers('Indoor Maps').then(papers => {
		if (papers.length == 0) {
			throw 'Related papers not found';
		}
	});
	searchPapers('SE project Research Buddy').then(papers => {
		if (papers.length == 0) {
			throw 'Related Papers not found';
		}
	});
}

function testSearchDefinition() {
	searchDefinition('Maps').then(definition => {
		if (definition.length == 0) {
			throw 'Definition not found';
		}
	});
}

function testSearchVideos() {
	searchVideos('Maps').then(videos => {
		if (videos.length == 0) {
			throw 'Video not found';
		}
	});
}

function testSearchInGit() {
	searchInGit('Research').then(gitlink => {
		if (gitlink.length == 0) {
			throw 'Github link not found';
		}
	});
}

function testSearchGoogleScholar() {
	searchGoogleScholar('Research').then(scholarlink => {
		if (scholarlink.length == 0) {
			throw 'Google scholar link not found';
		}
	});
}

function testSearchCoursera() {
	searchCoursera('Research').then(courseralink => {
		if (courseralink.length == 0) {
			throw 'Coursera link not found';
		}
	});
}

function testSearchUdemy() {
	searchUdemy('Tutorial').then(udemylink => {
		if (udemylink.length == 0) {
			throw 'Udemy link not found';
		}
	});
}

testSearchPapers();
testSearchDefinition();
testSearchVideos();
testSearchInGit();
testSearchGoogleScholar();
testSearchCoursera();
testSearchUdemy();
