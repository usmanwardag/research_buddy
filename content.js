const getSelectedText = () => window.getSelection().toString();

document.addEventListener("click", () => {
  if (getSelectedText().length > 0) {
    text = getSelectedText();
    console.log(getSelectedText());
    searchDefinition(text);
  }
});
