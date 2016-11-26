chrome.contextMenus.create({
  'title': 'Search in Google Maps',
  'contexts': ['selection'],
  'onclick': (e) => {
    const selectedText = e.selectionText
    const url = 'https://www.google.com/maps?q=' + encodeURIComponent(selectedText) + '&um=1&ie=UTF-8&sa=X'
    window.open(url)
  }
});
