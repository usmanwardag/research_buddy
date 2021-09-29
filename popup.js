function getSelectedText() {
  var text = "";
  if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
  } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    text = document.selection.createRange().text;
  }
  console.log(text);
  return text;
}

function doSomethingWithSelectedText() {
  var selectedText = getSelectedText();
  if (selectedText) {

    $('#infoDiv').css('display', 'block');
    $('#infoDiv').css('position', 'absolute');
    $('#infoDiv').css('left', event.clientX + 10);
    $('#infoDiv').css('top', event.clientY + 15);
  } else {
    $('#infoDiv').css('display', 'none');
  };
};

document.onmouseup = doSomethingWithSelectedText;
document.onkeyup = doSomethingWithSelectedText;