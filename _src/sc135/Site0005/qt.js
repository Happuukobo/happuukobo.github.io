var tmp = location.search + "&";

function getData(myN, def) {
	var p1 = tmp.indexOf(myN);
	if (p1 != -1) {
		var p2 = tmp.indexOf('=', p1) + 1;
		var p3 = tmp.indexOf('&', p2);
		return unescape(tmp.substring(p2, p3));
	} else {
		return def;
	}
}
n = getData('file', '');

document.write('<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" width="320" height="256"');
document.write('codebase="http://www.digitalstage.net/go/plugins/quicktime.html">');
document.write('<param name="src" value="' + n + '">');
document.write('<param name="autoplay" value="true">');
document.write('<param name="controller" value="true">');
document.write('<param name="bgcolor" value="#D7E2E4">');
document.write('<param name="loop" value="false">');
document.write('<param name="TYPE" value="video/quicktime">');
document.write('<param name="SCALE" value="ASPECT">');
document.write('<param name="cache" value="true">');
document.write('<embed src="' + n + '"');
document.write('width="320" ');
document.write('height="256" ');
document.write('autoplay="true" ');
document.write('controller="true" ');
document.write('bgcolor="#D7E2E4" ');
document.write('loop="false" ');
document.write('TYPE="video/quicktime" ');
document.write('SCALE="ASPECT" ');
document.write('cache="true" ');
document.write('pluginspage="http://www.digitalstage.net/go/plugins/quicktime.html">');
document.write('</embed>');
document.write('</object>');
