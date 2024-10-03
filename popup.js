document.getElementById("getTitle").addEventListener("click", function () {
  console.log("Button clicked!"); 
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0) {
      const currentTab = tabs[0];
      document.getElementById("title").textContent = currentTab.title;
    } else {
      document.getElementById("title").textContent = "No active tab found.";
    }
  });
});
