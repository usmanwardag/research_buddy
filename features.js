

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

  const inputValue = 'WiFi';
  const searchQuery = inputValue.trim();
  try {
    const results = await searchWikipedia(searchQuery);

    //console.log(results.query.searchinfo.totalhits);

    if (results.query.searchinfo.totalhits === 0) {
      console.log('No results found.');
    }
    pageid = results.query.search[0].pageid;
    console.log(pageid);

    const title_url = `https://en.wikipedia.org/w/api.php?action=query&pageids=${pageid}&origin=*&format=json`;
    const title_response = await fetch(title_url);
    const title_json = await title_response.json();

    title = title_json.query.pages[pageid].title;
    console.log(title);

    const content_url = `http://en.wikipedia.org/w/api.php?action=parse&prop=text&page=${title}&origin=*&format=json`
    const content_response = await fetch(content_url);
    const content_json = await content_response.json();

    console.log(content_json);

    text = content_json.parse.text['*'];
    text = text.toString().replace(/<[^>]*>/g, '');
    text = text.toString().replace(/\n/g, '. ');
    console.log(text);
    text = text.split('.');
    text = text[0] + '. ' + text[1] + '.';

    console.log(text);


  } catch (err) {
    console.log(err);
  }
}


console.log('Hey world')
search()



