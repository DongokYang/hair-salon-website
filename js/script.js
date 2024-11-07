// Load Google Maps API dynamically
function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&libraries=places`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize the Google Map
function initMap() {
  // Define the map options
  const mapOptions = {
    center: { lat: 49.9232292175293, lng: -97.15328216552734 }, // Set the map center
    zoom: 14, // Set the initial zoom level
  };

  // Create the map in the specified element
  const mapElement = document.getElementById("map");
  const map = new google.maps.Map(mapElement, mapOptions);

  // Add a marker to the map
  const marker = new google.maps.Marker({
    position: { lat: 49.9232292175293, lng: -97.15328216552734 },
    map: map,
    title: "My Location",
  });
}

// Call loadGoogleMaps to load the API and initialize the map
loadGoogleMaps();

/*
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
*/
