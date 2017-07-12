var index = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    index++;
    if (x.length < index) {
		index = 1
	}
    x[index-1].style.display = "block";
    setTimeout(carousel, 10000);
}
