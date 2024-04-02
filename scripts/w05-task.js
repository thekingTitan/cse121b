/* W05: Programming Tasks */

// Declare Global Variables
const templesElement = document.querySelector("#temples");
let templeList = [];

// Function: displayTemples()
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        
        article.appendChild(h3);
        article.appendChild(img);
        
        templesElement.appendChild(article);
    });
};

// Function: getTemples()
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

// Call getTemples() to fetch and display temple data
getTemples();

// Function: reset()
const reset = () => {
    templesElement.innerHTML = "";
};

// Function: filterTemples()
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

// Event Listener: filterTemples Element change
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
