// ==UserScript== 
// @name        HTTPS redirect 
// @description This script tries to redirect every http connection to its secure SSL version
// @include     * 
// @version     1.0.0 
// @author lvmalware
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD30lEQVRoQ+1aO2gUQRj+Vo3xAUZJoQbBBI2FYBDRTlJoYSNYKBosrEQQTZFCC0mys5ErbGx8NFY2ikQQBBvFSqxEFEREDZjGB4IPVE7N5W79dveWfWT3Znb3LnNgpgjZu3/m/77//2Z25p8z0PxmwMQDGNgbG/oXn9dCoNxMl0YzByO4KsdbJB3zC5bhEv5K7RQMmkNgGJ3oxh8Ff4GJjQlYzFXBVpzACXSgBzO5cBg4Sgo3c/WtdypOQMBOATBJWsOYpeaX4wznxFiineA3BVqhztT8Bfo+O8d/GiiBW7Q9HLOvcZzFeTkUJRCNvs1sWJJJLPCSYLdGABfIQnMJqAKJy87m8mrhc54s6CFgcnYYnPx+s/GKBKJZUWSTn4CJnQTxJJcUBN6y3+ZQ30+cB+sVMUfMFggsZMCLgAYJ5RFsC/rknwMtAJNnyHwExrCN787xPA4b9ClxJXqedcxsBASW0EElq5NM9qovw/qgWQmkbdwyYZQaZyChTmAU/Yz/G6lzmYGzXzLwk2arGpiuVD25qROwcJCub8vwSb4Pdp4CU7TdlGhv4DTPCVdUfM0vgbA00s8RYIbaksAByuKuG1UThwhyMjXCmgk4S+H2GLgqwTsrmNcaRd/5XhsBXyICvYTxLgQ4kKqJGgE2lq52AuEoVzGA83jhkhnHSZ7XrkonpzYCwG/KY4UL0KtWlPkcHFxk0vGZaSQALrXJx0MV6bQFAU8+UY0LXOanp6TSaRsCNh7zjLu7vuI4pUan5KjetEooWCq9LKjqPkyvLQiox3uuZUsICOyhp4dFcCn3rWGIpV+niidt6nuhvHKQQkgwaMl22vFjcjdqcFfaymbjPheAfaousmXAy0Iv/wbbBFVPanZ9HH9azdSzyk4gy+jzYPsfEhDujcpQLLjBXt//wuSVk8GrJ7/ZLAZY7rN3ri5xy1FhQcuTZe5AZuvo6XNjojJsfCTAnjqgRof/LgL+oYuAB8zGI4IddP83sYXxex2JYvD27eTn3v2ZiTu028XnDToz4Ed2ikD6EzMxwhuxrvpdcIVgS3ifaKdJQnFplLlNG+SB5WkE5NwbmGlmrC9io4WAJ4XkI2G04rCalt8SIh+UVbQR8FFZGOFcuBiLfHxRMCi1G7QJr1pODXRUzyROErPAdX58LLIcmtyIWTiSIqvvJLBGDwFf286SaXCCCsoprHdHRud417UUH1zwNd4JT7D+E/0pwj322R8h0IF1EbIVlh4VfxSS9T0wS0fJl9JV7OBkflav/6RXsP25Ep4D8cy25DzgOwlHOHDcTeBfY5I5zudroc9maBO8mZtE4B89aS5AExeA0QAAAABJRU5ErkJggg==
// @license GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright 2019, Lucas V. Araujo
// ==/UserScript==
/*
	This script is quite simple and does not offer a general solution to ensure a secure connection, but should work well for most of the sites.
*/
if (window.location.protocol == 'http:' && window.location.indexOf('#SSL') == -1) { // Checks if the script already tried to update the connection
	// If not, the script redirects to https version of the site and add a fragment identifier (#SSL) to indicate that the url has been modified
	// Note that even if the connection is not updated, the identifier will remain there, otherwise if the site does not support SSL, the script will try to update the page infinitely.
  	window.location = "https://" + window.location.href.substring(window.location.protocol.length, window.location.href.length) + '#SSL'; //Updates the protocol
	window.location.reload(); // Refresh the location
}