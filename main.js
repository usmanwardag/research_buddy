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
			searchDefinition(text).then(summary => {
				showBubble(e.clientX, e.clientY, summary);
			});
			searchPapers(text);
			searchVideos(text);
			searchInGit(text);
			googleScholarSearch(text);
			courseraSearch(text);
			udemySearch(text);
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

// 
/**
 * move the bubble to cursor location and make it visible
*/
function showBubble(mouseX, mouseY, html) {
	bubbleDOM.innerHTML = html;
	bubbleDOM.style.top = document.documentElement.scrollTop + mouseY + 'px';
	bubbleDOM.style.left = mouseX + 'px';
	bubbleDOM.style.visibility = 'visible';
}
