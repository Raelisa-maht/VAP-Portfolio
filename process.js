console.clear();

var processGraphs = document.querySelectorAll('.process polygon');
var processDetails = document.querySelectorAll('.process-details > div');
var processGraphMouseover = function (event) {
	for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
		if (processGraphs[pg] === event.target && event.type === 'mouseover') {
			processGraphs[pg].style.opacity = 1;
		} else {
			processGraphs[pg].style.opacity = 0.5;
		}
	}
	for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
		if (processDetails[pd].classList.contains(event.target.getAttribute('class')) && event.type === 'mouseover') {
			processDetails[pd].style.opacity = 1;
		} else {
			processDetails[pd].style.opacity = 0.5;
		}
	}
};
var processGraphMouseout = function (event) {
	for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
		processGraphs[pg].removeAttribute('style');
	}
	for (pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
		processDetails[pd].removeAttribute('style');
	}
};
for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
	processGraphs[pg].addEventListener('mouseover', processGraphMouseover);
	processGraphs[pg].addEventListener('mouseout', processGraphMouseout);
}