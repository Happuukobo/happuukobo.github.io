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


document.write('<object id="video1" classid="clsid:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA" height="240" width="320"');
document.write('codebase="http://www.digitalstage.net/go/plugins/realplayer.html">');
document.write('<param name="controls" value="imagewindow">');
document.write('<param name="console" value="clip">');
document.write('<param name="background" value="D7E2E4">');
document.write('<param name="loop" value="false">');
document.write('<param name="src" value="' + n + '">');
document.write('<embed type="audio/x-pn-realaudio" pluginspage="http://www.digitalstage.net/go/plugins/realplayer.html" console="clip" controls="imagewindows" height="240" width="320" background="D7E2E4" loop="false">');
document.write('</embed>');
document.write('</object>');

document.write('<br>');

document.write('<object id="video1" classid="clsid:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA" height="30" width="320"');
document.write('codebase="http://www.digitalstage.net/go/plugins/realplayer.html">');
document.write('<param name="controls" value="ControlPanel">');
document.write('<param name="console" value="clip">');
document.write('<param name="autostart" value="true">');
document.write('<param name="src" value="' + n + '">');
document.write('<param name="background" value="D7E2E4">');
document.write('<param name="loop" value="false">');
document.write('<embed src="' + n + '" type="audio/x-pn-realaudio" pluginspage="http://www.digitalstage.net/go/plugins/realplayer.html" console="clip" controls="ControlPanel" height="30" width="320" autostart="true" background="D7E2E4" loop="false">');
document.write('</embed>');
document.write('</object> ');