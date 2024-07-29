

const api_url = "https://api.quotable.io/random";

function getQuote() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(api_url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("quote").innerText = result.content;
      document.getElementById("author").innerText = `- ${result.author}`;
    })
    .catch((error) => console.error("Error:", error));
}

function tweetQuote() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote + " " + author
  )}`;
  window.open(tweetUrl, "_blank");
}

// Fetch initial quote
getQuote();
