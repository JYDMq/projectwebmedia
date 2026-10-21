$(document).ready(function() {
$('#txt1').hide();
$('#txt2').hide();
$('#txt3').hide();
$('#txt4').hide();
$('#txt5').hide();
$('#pause').hide();

let isScrubbing = false;
	
function seekToMousePosition(event) {
	let offsetLeft = $('#progressContainer').offset().left;
	let containerWidth = $('#progressContainer').width();
	let videoDuration = $('#vid').get(0).duration;
	let clickX = event.pageX - offsetLeft;
	let fraction = Math.min(Math.max(clickX / containerWidth, 0), 1); 
	let newTime = fraction * videoDuration;

	$('#vid').get(0).currentTime = newTime;
	$('#progressBar').css({
		width: (fraction * 100) + '%'
	});
}

$('#progressContainer').on('click', function(event) {
	seekToMousePosition(event);
});

$('#progressContainer').on('mousedown', function(event) {
	isScrubbing = true;
	seekToMousePosition(event);
});

$(document).on('mousemove', function(event) {
	if (isScrubbing) {
		seekToMousePosition(event);
	}
});
$(document).on('mouseup', function() {
	isScrubbing = false;
});
});