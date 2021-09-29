function save_settings() {
    var fromMetric = document.getElementById('fromMetric').value
    var toMetric = document.getElementById('toMetric').value
    chrome.storage.sync.set({
      fromMetric: fromMetric,
      toMetric: toMetric
    }, function() {
      var status = document.getElementById('status')
      status.textContent = 'Settings Saved!'
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
    
  function restore_settings() {
    chrome.storage.sync.get({
      fromMetric: "mm",
      toMetric: "inch"
    }, function(items) {
      document.getElementById('fromMetric').value = items.fromMetric
      document.getElementById('toMetric').value = items.toMetric
    });
  }
  
  document.addEventListener('DOMContentLoaded', restore_settings);
  document.getElementById('fromMetric').addEventListener('change', save_settings);
  document.getElementById('toMetric').addEventListener('change', save_settings);
  document.getElementById("saveButton").addEventListener('click', function() {
    window.close();
  });