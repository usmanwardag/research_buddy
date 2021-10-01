
function testSearchPapers(){
  console.log('SearchPapers test');
  searchPapers('There').then(papers => {
      console.log("therer",papers);
      console.log(papers.length)
      if(papers.length==0)
      {
        throw "Length is zero"
      }

      
  })
}



testSearchPapers()
