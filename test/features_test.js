
function testSearchPapers(){
  console.log('SearchPapers test');
  searchPapers('There').then(papers => {
      if(papers.length==0)
      {
        throw "Length is zero"
      }
  searchPapers('Indoor Maps').then(papers => {
        if(papers.length==0)
          {
            throw "Length is zero"
          }
    
      })
  searchPapers('').then(papers => {
        if(papers.length==0)
          {
            throw "Length is zero"
          }
        
      })
  searchPapers('SE project Research Buddy').then(papers => {
        if(papers.length==0)
          {
            throw "Length is zero"
          }
        
      })
  })
}

testSearchPapers()
