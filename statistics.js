//BY SAHIL
// Statistics data
const povertyStats = [
    {
        title: "Global Poverty Rate",
        value: "8.5%",
        description: "Percentage of people living in extreme poverty globally"
    },
    {
        title: "Children in Poverty",
        value: "356 Million",
        description: "Number of children living in extreme poverty"
    },
    {
        title: "Minimum Daily Income",
        value: "$2.15",
        description: "International poverty line per day"
    },
    {
        title: "Progress Made",
        value: "1+ Billion",
        description: "People lifted out of poverty since 1990"
    }
];

const images = [
    { src: 'https://cdn.unenvironment.org/s3fs-public/inline-images/1_No-Poverty_FINAL_0.jpg', alt: 'Community Development Project' },
    { src: 'https://thumbs.dreamstime.com/z/cycle-poverty-trap-diagram-flat-outline-concept-vector-illustration-cycle-poverty-trap-diagram-outline-concept-vector-168174287.jpg', alt: 'Cycle of Poverty' },
    { src: 'https://lirp.cdn-website.com/7848d525/dms3rep/multi/opt/sdgreport-640w.jpeg', alt: 'Predicted Impact of Poverty' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nsZuV1AINZ8QpIwbTsoH1TzV9kTzjkXeVQ&s', alt: 'Progress on No Poverty' }
];

// Grid loader
function loadCombinedGrid(id) {
    const grid = document.getElementById(id);

    // Combine data arrays for alternating layout
    const combinedData = [];
    const maxLength = Math.max(povertyStats.length, images.length); 
    for (let i = 0; i < maxLength; i++) {
        let combinedItems = [];
        if (povertyStats[i]) {
            combinedItems.push({ type: 'stat', data: povertyStats[i] });
        }
        if (images[i]) {
            combinedItems.push({ type: 'image', data: images[i] });
        }
        combinedData.push(combinedItems);
    }

    // Populate grid
    combinedData.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-sm-6';

        const { title, value, description } = item[0].data;
        const { src, alt } = item[1].data;
        col.innerHTML = `
            <div class="card stat-card">
                <div class="card-body text-center">
                    <h3 class="card-title">${title}</h3>
                    <h4 class="text-danger">${value}</h4>
                    <p class="card-text">${description}</p>
                    <img src="${src}" alt="${alt}" height="200px" width="300px" class="rounded mx-auto d-block">
                </div>
            </div>
        `;

        grid.appendChild(col);
    });
}

