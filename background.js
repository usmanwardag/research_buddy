console.log('Hello');
var convertEvent = function(tab) {
    console.log('Inside convertEvent');
    chrome.tabs.executeScript({
      code: 'window.getSelection().toString();'
    }, function(selection) {
      if (!isNaN(selection)) {
        console.log(selection);
       /* chrome.storage.sync.get({
          fromMetric: "mm",
          toMetric: "inch"
        }, function(items) {
          const fromMetric = items.fromMetric
          const toMetric = items.toMetric
          var operation = getOperation(fromMetric, toMetric)
          var textSelected = document.createElement("input")
          document.body.appendChild(textSelected)
          textSelected.setAttribute('value', operation(selection))
          textSelected.select()
          document.execCommand("copy")
          document.body.removeChild(textSelected)                
        });
        */
      }
    });
  }
  
  
  
  chrome.commands.onCommand.addListener(convertEvent);