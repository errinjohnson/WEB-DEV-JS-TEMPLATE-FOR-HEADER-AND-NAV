function extractTopStories() {
    const storyElements = document.querySelectorAll(".story-title");
    const topStories = [];
    for (let i = 0; i < storyElements.length; i++) {
        const storyElement = storyElements[i];
        const storyTitle = storyElement.innerText.trim();
        if (storyTitle.length > 0) {
            topStories.push(storyTitle);
        }
    }
    return topStories;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getTopStories") {
        const topStories = extractTopStories();
        sendResponse({
            topStories: topStories
        });
        return true;
    }
});

// "default_icon": [

//     {
//         "src": "news128x128.png",
//         "size": "128x128"
//     }
// ]
// {
//     "src": "news16x20.jpg",
//     "size": "16x20"
// }, {
//     "src": "news48x56.jpg",
//     "size": "48x56"
// }, {
//     "src": "news56x56.jpg",
//     "size": "56x56"
// },