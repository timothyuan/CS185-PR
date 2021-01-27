function selected(option){
    var option = document.getElementById(option);
    option.style.backgroundColor = "#ddd";
    option.style.color = "black";
}

function openImage(img) {
    document.getElementById("modal-image").src = img;
    var modal = document.getElementById("imageModal");
    modal.style.display = "block";
    modal.addEventListener("click", e=>{
        if(e.target != e.currentTarget)
            return;
        closeImage();
    })
}
  
function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}


function openVideo(vid) {
    var video = document.getElementById("modal-video");
    var source = document.createElement("source"); 
    source.src = vid;
    source.type = "video/mp4";
    video.appendChild(source);
    var modal = document.getElementById("videoModal");
    modal.style.display = "block";
    modal.addEventListener("click", e=>{
        if(e.target != e.currentTarget)
            return;
        closeVideo();
    })
}
  
function closeVideo() {
    document.getElementById("videoModal").style.display = "none";
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function validateEmail(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    inputText = document.getElementById("emailInput");
    alert = document.getElementById("alert");
    if(inputText.value.match(mailformat)){
        alert.innerHTML = "Email successfully recorded";
    }else{
        alert.innerHTML = "Invalid email address";
    }
    alert.style.display = "block";
}