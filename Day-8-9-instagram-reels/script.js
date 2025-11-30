const reels = [
    {
        isMuted: true,
        username: "travel_with_ari",
        likeCount: 12400,
        isLiked: false,
        commentCount: 320,
        caption: "Sunset vibes in Bali 🌅✨",
        video: "./reels/video1.mp4",
        userprofile: "https://picsum.photos/200?1",
        shareCount: 90,
        isFollowed: true
    },
    {
        isMuted: true,
        username: "foodie_rahul",
        likeCount: 7800,
        isLiked: true,
        commentCount: 140,
        caption: "Paneer tikka recipe🔥 try it now!",
        video: "./reels/video2.mp4",
        userprofile: "https://picsum.photos/200?2",
        shareCount: 60,
        isFollowed: false
    },
    {
        isMuted: true,
        username: "gym_freak",
        likeCount: 15600,
        isLiked: true,
        commentCount: 410,
        caption: "No excuses, just results 💪",
        video: "./reels/video3.mp4",
        userprofile: "https://picsum.photos/200?3",
        shareCount: 120,
        isFollowed: true
    },
    {
        isMuted: true,
        username: "tech_by_sana",
        likeCount: 5400,
        isLiked: false,
        commentCount: 80,
        caption: "Best laptop under 50k for coding 👨‍💻",
        video: "./reels/video4.mp4",
        userprofile: "https://picsum.photos/200?4",
        shareCount: 45,
        isFollowed: false
    },
    {
        isMuted: true,
        username: "artistic_soul",
        likeCount: 9100,
        isLiked: true,
        commentCount: 220,
        caption: "Made this painting in 4 hours 🎨",
        video: "./reels/video5.mp4",
        userprofile: "https://picsum.photos/200?5",
        shareCount: 70,
        isFollowed: true
    }
];

const allReels = document.querySelector('.all-reels');
let currentVideoElement = null;

function addData() {
    let sum = "";
    reels.forEach((elem, idx) => {
        sum += `<div class="reel" data-index="${idx}">
                            <video loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
                            <div class="mute" data-index="${idx}">
                                ${elem.isMuted ? `<i class="ri-volume-mute-fill"></i>` : `<i class="ri-volume-up-fill"></i>`}
                            </div>
                            <div class="bottom">
                                <div class="user">
                                    <img src="${elem.userprofile}" alt="">
                                    <h4>${elem.username}</h4>
                                    <button class="follow" data-index="${idx}">${elem.isFollowed ? "Following" : "Follow"}</button>
                                </div>
                                <h3>${elem.caption}</h3>
                            </div>
                            <div class="right">
                                <div class="like" data-index="${idx}">
                                    <h4 class="like-icon icon">${elem.isLiked ? `<i class="ri-heart-3-fill love"></i>` : `<i class="ri-heart-3-line"></i>`}</h4>
                                    <p>${elem.likeCount}</p>
                                </div>
                                <div class="comment">
                                    <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                                    <p>${elem.commentCount}</p>
                                </div>
                                <div class="share">
                                    <h4 class="share-icon icon"><i class="ri-share-line"></i></h4>
                                    <p>${elem.shareCount}</p>
                                </div>
                                <div class="menu">
                                    <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                                </div>
                            </div>
                        </div>`;
    });

    allReels.innerHTML = sum;
    attachEvents();
}

function attachEvents() {
    let videos = document.querySelectorAll('video');

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videos.forEach(v => {
                    v.pause();
                });

                const reelIndex = entry.target.closest('.reel').dataset.index;
                entry.target.muted = reels[reelIndex].isMuted;
                entry.target.play();
                currentVideoElement = entry.target;
            }
        });
    }, { threshold: 0.7 });

    videos.forEach(video => observer.observe(video));

    // Single tap to pause/play
    videos.forEach(video => {
        let lastTap = 0;
        video.addEventListener('click', (e) => {
            const currentTime = new Date().getTime();
            const tapGap = currentTime - lastTap;

            if (tapGap < 300 && tapGap > 0) {
                // Double tap detected
                handleDoubleTap(e, video);
            } else {
                // Single tap
                if (video.paused) video.play();
                else video.pause();
            }

            lastTap = currentTime;
        });
    });
}

function handleDoubleTap(e, video) {
    const reelElement = video.closest('.reel');
    const index = reelElement.dataset.index;

    // Add like if not already liked
    if (!reels[index].isLiked) {
        reels[index].isLiked = true;
        reels[index].likeCount++;
        updateLikeButton(index);
    }

    // Show heart animation
    showHeartBurst(reelElement);
}

function showHeartBurst(reelElement) {
    const heartBurst = document.createElement('div');
    heartBurst.className = 'heart-burst';
    heartBurst.innerHTML = '<i class="ri-heart-3-fill"></i>';
    reelElement.appendChild(heartBurst);

    setTimeout(() => {
        heartBurst.remove();
    }, 800);
}

function updateLikeButton(index) {
    const likeBtn = document.querySelector(`.like[data-index="${index}"]`);
    const elem = reels[index];
    likeBtn.querySelector('.like-icon').innerHTML = elem.isLiked ?
        `<i class="ri-heart-3-fill love"></i>` :
        `<i class="ri-heart-3-line"></i>`;
    likeBtn.querySelector('p').textContent = elem.likeCount;
    likeBtn.querySelector('i').classList.add('like-animation');
}

function updateFollowButton(index) {
    const followBtn = document.querySelector(`.follow[data-index="${index}"]`);
    followBtn.textContent = reels[index].isFollowed ? "Following" : "Follow";
}

function updateMuteButton(index) {
    const muteBtn = document.querySelector(`.mute[data-index="${index}"]`);
    muteBtn.innerHTML = reels[index].isMuted ?
        `<i class="ri-volume-mute-fill"></i>` :
        `<i class="ri-volume-up-fill"></i>`;
}

// Event delegation for all buttons
allReels.addEventListener('click', (e) => {
    // Like button
    const likeBtn = e.target.closest('.like');
    if (likeBtn) {
        const id = parseInt(likeBtn.dataset.index);
        reels[id].isLiked = !reels[id].isLiked;
        reels[id].isLiked ? reels[id].likeCount++ : reels[id].likeCount--;
        updateLikeButton(id);
        return;
    }

    // Follow button
    const followBtn = e.target.closest('.follow');
    if (followBtn) {
        const id = parseInt(followBtn.dataset.index);
        reels[id].isFollowed = !reels[id].isFollowed;
        updateFollowButton(id);
        return;
    }

    // Mute button - YE FIX HUA HAI
    const muteBtn = e.target.closest('.mute');
    if (muteBtn) {
        const id = parseInt(muteBtn.dataset.index);
        const reelElement = muteBtn.closest('.reel');
        const video = reelElement.querySelector('video');

        // Toggle mute state
        reels[id].isMuted = !reels[id].isMuted;
        video.muted = reels[id].isMuted;

        // Update button icon
        updateMuteButton(id);

        // Pulse animation
        muteBtn.classList.add('pulse');
        setTimeout(() => muteBtn.classList.remove('pulse'), 300);
        return;
    }
});

// Initialize
addData();