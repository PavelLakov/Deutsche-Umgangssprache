let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

let modal = document.getElementById("videoModal");
let modalVideo = document.getElementById("modalVideo");
let videoSource = document.getElementById("videoSource");
let span = document.getElementsByClassName("close")[0];
let backButton = document.getElementById("backButton");

document.querySelectorAll('.see-more').forEach(button => {
    button.onclick = function() {
        videoSource.src = button.getAttribute('data-video');
        modalVideo.load();
        modal.style.display = "block";
    };
});

span.onclick = function() {
    modal.style.display = "none";
    modalVideo.pause();
};

backButton.onclick = function() {
    modal.style.display = "none";
    modalVideo.pause();
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalVideo.pause();
    }
};