// Poverty data
const povertyData = [
    {
        country: "Nigeria",
        coordinates: [9.0820, 8.6753],
        povertyRate: 40.1,
        population: "206 million",
        details: "Nigeria has the highest number of people living in extreme poverty, with over 80 million individuals affected. Contributing factors include economic instability, corruption, and insurgency in certain regions."
    },
    {
        country: "Democratic Republic of the Congo",
        coordinates: [-4.0383, 21.7587],
        povertyRate: 73,
        population: "89 million",
        details: "Approximately 65 million people live in poverty in the DRC, primarily due to prolonged conflict, political instability, and lack of infrastructure."
    },
    {
        country: "India",
        coordinates: [20.5937, 78.9629],
        povertyRate: 21.9,
        population: "1.366 billion",
        details: "Despite significant economic growth, India has over 270 million people living below the poverty line, facing challenges like unemployment and inadequate access to quality education and healthcare."
    },
    {
        country: "Ethiopia",
        coordinates: [9.1450, 40.4897],
        povertyRate: 24,
        population: "114 million",
        details: "Ethiopia has made progress in poverty reduction, yet about 27 million people remain impoverished, with factors including droughts and limited access to education."
    },
    {
        country: "Bangladesh",
        coordinates: [23.6850, 90.3563],
        povertyRate: 20.5,
        population: "163 million",
        details: "Approximately 33 million people live in poverty in Bangladesh, with contributing factors such as overpopulation, natural disasters, and limited industrial growth."
    },
    {
        country: "Tanzania",
        coordinates: [-6.3690, 34.8888],
        povertyRate: 26.4,
        population: "59 million",
        details: "Over 15 million Tanzanians live in poverty, influenced by factors like agricultural dependency and limited access to healthcare."
    },
    {
        country: "Mozambique",
        coordinates: [-18.6657, 35.5296],
        povertyRate: 62.9,
        population: "31 million",
        details: "Nearly 20 million people live in poverty in Mozambique, with challenges including natural disasters and political instability."
    },
    {
        country: "Madagascar",
        coordinates: [-18.7669, 46.8691],
        povertyRate: 74,
        population: "28 million",
        details: "Approximately 20 million people are impoverished in Madagascar, facing issues like deforestation, political instability, and frequent cyclones."
    },
    {
        country: "Yemen",
        coordinates: [15.5527, 48.5164],
        povertyRate: 75,
        population: "30 million",
        details: "Conflict has led to severe poverty in Yemen, with about 22.5 million people affected, lacking access to basic services and facing food insecurity."
    },
    {
        country: "Haiti",
        coordinates: [18.9712, -72.2852],
        povertyRate: 58.5,
        population: "11 million",
        details: "Over 6 million Haitians live in poverty, with contributing factors including political instability, natural disasters, and limited access to education."
    },
    {
        country: "South Sudan",
        coordinates: [7.8627, 29.6949],
        povertyRate: 82,
        population: "11 million",
        details: "Approximately 9 million people live in poverty in South Sudan, primarily due to ongoing conflict and displacement."
    },
    {
        country: "Zambia",
        coordinates: [-13.1339, 27.8493],
        povertyRate: 54.4,
        population: "18 million",
        details: "Around 9.8 million Zambians are impoverished, facing challenges like economic dependency on copper and high unemployment rates."
    },
    {
        country: "Afghanistan",
        coordinates: [33.9391, 67.7100],
        povertyRate: 54.5,
        population: "38 million",
        details: "Conflict and political instability have left about 20.7 million Afghans in poverty, with limited access to healthcare and education."
    },
    {
        country: "Sudan",
        coordinates: [12.8628, 30.2176],
        povertyRate: 46.5,
        population: "44 million",
        details: "Approximately 20.5 million people live in poverty in Sudan, influenced by conflict and economic challenges."
    },
    {
        country: "Rwanda",
        coordinates: [-1.9403, 29.8739],
        povertyRate: 38.2,
        population: "12 million",
        details: "About 4.6 million Rwandans are impoverished, with factors including limited natural resources and a history of conflict."
    },
    {
        country: "Burundi",
        coordinates: [-3.3731, 29.9189],
        povertyRate: 64.9,
        population: "11 million",
        details: "Over 7 million people live in poverty in Burundi, facing challenges like political instability and limited access to education."
    },
    {
        country: "Uganda",
        coordinates: [1.3733, 32.2903],
        povertyRate: 21.4,
        population: "45 million",
        details: "Approximately 9.6 million Ugandans are impoverished, with contributing factors including high population growth and unemployment."
    },
    {
        country: "Zimbabwe",
        coordinates: [-19.0154, 29.1549],
        povertyRate: 38.3,
        population: "14 million",
        details: "Around 5.4 million people live in poverty in Zimbabwe, influenced by economic instability and droughts."
    },
    {
        country: "Nepal",
        coordinates: [28.3949, 84.1240],
        povertyRate: 17.4,
        population: "29 million",
        details: "Approximately 5 million Nepalese are impoverished, facing challenges like natural disasters and limited industrialization."
    },
    {
        country: "Mali",
        coordinates: [17.5707, -3.9962],
        povertyRate: 42.7,
        population: "20 million",
        details: "About 8.5 million people live in poverty in Mali, with contributing factors including conflict and limited access to education."
    }
];

// Initialize map
function initializeMap() {
    // Create map instance
    const map = L.map('poverty-map').setView([20, 0], 2);

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for each region
    povertyData.forEach(region => {
        const marker = L.marker(region.coordinates)
            .addTo(map)
            .bindPopup(`
                <h5>${region.country}</h5>
                <p><strong>Poverty Rate:</strong> ${region.povertyRate}%</p>
                <p><strong>Population:</strong> ${region.population}</p>
                <p>${region.details}</p>
            `);

        // Add hover effect
        marker.on('mouseover', function() {
            this.openPopup();
        });
    });

    // Add legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
            <div style="background: white; padding: 10px; border-radius: 5px;">
                <h6>Poverty Rates</h6>
                <div>⚫ High (>30%)</div>
                <div>⚫ Medium (10-30%)</div>
                <div>⚫ Low (<10%)</div>
            </div>
        `;
        return div;
    };
    legend.addTo(map);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCombinedGrid('stats-grid');
    initializeMap();
});