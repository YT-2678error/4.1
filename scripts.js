
function poppapage(selectpage){
    var span = document.getElementsByClassName("close");
    var i;

    selectpage.style.display="block";

    for(i=0; i <span.length; i++){
        span[i].onclick = function(){
            selectpage.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == selectpage) {
          selectpage.style.display = "none";
        }
      }

}

