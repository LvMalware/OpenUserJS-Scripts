// ==UserScript== 
// @name        VideoDownloader 
// @description This script allows the user to download videos from most websites in a simple way (works very well on Falkon/QupZilla).
// @version     1.0.0
// @copyright 2019, Lucas V. Araujo
// @license GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @icon data:image/png;base64,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
// @author lvmalware
// ==/UserScript==

function ScanPage(){
	var html = document.documentElement.outerHTML; // Gets the page html source
	var exts = ["avi", "mp4", "rmvb", "flv", "3gp", "mkv", "mov"]; // Allowed video extensions
	links = []; 
	for (var i = exts.length - 1; i >= 0; i--) { // Search videos with each extension
		links = getLinksWithExt(exts[i], html, links);
	}
	
	if (links.length>0){ // This part will only be executed if a video has been found
		dwl=confirm(links.length+' videos found.\n Do you want to download any of them?'); // Question if the user wants to download any of the videos
		if (dwl){
			dialog = document.createElement('div'); //Creates a new html <div> element that will contain the links
			//TODO: Implement a more visually appealing way to display links
			div = '<div id="viddown">\
    		<button id="close" onclick="document.getElementById(\'viddown\').hidden=true;">&times;</button>\
    		<br><br>\
    		<center>\
    		<p>Download links:</p>\
    		<br>'; // <div> source
    		for (var i = 0; i < links.length; i++) { // Adds in the <div> each link found
    			div += '<a href="'+ links[i] + '" target="_blanck">Video #'+(i+1)+'</a><br>';
    		}
  			div +='\
  			</center>\
  			</div>';
  			document.body.appendChild(dialog); // Appends the <div> element in the document's <body> section
  			dialog.innerHTML = div; // Sets the source
  			dialog.style.borderColor = 'black'; // Sets some layout properties
  			dialog.style.color = 'black';
  			dialog.style.background = '#CDFCBB';
			dialog.scrollIntoView(); // Focus on the links section
		}
	}
}
function getLinksWithExt(ext, html, links){
	var re = new RegExp('(http)s?\\:\\\/\\\/+\\w[^\\"\\\' ]+\\.('+ext+')+\\??(\\w[^ \\"\\\']+)?', 'g'); //This regular expression searchs for a link that contains the especified extension
	found = html.match(re);
	if (found !== null){
		for (var i = 0; i < found.length; i++) { // Add each found link to the list
		    if (links.indexOf(found[i]) == -1)
			    links.push(found[i]);
		}
	}
	return links; //
}
ScanPage(); // Call the main function
