//BY SAHIL
// Random facts data
const facts = [
    "Approximately 700 million people live in extreme poverty, surviving on less than $2.15 per day.",
    "Sub-Saharan Africa accounts for about 75% of the global population living in extreme poverty.",
    "Global extreme poverty rates declined from 36% in 1990 to 9.7% in 2020.",
    "The COVID-19 pandemic increased global extreme poverty by 0.85 percentage points in 2020.",
    "Women are more likely than men to live in poverty due to unequal access to resources and opportunities.",
    "Children account for two-thirds of the world's extreme poor.",
    "About 70% of adults living in extreme poverty have no schooling or only some basic education.",
    "Rural areas are home to 80% of people living in extreme poverty.",
    "Climate change is expected to push an additional 68 million to 132 million people into poverty by 2030.",
    "The global poverty rate is projected to be around 7% in 2030, missing the target of ending poverty."
];

// Get a random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Animate counter
function animateCounter(id, target) {
    const counter = document.getElementById(id);
    let count = 0;
    const increment = target / 100;

    const updateCounter = () => {
        count += increment;
        if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    requestAnimationFrame(updateCounter);
}



// Make displayRandomFact available globally
window.displayRandomFact = function() {
    const factDisplay = document.getElementById('fact-display');
    factDisplay.textContent = getRandomFact();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Display initial fact
    displayRandomFact();
    
    // Start counter animation
    animateCounter('counter', 500000);
    
    // Load image grid
    loadImageGrid('image-grid');
});