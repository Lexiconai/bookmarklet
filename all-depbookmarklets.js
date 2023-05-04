fetch("https://raw.githubusercontent.com/gamelff/bookmarklet/main/all-bookmarklets.js").then(function(response) {
  response.text().then(function(text) {
    eval(text);
  });
});
