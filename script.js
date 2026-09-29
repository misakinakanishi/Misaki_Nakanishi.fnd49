"use strict";

const images = document.querySelectorAll(".gallery img");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const caption = document.getElementById("caption");

const closeBtn = document.getElementById("close");

const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");

const followers = document.getElementById("followers");
const followBtn = document.getElementById("follow-btn");

let followerCount = 999;
let followed = false;

const likes = {};
let currentImage;


followBtn.addEventListener("click", function() {

    if (!followed) {

        followerCount++;
        followers.textContent = followerCount;

        followBtn.textContent = "フォロー中";
        followed = true;

    } else {

        followerCount--;
        followers.textContent = followerCount;

        followBtn.textContent = "フォロー";
        followed = false;

    }

});


images.forEach(function(img){

    img.addEventListener("click", function(){
        currentImage = img.src;
        if(likes[currentImage] === undefined){
            likes[currentImage] = 0;
        }
        modal.classList.remove("hidden");
        modalImage.src = img.src;
        caption.textContent = img.dataset.caption;
        likeCount.textContent =
            likes[currentImage] + " いいね";
    });

});

likeBtn.addEventListener("click", function(){
    likes[currentImage]++;
    likeCount.textContent =
        likes[currentImage] + " いいね";
});

closeBtn.addEventListener("click", function() {
    modal.classList.add("hidden");
});
