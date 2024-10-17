// Add an event listener to the window's load event
window.addEventListener('load', function() {
  // Create a new text node
  const textNode = document.createTextNode('Text inserted on window load');

  // Append the text node to the body
  document.body.appendChild(textNode);
});