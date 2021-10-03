/*MIT License

* Copyright (c) 2021 Research Buddy

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.*/

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
