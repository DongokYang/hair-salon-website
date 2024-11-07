document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is linked and working!");
  // Add your custom JavaScript code here
});

async function fetchReviews() {
  const placeId = "ChIJZTvPShF06lIRODwYXB_aM44"; // Replace this with your actual Place ID
  const apiKey = "AIzaSyBPUJ3XW9IE7WrKVb6u-jnjJ92v2irO18U"; // Replace this with your actual API key
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.result && data.result.reviews) {
      const reviews = data.result.reviews;
      reviews.forEach((review) => {
        document.getElementById("reviews").innerHTML += `
                  <div class="review">
                      <h4>${review.author_name}</h4>
                      <p>${review.text}</p>
                      <p>Rating: ${review.rating}</p>
                  </div>
              `;
      });
    } else {
      document.getElementById("reviews").innerHTML = "<p>No reviews found.</p>";
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    document.getElementById("reviews").innerHTML =
      "<p>Error fetching reviews. Please try again later.</p>";
  }
}

window.onload = fetchReviews;
