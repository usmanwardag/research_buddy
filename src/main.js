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
			var values = searchDefinition (text);
			var wifkiDefinition =  values[0];
			var wikiURL = values[1];
			/*searchDefinition(text).then(summary => {
				showBubble(e.clientX, e.clientY, summary);
			});*/
			var papers = searchPapers(text);
			var youtubeLink = searchVideos(text);
			var gitLink = searchInGit(text);
			var scholarLink = searchGoogleScholar(text);
			var courseraLink = searchCoursera(text);
			var udemyLink = searchUdemy(text);
			showBubble(e.clientX, e.clientY, wifkiDefinition);
		}
	},
	false
);

// hide the bubble when clicking on the screen
document.addEventListener(
	'mousedown',
	e => {
		bubbleDOM.style.visibility = 'hidden';
	},
	false
);

/**
 * This function returns the related Udemy search results
 * @param {string} mouseX X coordinate of the mouse pointer location
 * @param {string} mouseY Y coordinate of the mouse pointer location
 * @param {string} html The detail fetched to be displayed on screen
 * @returns {string} Displays the details fetched in a pop-up on screen
 */
function showBubble(mouseX, mouseY, html) {
	bubbleDOM.innerHTML = html;
	bubbleDOM.style.top = document.documentElement.scrollTop + mouseY + 'px';
	bubbleDOM.style.left = mouseX + 'px';
	bubbleDOM.style.visibility = 'visible';
}
