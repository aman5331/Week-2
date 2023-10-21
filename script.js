document.getElementById("searchButton").addEventListener("click", function () {
  const searchInput = document.getElementById("searchInput").value;
  const apiKey = "YOUR_RAPID_API_KEY";

  fetch(`https://YOUR_AIRBNB_API_ENDPOINT?search=${searchInput}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the retrieved listings data here
      displayListings(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function displayListings(data) {
  const listingsContainer = document.getElementById("listings-container");
  listingsContainer.innerHTML = ""; // Clear previous results

  data.listings.forEach((listing) => {
    const listingCard = document.createElement("div");
    listingCard.classList.add("listing-card");

    // Display listing details
    listingCard.innerHTML = `
        <img src="${listing.image}" alt="${listing.name}">
        <h2>${listing.propertyType}</h2>
        <p>Price: $${listing.price} per night</p>
        <p>${listing.bedrooms} bedrooms, ${listing.bathrooms} bathrooms</p>
        <p>Location: ${listing.location}</p>
        <!-- Add more listing details as needed -->
      `;

    listingsContainer.appendChild(listingCard);
  });
}
