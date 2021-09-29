

async function searchWikipedia(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  return json;
}

async function search(input) {

  const inputValue = input;
  const searchQuery = inputValue.trim();
  try {
    const results = await searchWikipedia(searchQuery);

    if (results.query.searchinfo.totalhits === 0) {
      console.log('No results found.');
    }
    pageid = results.query.search[0].pageid;
    console.log(pageid);

    const summary_url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageid}&origin=*`
    const summary_response = await fetch(summary_url);
    const summary_json = await summary_response.json();

    summary = summary_json.query.pages[pageid].extract;
    summary = summary.split('.');
    summary = summary[0] + '. ' + summary[1] + '.';

    console.log('Summary')
    console.log(summary);

    return summary;

  } catch (err) {
    console.log('Error');
    console.log(err);

    return '';
  }
}


search('Quantum Mechanics')



