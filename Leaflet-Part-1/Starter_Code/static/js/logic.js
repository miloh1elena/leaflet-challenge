// Initialize the map
const myMap = L.map("map", {
  center: [0, 0],
  zoom: 2,
});

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);

// Define color ranges for depth
const depthColors = {
  19: "skyblue", 
  39: "blue",
  59: "yellow",
  69: "orange",
  79: "red",
  99: "purple",
};

// Fetch earthquake data
fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson")
  .then((response) => response.json())
  .then((data) => {
    // Loop through the earthquake data and create markers
    data.features.forEach((feature) => {
      const magnitude = feature.properties.mag;
      const depth = feature.geometry.coordinates[2];
      const coordinates = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
      const location = feature.properties.place; // Location information

      // Customize marker size based on magnitude
      const marker = L.circle(coordinates, {
        radius: magnitude * 50000, // Adjust the multiplier for appropriate marker size
      });

      // Set the marker color based on depth
      const color = getColorForDepth(depth);
      marker.setStyle({ fillColor: color, color: color, fillOpacity: 1 }); // Set fillOpacity to 1 for no transparency

      // Add a popup with additional information
   
      marker.bindPopup(
        `<strong>Magnitude:</strong> ${magnitude}<br><strong>Depth:</strong> ${depth} km<br><strong>Location:</strong> ${location}`
      );

      marker.addTo(myMap);
    });
  });

// Create a legend
const legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  const div = L.DomUtil.create("div", "info legend");
  const labels = ['<strong>Depth</strong>'];

  // Loop through depth colors and ranges
  for (let depth in depthColors) {
    const color = depthColors[depth];
    const range = depth + "-" + (parseInt(depth) + 19) + " km";
    div.innerHTML += `<i style="background: ${color}; color: ${
      color === "purple" ? "white" : "black"
    }; border: 0.25px solid black;"></i> ${range}<br>`;
  }

  div.innerHTML += labels.join("<br>");
  return div;
};

legend.addTo(myMap);

// Function to determine marker color based on depth
function getColorForDepth(depth) {
  for (let range in depthColors) {
    if (depth <= range) {
      return depthColors[range];
    }
  }
  return "green"; // Default color for unknown depths
}
