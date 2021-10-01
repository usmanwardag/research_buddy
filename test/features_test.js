
function testSearchPapers(){
  searchPapers('Indoor Maps').then(papers => {
        if(papers.length==0)
          {
            throw "Related papers not found"
          }
    
  })
  searchPapers('SE project Research Buddy').then(papers => {
        if(papers.length==0)
          {
            throw "Related Papers not found"
          }
        
  })
}

function testSearchDefinition(){
  searchDefinition('Maps').then(papers => {
    if(papers.length==0)
      {
        throw "Definition not found"
      }

  })


}

testSearchPapers();
testSearchDefinition()
