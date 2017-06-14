
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
  var serviceCall = 'http://www.dictionary.com/browse/'+ selection +'?s=t';
  chrome.tabs.create({url: serviceCall});
};

chrome.contextMenus.create({
	id: "dictionary_lookup",
	title: "Dictionary Lookup",
	"contexts":["selection"],
	"onclick" : onRequest
});
