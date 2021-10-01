

function testSearchPapers(){
  console.log('SearchPapers test');

  searchPapers('There').then(papers => {
      console.log(papers);
      throw "error";
      console.log(papers.length)
      
  })
  searchPapers('Indoor Maps').then(papers => {
    console.log(papers);
    console.log(papers.length)
})
  
}


testSearchPapers()
