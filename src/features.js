/**
* This function searches Wikipdia. 
* @param {string} any string. 
* @returns {string} json response. 
*/
async function searchWikipedia(searchQuery) {
	const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
	const response = await fetch(endpoint);
	if (!response.ok) {
		throw Error(response.statusText);
	}
	const json = await response.json();
	return json;
}

/**
 * 
 * This function searches for function's definition.
 * @param {string} input User selected word/phrase
 * @returns {string} Definition of input picked from Wikipedia
 */
async function searchDefinition(input) {
	const inputValue = input;
	const searchQuery = inputValue.trim();
	
	try {
		const results = await searchWikipedia(searchQuery);

		if (results.query.searchinfo.totalhits === 0) {
			console.log('No results found.');
		}
		pageid = results.query.search[0].pageid;
    pageurl = `https://en.wikipedia.org/?curid=${pageid}`
		console.log(pageid);
    console.log(pageurl);

		const summary_url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageid}&origin=*`;
		const summary_response = await fetch(summary_url);
		const summary_json = await summary_response.json();

		summary = summary_json.query.pages[pageid].extract;
		summary = summary.split('.');
		summary = summary[0] + '. ' + summary[1] + '.';

		console.log('Summary');
		console.log(summary);
		return summary, pageurl;

	} catch (err) {
		console.log('Error');
		console.log(err);

		return '';
	}
}

/**
 * This function returns the top 5 related Research Articles DOI
 * @param {string} input User selected word/phrase
 * @returns {string} Top 5 related Research articles DOI
 */
async function searchPapers(input) {
	const inputValue = input;
	const searchQuery = inputValue.trim();
	
	try {
		// Cross-ref API
		// (https://www.crossref.org/documentation/retrieve-metadata/rest-api)

		const url = `https://api.crossref.org/works?query.bibliographic="${searchQuery}"&rows=5`;
		const response = await fetch(url);
		const json = await response.json();

		var links = [];
		

		for (let i = 0; i < Math.min(5,json.message.items.length); i++) {

			link = json.message.items[i].URL;
			links.push(link);
		}

		console.log(links);

		return links;
	} catch (err) {
		console.log('Error');
		console.log(err);

		return '';
	}
}

//searchDefinition('Fourier Transform');
//searchPapers('SpotFi: Decimeter Level Localization Using WiFi');

/**
 * This function returns the Top 5 Youtube Videos
 * @param {string} input User selected word/phrase
 * @returns {string} Top 5 related Youtube Videos
 */
async function searchVideos(input) {
	try {
		const inputValue = input;
		const searchQuery = inputValue.trim();
	
    /**
		const youtubeEndpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=5&key=AIzaSyDN8OtSuFAFELEIzp8o1Rsokm957WJV_NE`;
		const response = await fetch(youtubeEndpoint);
		const json = await response.json();
		//console.log(json);
		var videosResults = [];

		for (let i = 0; i < 5; i++) {
			videoTitle = json.items[i].snippet.title;
			videoId = json.items[i].id.videoId;
			videoURL = `https://www.youtube.com/watch?v=${videoId}`;
			videosResults.push(videoTitle);
		}

		console.log(videosResults);
    **/

    youtubeLink = `https://www.youtube.com/results?search_query=${input}`
    console.log(youtubeLink);

		return youtubeLink;
	} catch (error) {
		console.log('Error' + err.message);
		console.log(err);

		return '';
	}
}

/**
 * This function returns the related Github search results
 * @param {string} input User selected word/phrase
 * @returns {string} Related Github search results
 */
async function searchInGit(input) {
	try {
		const inputValue = input;
		const searchQuery = inputValue.trim();
		const new_query= searchQuery.replace(" ", "+")
		const git_link = `https://github.com/search?q=${new_query}`;
		console.log(git_link);
		return git_link;
	} catch (error) {
		console.log('Error');
		console.log(err);

		return '';
	}
}

/**
 * This function returns the related GoogleScholar search results
 * @param {string} input User selected word/phrase
 * @returns {string} Related GoogleScholar search results
 */
async function searchGoogleScholar(input) {
	try {
		const inputValue = input;
		const searchQuery = inputValue.trim();
		const new_query= searchQuery.replace(" ", "+")
		const gs_link = `https://scholar.google.com/scholar?hl=en&as_sdt=0%2C34&q=${new_query}&btnG=`;
		console.log(gs_link);
		return gs_link;
	} catch (error) {
		console.log('Error');
		console.log(err);

		return '';
	}
}

/**
 * This function returns the related Coursera search results
 * @param {string} input User selected word/phrase
 * @returns {string} Related Coursera search results
 */
async function searchCoursera(input) {
	try {
		const inputValue = input;
		const searchQuery = inputValue.trim();
		const new_query= searchQuery.replace(" ", "+")
		const coursera_link = `https://www.coursera.org/search?query=${new_query}`;
		console.log(coursera_link);
		return coursera_link;
	} catch (error) {
		console.log('Error');
		console.log(err);

		return '';
	}
}

/**
 * This function returns the related Udemy search results
 * @param {string} input User selected word/phrase
 * @returns {string} Related Udemy search results
 */
async function searchUdemy(input) {
	try {
		const inputValue = input;
		const searchQuery = inputValue.trim();
		const new_query= searchQuery.replace(" ", "+")
		const udemy_link = `https://www.udemy.com/courses/search/?src=ukw&q=${new_query}`;
		console.log(udemy_link);
		return udemy_link;
	} catch (error) {
		console.log('Error');
		console.log(err);

		return '';
	}
}

