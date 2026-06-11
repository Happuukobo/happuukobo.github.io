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


document.write('<object id="mediaplayer1" width="320" height="285" ');
document.write('	classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95"');
document.write('	codebase="http://www.digitalstage.net/go/plugins/windowsmedia.html"');
document.write('        type="application/x-oleobject">');
document.write('  <param name="autostart" value="true">');
document.write('  <param name="filename" value="' + n + '">');
document.write('  <param name="showcontrols" value="true">');
document.write('  <param name="showstatusbar" value="false">');
document.write('  <embed type="application/x-mplayer2" ');
document.write('	pluginspage="http://www.digitalstage.net/go/plugins/windowsmedia.html"');
document.write('	src="' + n + '"');
document.write('	name="mediaplayer1"');
document.write('	width="320"');
document.write('	height="285"');
document.write('	autostart="true"');
document.write('	showcontrols="true">');
document.write('  </embed>');
document.write('</object> ');