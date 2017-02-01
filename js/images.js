// JavaScript Document

var modal = document.getElementById('myModal');

var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var count = 0;
for(var i=0; i<img.length; i++)
{
	img[i].onclick = function(){
    modal.style.display = "block";
	modal.onclick = function()
	{
		changeElement(modalImg,1);
	}

    modalImg.src = this.src.concat(".01.png");
	
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
	}
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  changeElement(modalImg, 0);
  count = 0;
}

function changeElement(el, i) {
	if (el.style.maxWidth == "70%" && i == 1 && count>0)
	{
		el.style.maxWidth = "90%";
		el.style.maxHeight = "none";
	}
	else
	{
		el.style.maxWidth = "70%";
		el.style.maxHeight = "800px";	
	}
	if (count == 0)
	{
		count++;	
	}

}