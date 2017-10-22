var old_link = -1;

function vidLoc(id,link,type,play)
{
	if ( old_link > 0 ) {
		if ( old_link%2 != 0 ) {
			document.getElementById('ep'+old_link).className = 'ep1';
		} else {
			document.getElementById('ep'+old_link).className = 'ep2';
		}
	}

	document.getElementById('ep'+link).className = 'eps';
	
	old_link = link * 1;
	
if ( type == 1 ) {
document.getElementById('player'+play).innerHTML = '<iframe src="'+id+'" width="574" height="400" frameborder="0"></iframe>';

	}
if ( type == 2 ){

document.getElementById('player'+play).innerHTML = '<object width="574" height="400"><param name="movie" value="'+id+'"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"><param name="allowFullScreen" value="true"><embed src="'+id+'" allowFullScreen="true" wmode="transparent" width="574" height="400" type="application/x-shockwave-flash"></object>';
}
if ( type == 3 ){
document.getElementById('player'+play).innerHTML = '<iframe src="'+id+'" width="573" height="400" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen scrolling="no"></iframe>';
} 
if ( type == 4 ){
document.getElementById('player'+play).innerHTML = '<iframe title="Kiwi player" width="574" height="400" src="'+id+'" frameborder="0" allowfullscreen></iframe>';
}
if ( type == 5 ){
document.getElementById('player'+play).innerHTML = '<iframe src="'+id+'" width="574" height="400" frameborder="0"></iframe>';
}
if ( type == 6 ){
document.getElementById('player'+play).innerHTML = '<iframe width="574" height="400" src="'+id+'" frameborder="0" allowfullscreen></iframe>';
}
}