

async function searchWikipedia(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  return json;
}

async function searchDefinition(input) {

  const inputValue = input;
  const searchQuery = inputValue.trim();
  try {
    const results = await searchWikipedia(searchQuery);

    if (results.query.searchinfo.totalhits === 0) {
      console.log('No results found.');
    }
    pageid = results.query.search[0].pageid;
    //console.log(pageid);

    const summary_url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageid}&origin=*`
    const summary_response = await fetch(summary_url);
    const summary_json = await summary_response.json();

    summary = summary_json.query.pages[pageid].extract;
    summary = summary.split('.');
    summary = summary[0] + '. ' + summary[1] + '.';

    console.log('Summary')
    console.log(summary);
    alert("SUMMARY:"+"\n"+summary)
    return summary;

  } catch (err) {
    console.log('Error');
    console.log(err);

    return '';
  }
}


async function searchPapers(input) {

  const inputValue = input;
  const searchQuery = inputValue.trim();
  try {

    // Cross-ref API
    // (https://www.crossref.org/documentation/retrieve-metadata/rest-api)

    const url = `https://api.crossref.org/works?query.bibliographic="${searchQuery}"&rows=5`
    const response = await fetch(url);
    const json = await response.json();

    //console.log(json);

    var links = []

    for (let i = 0; i < 5; i++) {
      link = json.message.items[i].URL;
      links.push(link);
    }

    console.log(links);

    return link;

  } catch (err) {
    console.log('Error');
    console.log(err);

    return '';
  }
}

//searchDefinition('Fourier Transform');
//searchPapers('SpotFi: Decimeter Level Localization Using WiFi');




async function searchVideos(input) {
 try{
  const inputValue = input;
  const searchQuery = inputValue.trim();
  const youtubeEndpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=5&key=AIzaSyDN8OtSuFAFELEIzp8o1Rsokm957WJV_NE`
  const response = await fetch(youtubeEndpoint);
  const json = await response.json();
  //console.log(json);
  var videosResults = []

  for (let i = 0; i < 5; i++) {
    videoTitle = json.items[i].snippet.title;
    videoId = json.items[i].id.videoId;
    videoURL = `https://www.youtube.com/watch?v=${videoId}`;
    videosResults.push(videoTitle);
  }

  console.log(videosResults);

  return videosResults;
 }
 catch(error){
  console.log('Error');
  console.log(err);

  return '';
 }
  

}
