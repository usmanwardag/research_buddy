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

// add an invisible bubble element to the top of the page using <div>
let bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'popup');
bubbleDOM.style.visibility = 'hidden';
document.body.appendChild(bubbleDOM);

const getSelectedText = () => window.getSelection().toString();

document.addEventListener(
	'mouseup',
	e => {
		if (getSelectedText().length > 0) {
			text = getSelectedText();
			searchDefinition(text).then(summary => {
				searchPapers(text).then(papers => {
					searchVideos(text).then(youtubeLink => {
						searchInGit(text).then(gitLink => {
							searchGoogleScholar(text).then(scholarLink => {
								searchCoursera(text).then(courseraLink => {
									searchUdemy(text).then(udemyLink => {
										console.log('calling showBubble');
										console.log(summary);
										let popupInfo = {
											wikiDefinition: summary[0],
											wikiURL: summary[1],
											papers: papers,
											youtubeLink: youtubeLink,
											gitLink: gitLink,
											scholarLink: scholarLink,
											courseraLink: courseraLink,
											udemyLink: udemyLink,
										};
										console.log('line 36');
										showBubble(e.clientX, e.clientY, popupInfo);
									});
								});
							});
						});
					});
				});
			});
		}
	},
	false
);

// hide the bubble when clicking on the screen
document.addEventListener(
	'click',
	e => {
		bubbleDOM.style.visibility = 'hidden';
	},
	false
);

function getHTML(popupInfo) {
	//wikiLength = Math.min(200, popupInfo.wikiDefinition.length);
	//console.log(wikiLength);
	//wikiDefinition = String(popupInfo.wikiDefinition).substring(0,wikiLength);
	wikiDefinition = popupInfo.wikiDefinition;
	papersLength = Math.min(5, popupInfo.papers.length);
	console.log(papersLength);

	/*p = document.createElement("p");
  	p.innerHTML = "DEFINITION:"+wikiDefinition;
  	bubbleDOM.body.appendChild(p);*/

	var html = `<html><body><p>${wikiDefinition} <a href=${popupInfo.wikiURL} target="_blank">Read more</a></p><p>Research Articles: `;
	for (let i = 0; i < papersLength; i++) {
		link = popupInfo.papers[i];
		html = html.concat(`<a href=${link} target="_blank">${i + 1} </a>`);
	}
	html = html.concat(`</p><a href=${popupInfo.youtubeLink} target="_blank"><img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" width="36" height="36"> </a>`);
	html = html.concat(`<a href=${popupInfo.gitLink} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="30" height="30"> </a>`);
	html = html.concat(`<a href=${popupInfo.udemyLink} target="_blank"><img src="https://cdn.iconscout.com/icon/free/png-256/udemy-3629125-3030265.png" width="32" height="32"> </a>`);
	html = html.concat(`<a href=${popupInfo.scholarLink} target="_blank"><img src="https://www.kindpng.com/picc/m/369-3690860_google-scholar-icon-google-scholar-logo-hd-png.png" width="36" height="36"> </a>`);
	html = html.concat(`<a href=${popupInfo.courseraLink} target="_blank"><img src="https://img.favpng.com/13/2/23/coursera-logo-computer-icons-image-clip-art-png-favpng-xssvncimfAGz1cfUbyFW0bXP3.jpg" width="36" height="36"> </a>`);
	html = html.concat(`</body></html>`);
	console.log(html);
	return html;
}

/**
 * This function returns the related Udemy search results
 * @param {string} mouseX X coordinate of the mouse pointer location
 * @param {string} mouseY Y coordinate of the mouse pointer location
 * @param {string} html The detail fetched to be displayed on screen
 * @returns {string} Displays the details fetched in a pop-up on screen
 */
function showBubble(mouseX, mouseY, popupInfo) {
	console.log('inside showBubble');
	console.log(popupInfo);
	html = getHTML(popupInfo);
	bubbleDOM.innerHTML = html;
	bubbleDOM.style.top = document.documentElement.scrollTop + mouseY + 'px';
	bubbleDOM.style.left = mouseX + 'px';
	bubbleDOM.style.visibility = 'visible';
}
