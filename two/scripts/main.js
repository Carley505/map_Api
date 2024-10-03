
L.mapquest.key = 'API-KEY-FROM-MAPQUEST-GOES-HERE';

const map = L.mapquest.map("map", {
    center: [-1.286389, 36.817223],
    layers: L.mapquest.tileLayer('hybrid'),
    zoom: 12,
});

// Add Control
map.addControl(L.mapquest.control({position: "bottomright"}));

// Custom Marker
L.marker([-1.333731, 36.927109],
    {
        icon: L.mapquest.icons.marker({
            primaryColor: "#22407F",
            secondaryColor: "#3B5998",
            shadow: true,
            size: "md",
            Symbol: "A",
        }),
    }
)
.bindPopup("This is Jommo Kentatta International Airport!")
.addTo(map);