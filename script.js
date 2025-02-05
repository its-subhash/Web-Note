const dashboardButton = document.getElementById('dashboardButton');


dashboardButton.addEventListener('click', () => {
    console.log("Clicked")
    chrome.tabs.create({ url: chrome.runtime.getURL('dashboard.html') });
});