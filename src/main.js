// add an invisible bubble element to the top of the page using <div>
let bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'popup');
bubbleDOM.style.visibility = 'hidden';
document.body.appendChild(bubbleDOM);

const getSelectedText = () => window.getSelection().toString();

document.addEventListener(
	'click',
	e => {
		if (getSelectedText().length > 0) {
			text = getSelectedText();
			/*var values = searchDefinition (text);
			var wifkiDefinition =  values[0];
			var wikiURL = values[1];*/
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
											youtubeLink : youtubeLink,
											gitLink : gitLink,
											scholarLink : scholarLink,
											courseraLink: courseraLink,
											udemyLink : udemyLink
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
			/*var papers = searchPapers(text);
			var youtubeLink = searchVideos(text);
			var gitLink = searchInGit(text);
			var scholarLink = searchGoogleScholar(text);
			var courseraLink = searchCoursera(text);
			var udemyLink = searchUdemy(text);
			showBubble(e.clientX, e.clientY, wifkiDefinition);*/
		}
	},
	false
);

// hide the bubble when clicking on the screen
/*document.addEventListener(
	'mousedown',
	e => {
		bubbleDOM.style.visibility = 'hidden';
	},
	false
);*/

function getHTML(popupInfo){
	wikiLength = Math.min(200, popupInfo.wikiDefinition.length);
	console.log(wikiLength);
	wikiDefinition = String(popupInfo.wikiDefinition).substring(0,wikiLength);
	papersLength = Math.min(5, popupInfo.papers.length);
	console.log(papersLength);
	
	/*p = document.createElement("p");
  	p.innerHTML = "DEFINITION:"+wikiDefinition;
  	bubbleDOM.body.appendChild(p);*/

	var html = `<html><body><p>${wikiDefinition}</p><a href=${popupInfo.wikiURL}>Read more</a><br><p>Papers: `;
	for (let i = 0; i < papersLength; i++) {
		link = popupInfo.papers[i];
		html= html.concat(`<a href=${link}>${i+1} </a>`)
	}
	html = html.concat(`</p><a href=${popupInfo.youtubeLink} >YouTube </a>`);
	html = html.concat(`<a href=${popupInfo.gitLink} >GitHub </a>`);
	html = html.concat(`<a href=${popupInfo.udemyLink} >Udemy </a>`);
	html = html.concat(`<a href=${popupInfo.scholarLink} >Google Scholar </a>`);
	html = html.concat(`<a href=${popupInfo.courseraLink} >Coursera</a>`);
	html = html.concat(`</body></html>`)
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
