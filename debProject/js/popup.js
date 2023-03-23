function getTopStories() {
    const newsOutlets = [
        "https://apnews.com/",
        "https://startribune.com",
        "https://nytimes.com/",
        "https://foxnews.com/",
        "https://wsj.com/",
    ];

    for (let i = 0; i < newsOutlets.length; i++) {
        chrome.tabs.create({
            url: newsOutlets[i],
            active: false
        }, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                file: "contentScript.js"
            }, function () {
                chrome.tabs.sendMessage(tab.id, {
                    action: "getTopStories"
                }, function (response) {
                    displayBreakingNews(response.topStories);
                });
            });
        });
    }
}

function displayBreakingNews(topStories) {
    const topStoriesList = document.getElementById("top-stories");
    for (let i = 0; i < topStories.length; i++) {
        const storyElement = document.createElement("li");
        storyElement.innerText = topStories[i];
        topStoriesList.appendChild(storyElement);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    getTopStories();
});