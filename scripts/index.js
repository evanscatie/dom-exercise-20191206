// Challenge #1 make this show up on the page at all

const oneAddress = "https://google.com";


const linkContainer = document.querySelector(".js-link-container");

// function linkPlacer(linkPath) {
//     const links = document.createElement(`a`);
//     links.href= linkPath;
//     links.textContent = linkPath;
//     linkContainer.appendChild(links);
// }

// linkPlacer(oneAddress);

function anchorFromLinkPath(linkPath) {
    // They pass a string like "https://google.com"

    // and I give them the DOM element equivalent of href="https://google.com">https://google.com</a>
    let links = document.createElement(`a`);
    links.textContent = linkPath;
    return links;

}

function anchorWithFormattedText(anchor) {
    const originalText = anchor.textContent;
    anchor.textContent = originalText.slice(8);
    return anchor;
}

function appendBreak() {
    const breakElement = document.createElement(`br`);
    linkContainer.appendChild(breakElement);
}

function appendElementToContainer(anchorElement) {
    // They pass me the DOM element equivalent of <a href=:htpps://google.com">https://google.com</a>
    // And I append it as a child to linkContainer
    linkContainer.appendChild(anchorElement);
    appendBreak()
}
const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];


// Transform addresses into anchor elements
// let links = addresses.map(anchorFromLinkPath);
// links = links.map(anchorWithFormattedText);
// links.map(appendElementToContainer);

addresses 
    .map(anchorFromLinkPath)
    .map(anchorWithFormattedText)
    .map(appendElementToContainer);


function listItemWithAnchor(anchor) {
    // They give me element like this:
    // <a href="https://google.com">google.com</a>
    const li = document.createElement("li");
    li.appendChild(anchor);
    // I give them an element like this:
    // <li>
    //  <a href="https://google.com">google
    // </li>
    return li;

}

function listWithListItems(listItemArray) {
    const ul = document.createElement(`ul`);
    // const ul2 = document.querySelector(`ul`);

    for (let elementItem of listItemArray) {
        ul.appendChild(elementItem);
    }
    return ul
}

const a = anchorFromLinkPath(oneAddress);
const li = listItemWithAnchor(a);
const ul = listWithListItems([li]);