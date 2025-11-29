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
        serprofile: "https://picsum.photos/200?3",
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
    },
    {
        isMuted: true,
        username: "gaming_world",
        likeCount: 13000,
        isLiked: false,
        commentCount: 500,
        caption: "GTA 6 trailer reaction 🤯",
        video: "./reels/video1.mp4",
        userprofile: "https://picsum.photos/200?6",
        shareCount: 200,
        isFollowed: false
    },
    {
        isMuted: true,
        username: "daily_quotes",
        likeCount: 4300,
        isLiked: true,
        commentCount: 60,
        caption: "Success starts with your mind 🧠🚀",
        video: "./reels/video2.mp4",
        userprofile: "https://picsum.photos/200?7",
        shareCount: 30,
        isFollowed: false
    },
    {
        isMuted: true,
        username: "street_dancer",
        likeCount: 16200,
        isLiked: true,
        commentCount: 430,
        caption: "Dance is life 🔥",
        video: "./reels/video3.mp4",
        userprofile: "https://picsum.photos/200?8",
        shareCount: 150,
        isFollowed: true
    },
    {
        isMuted: true,
        username: "nature_clicks",
        likeCount: 7200,
        isLiked: false,
        commentCount: 110,
        caption: "Early morning forest walk 🌿",
        video: "./reels/video4.mp4",
        userprofile: "https://picsum.photos/200?9",
        shareCount: 40,
        isFollowed: false
    },
    {
        isMuted: true,
        username: "coding_with_ace",
        likeCount: 9900,
        isLiked: true,
        commentCount: 260,
        caption: "Javascript tips for beginners 💡",
        video: "./reels/video5.mp4",
        userprofile: "https://picsum.photos/200?10",
        shareCount: 80,
        isFollowed: true
    }
];

const allReels = document.querySelector('.all-reels');

function addData() {
    let sum = 0;
    reels.forEach((elem, idx) => {
        sum += `<div class="reel">
                    <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
                    <div id="${idx}" class="mute">
                        ${elem.isMuted ? `<i class="ri-volume-mute-fill"></i> `: `<i class="ri-volume-up-fill"></i>`}
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id="${idx}" class="follow">${elem.isFollowed ? "Following" : "Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon icon">${elem.isLiked ? `<i class="ri-heart-3-fill love"></i>` : `<i
                                    class="ri-heart-3-line"></i>`}</h4>
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
};

addData();

allReels.addEventListener('click', (dets) => {

    if (dets.target.className === "like") {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        } else {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
        addData();
    }

    if (dets.target.className === 'follow') {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true
        } else {
            reels[dets.target.id].isFollowed = false
        }
        addData();
    }

    if (dets.target.className === 'mute') {
        if (!reels[dets.target.id].isMuted) {
            reels[dets.target.id].isMuted = true
        } else {
            reels[dets.target.id].isMuted = false
        }
        addData();
    }

})