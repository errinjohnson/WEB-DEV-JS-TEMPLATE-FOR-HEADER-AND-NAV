function fetchNews(url, sourceName) {
    fetch(url, {
            method: 'GET',
            mode: 'cors',
            timeout: 10000 // 10 seconds
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // log the XML data
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const items = xml.querySelectorAll('item');

            // create a new ul element for each source
            const sourceList = document.createElement('ul');
            const sourceHeading = document.createElement('h2');
            sourceHeading.textContent = sourceName;
            sourceList.appendChild(sourceHeading);

            // create a promise that resolves when all news items have been added to the list
            const addItemsPromise = new Promise(resolve => {
                let numItemsAdded = 0;

                items.forEach(item => {
                    const link = item.querySelector('link');
                    const title = item.querySelector('title');
                    const description = item.querySelector('description');

                    if (!link || !title || !description) {
                        // if any of the required elements are missing, skip this item
                        numItemsAdded++;
                        if (numItemsAdded === items.length) {
                            resolve();
                        }
                        return;
                    }

                    const linkText = link.textContent;

                    // check if the link has already been added to the list
                    const existingItem = sourceList.querySelector(`a[href="${linkText}"]`);
                    if (existingItem) {
                        // if the link already exists, update the existing item's content
                        existingItem.parentNode.querySelector('h2').textContent = sourceName;
                        existingItem.textContent = title.textContent;
                        existingItem.parentNode.querySelector('p').textContent = description.textContent;
                    } else {
                        // if the link doesn't exist, create a new item and add it to the list
                        const li = document.createElement('li');
                        li.innerHTML = `<div class="news-item"><a href="${linkText}" target="_blank">
                        ${title.textContent}</a><p>${description.textContent}</p></div>`;
                        sourceList.appendChild(li);
                    }

                    numItemsAdded++;

                    if (numItemsAdded === items.length) {
                        resolve();
                    }
                });
            });

            // wait for all news items to be added to the list before updating the grid layout
            addItemsPromise.then(() => {
                const newsContainer = document.querySelector('.news-container');
                const currentSourceList = Array.from(newsContainer.children).find(child =>
                    child.querySelector('h2') && child.querySelector('h2').textContent === sourceName
                );

                // if the current source list already exists, replace it with the new one
                if (currentSourceList) {
                    newsContainer.replaceChild(sourceList, currentSourceList);
                } else {
                    // if the current source list doesn't exist, append the new list to the end of the container
                    newsContainer.appendChild(sourceList);
                }

                updateGridLayout();
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}

function updateGridLayout() {
    const newsItems = document.querySelectorAll('.news-item');
    const numItems = newsItems.length;

    // set the number of columns based on the window width
    let numColumns;
    if (window.innerWidth < 600) {
        numColumns = 1;
    } else if (window.innerWidth < 900) {
        numColumns = 2;
    } else {
        numColumns = 3;
    }

    // set the grid template columns based on the number of columns
    const gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

    // set the grid row gap based on the number of columns
    const gridRowGap = numColumns === 1 ? '20px' : '40px';

    // apply the grid layout styles to each

    newsItems.forEach(item => {
        item.style.gridTemplateColumns = gridTemplateColumns;
        item.style.gridRowGap = gridRowGap;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const urls = [{
            url: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
            sourceName: 'New York Times'
        },
        {
            url: 'https://www.startribune.com/local/index.rss2',
            sourceName: 'Star Tribune News'
        },
        {
            url: 'https://feeds.foxnews.com/foxnews/latest',
            sourceName: 'Fox News'
        },
        {
            url: 'https://apnews.com/rss',
            sourceName: 'Associated Press News'
        }

    ];

    const button = document.getElementById('fetch-news-button');
    button.addEventListener('click', function () {
        urls.forEach(source => {
            fetchNews(source.url, source.sourceName);
        });
    });
});