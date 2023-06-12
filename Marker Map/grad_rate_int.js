//Functions to determine the marker size based on the gradrate for total, men, and women
function markerSize(gradrate) {
    return (gradrate) * 10000;
  }
  
  // An array that contains all the information needed to create city and state markers
// Data Source: OECD-ilibrary.org for uppersecondary schools
let locations = [
    {
      coordinates: [37.0902, -95.7129],     
      year2020_total_sec: {
        name: "United States",
        gradrate: 86.774
      },
      year2020_m_sec: {
        name: "United States",
        gradrate: 84.211
      },
      year2020_w_sec: {
        name: "United States",
        gradrate: 89.441
      },
      year2020_total_ter: {
        name: "United States",
        gradrate: 43.762
      },
      year2020_m_ter: {
        name: "United States",
        gradrate: 35.064
      },
      year2020_w_ter: {
        name: "United States",
        gradrate: 52.459
      },
    },
    {
        coordinates: [56.1304, -106.3468],
        year2020_total_sec: {
          name: "Canada",
          gradrate: 85.741
        },
        year2020_m_sec: {
          name: "Canada",
          gradrate: 84.030
        },
        year2020_w_sec: {
          name: "Canada",
          gradrate: 87.498
        },
        year2020_total_ter: {
          name: "Canada",
          gradrate: 26.534
        },
        year2020_m_ter: {
          name: "Canada",
          gradrate: 19.303
        },
        year2020_w_ter: {
          name: "Canada",
          gradrate: 33.766
        },
    },
    {
        coordinates: [56.2639, 9.5018],
        year2020_total_sec: {
          name: "Denmark",
          gradrate: 79.520,
        },
        year2020_m_sec: {
          name: "Denmark",
          gradrate: 75.502
        },
        year2020_w_sec: {
          name: "Denmark",
          gradrate: 83.715
        },
        year2020_total_ter: {
          name: "Denmark",
          gradrate: 41.659
        },
        year2020_m_ter: {
          name: "Denmark",
          gradrate: 33.597
        },
        year2020_w_ter: {
          name: "Denmark",
          gradrate: 49.72
        },
    },
    {
        coordinates: [61.9241, 25.7482],
        year2020_total_sec: {
          name: "Finland",
          gradrate: 79.956
        },
        year2020_m_sec: {
          name: "Finland",
          gradrate: 75.502
        },
        year2020_w_sec: {
          name: "Finland",
          gradrate: 87.421
        },
        year2020_total_ter: {
          name: "Finland",
          gradrate: 37.349
        },
        year2020_m_ter: {
          name: "Finland",
          gradrate: 30.662
        },
        year2020_w_ter: {
          name: "Finland",
          gradrate: 44.036
        },
    },
    {
        coordinates: [35.078, 127.7669],
        year2020_total_sec: {
          name: "S. Korea",
          gradrate: 96.542
        },
        year2020_m_sec: {
          name: "S. Korea",
          gradrate: 96.668
        },
        year2020_w_sec: {
          name: "S. Korea",
          gradrate: 96.403
        },
        year2020_total_ter: {
          name: "S. Korea",
          gradrate: 37.403
        },
        year2020_m_ter: {
          name: "S. Korea",
          gradrate: 36.926
        },
        year2020_w_ter: {
          name: "S. Korea",
          gradrate: 37.879
        },
    },
    {
        coordinates: [41.8719, 12.5674],
        year2020_total_sec: {
          name: "Italy",
          gradrate: 90.050
        },
        year2020_m_sec: {
          name: "Italy",
          gradrate: 89.905
        },
        year2020_w_sec: {
          name: "Italy",
          gradrate: 92.358
        },
        year2020_total_ter: {
          name: "Italy",
          gradrate: 35.267
        },
        year2020_m_ter: {
          name: "Italy",
          gradrate: 28.62
        },
        year2020_w_ter: {
          name: "Italy",
          gradrate: 42.506
        },
    },
    {
        coordinates: [-40.9006, 174.8860],
        year2020_total_sec: {
          name: "New Zealand",
          gradrate: 79.761
        },
        year2020_m_sec: {
          name: "New Zealand",
          gradrate: 63.218
        },
        year2020_w_sec: {
          name: "New Zealand",
          gradrate: 89.439
        },
        year2020_total_ter: {
          name: "New Zealand",
          gradrate: 36.880
        },
        year2020_m_ter: {
          name: "New Zealand",
          gradrate: 28.020
        },
        year2020_w_ter: {
          name: "New Zealand",
          gradrate: 46.348
        },
    },
    {
        coordinates: [39.3999, -8.2245],
        year2020_total_sec: {
          name: "Portugal",
          gradrate: 89.727
        },
        year2020_m_sec: {
          name: "Portugal",
          gradrate: 85.959
        },
        year2020_w_sec: {
          name: "Portugal",
          gradrate: 93.711
        },
        year2020_total_ter: {
          name: "Portugal",
          gradrate: 44.463
        },
        year2020_m_ter: {
          name: "Portugal",
          gradrate: 36.057
        },
        year2020_w_ter: {
          name: "Portugal",
          gradrate: 53.083
        },
    },
    {
      coordinates: [38.9637, 35.2433],
      year2020_total_sec: {
        name: "Turkey",
        gradrate: 81.341
      },
      year2020_m_sec: {
        name: "Turkey",
        gradrate: 79.093
      },
      year2020_w_sec: {
        name: "Turkey",
        gradrate: 83.736
      },
      year2020_total_ter: {
        name: "Turkey",
        gradrate: 59.132
      },
      year2020_m_ter: {
        name: "Turkey",
        gradrate: 52.937
      },
      year2020_w_ter: {
        name: "Turkey",
        gradrate: 65.664
      },
  },
    {
      coordinates: [-35.6751, -71.5430],
      year2020_total_sec: {
        name: "Chile",
        gradrate: 93.444
      },
      year2020_m_sec: {
        name: "Chile",
        gradrate: 90.919
      },
      year2020_w_sec: {
        name: "Chile",
        gradrate: 96.058
      },
      year2020_total_ter: {
        name: "Chile",
        gradrate: 31.74
      },
      year2020_m_ter: {
        name: "Chile",
        gradrate: 26.244
      },
      year2020_w_ter: {
        name: "Chile",
        gradrate: 37.413
      },
    },
    {
      coordinates: [31.0461, 34.8516],
      year2020_total_sec: {
        name: "Israel",
        gradrate: 89.978
      },
      year2020_m_sec: {
        name: "Israel",
        gradrate: 86.735
      },
      year2020_w_sec: {
        name: "Israel",
        gradrate: 93.357
      },
      year2020_total_ter: {
        name: "Israel",
        gradrate: 46.338
      },
      year2020_m_ter: {
        name: "Israel",
        gradrate: 41.739
      },
      year2020_w_ter: {
        name: "Israel",
        gradrate: 50.937
      },
    },
    {
      coordinates: [55.3781, -3.4360],
      year2020_total_sec: {
        name: "Great Britain",
        gradrate: 89.978
      },
      year2020_m_sec: {
        name: "Great Britain",
        gradrate: 86.735
      },
      year2020_w_sec: {
        name: "Great Britain",
        gradrate: 93.357
      },
      year2020_total_ter: {
        name: "Great Britain",
        gradrate: 42.449
      },
      year2020_m_ter: {
        name: "Great Britain",
        gradrate: 36.189
      },
      year2020_w_ter: {
        name: "Great Britain",
        gradrate: 49.070
      },
    },
    {
      coordinates: [36.2048, 138.2529],
      year2020_total_sec: {
        name: "Japan",
        gradrate: 95.643
      },
      year2020_m_sec: {
        name: "Japan",
        gradrate: 96.413
      },
      year2020_w_sec: {
        name: "Japan",
        gradrate: 94.873
      },
      year2020_total_ter: {
        name: "Japan",
        gradrate: 53.702
      },
      year2020_m_ter: {
        name: "Japan",
        gradrate: 61.220
      },
      year2020_w_ter: {
        name: "Japan",
        gradrate: 46.184
      },
    },
  ];
  // Define arrays to hold the created country rate markers.
  let year2020sectMarkers = [];
  let year2020secmMarkers = [];
  let year2020secwMarkers = [];
  let year2020tertMarkers = [];
  let year2020termMarkers = [];
  let year2020terwMarkers = [];
  
  // Loop through locations, and create the sec total, sec men, sec women, ter total, ter men, ter women markers.
  for (let i = 0; i < locations.length; i++) {
    // Set the marker radius for total secondary rate by passing the gradrate to the markerSize() function.
    year2020sectMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.90,
        color: "yellow",
        fillColor: "yellow",
        radius: markerSize(locations[i].year2020_total_sec.gradrate)
      })
    );
  
    // Set the marker radius for men secondary rate by passing the gradrate to the markerSize() function.
    year2020secmMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.50,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(locations[i].year2020_m_sec.gradrate)
      })
    );
    // Set the marker radius for women secondary rate by passing the gradrate to the markerSize() function.
    year2020secwMarkers.push(
        L.circle(locations[i].coordinates, {
          stroke: false,
          fillOpacity: 0.50,
          color: "orange",
          fillColor: "orange",
          radius: markerSize(locations[i].year2020_w_sec.gradrate)
        })
    );
    // Set the marker radius for total tertiary rate by passing the gradrate to the markerSize() function.
    year2020tertMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.50,
        color: "blue",
        fillColor: "blue",
        radius: markerSize(locations[i].year2020_total_ter.gradrate)
      })
  );
  // Set the marker radius for men tertiary rate by passing the gradrate to the markerSize() function.
  year2020termMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.50,
      color: "green",
      fillColor: "green",
      radius: markerSize(locations[i].year2020_m_ter.gradrate)
    })
);
// Set the marker radius for women tertiary rate by passing the gradrate to the markerSize() function.
year2020terwMarkers.push(
  L.circle(locations[i].coordinates, {
    stroke: false,
    fillOpacity: 0.50,
    color: "red",
    fillColor: "red",
    radius: markerSize(locations[i].year2020_w_ter.gradrate)
  })
);
  }
  
  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
  
  // Create six separate layer groups: one for the each of the markers.
  let total_sec = L.layerGroup(year2020sectMarkers);
  let men_sec = L.layerGroup(year2020secmMarkers);
  let women_sec = L.layerGroup(year2020secwMarkers);
  let total_ter = L.layerGroup(year2020tertMarkers);
  let men_ter = L.layerGroup(year2020termMarkers);
  let women_ter = L.layerGroup(year2020terwMarkers);
  // Create a baseMaps object to contain the streetmap and the darkmap.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };
  // Create an overlayMaps object to contain the gradrate layers
  let overlayMaps = {
    "Secondary Grad Rate" : total_sec,
    "Tertiary Grad Rate" : total_ter,
    "Secondary Grad Rate Men" : men_sec,
    "Secondary Grad Rate Women" : women_sec,
    "Tertiary Grad Rate Men": men_ter,
    "Tertiary Grad Rate Women": women_ter  
  };  
  
  // Modify the map so that it has the streetmap, and all rate layers
  let myMap = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [street, total_sec, total_ter, men_sec, women_sec, men_ter, women_ter]
  });
  
  // Create a layer control that contains our baseMaps and overlayMaps, and add them to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);