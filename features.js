

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

  const inputValue = 'Fourier Transform';
  const searchQuery = inputValue.trim();
  console.log('Trying search')
  try {
    const results = await searchWikipedia(searchQuery);

    console.log(results.query.searchinfo.totalhits);

    if (results.query.searchinfo.totalhits === 0) {
      console.log('No results found.');
    }

    console.log(results.query.search[0].pageid);

  } catch (err) {
    console.log(err);
  }
}


console.log('Hey world')
search()



