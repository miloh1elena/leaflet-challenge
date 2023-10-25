# Earthquake Data Visualization Readme

This JavaScript code demonstrates the process of importing and visualizing earthquake data using Leaflet, a powerful JavaScript mapping library. The code accomplishes the following tasks, aligning with the project's goals:

1. **Initializing the Map**: A Leaflet map, named `myMap`, is created. It is centered at coordinates (0, 0) with an initial zoom level of 2.

2. **Adding a Tile Layer**: A tile layer from OpenStreetMap is incorporated into the map, providing the map's visual background.

3. **Defining Color Ranges for Depth**: Color ranges are predefined based on earthquake depth. These color ranges are used to visually represent earthquake depth on the map.

4. **Fetching Earthquake Data**: Earthquake data is retrieved from the USGS GeoJSON feed, specifically focusing on the last 30 days of significant earthquakes.

5. **Iterating Through Data**: The code loops through the earthquake data features and generates markers for each earthquake, placing them on the map.

6. **Customizing Marker Size and Color**:
   - Marker size corresponds to the earthquake's magnitude. Larger magnitudes result in larger markers. The marker size is scaled using a multiplier.
   - Marker color reflects the earthquake's depth. Deeper earthquakes are represented with darker colors based on the predefined depth color ranges.

7. **Adding Popups**: Each marker is equipped with popups providing additional information about the earthquake when a user interacts with a marker. Information includes magnitude, depth, and location.

8. **Creating a Legend**: A legend is generated for the map, offering context for depth ranges and their corresponding colors. It is positioned at the bottom right of the map.

9. **Function for Determining Marker Color**: A function named `getColorForDepth(depth)` is defined to determine the marker color based on the earthquake's depth. This function associates the depth with the predefined color ranges.

Through the implementation of this code, an interactive map is created, showcasing earthquake data. The size and color of the markers vary based on earthquake magnitude and depth, respectively. Furthermore, the provided popups supply important earthquake information, while the legend imparts visual context for depth ranges and their associated colors. This project aims to enhance public awareness and understanding of earthquake data, contributing to the USGS's mission.