const reels = [
    {
        username: "travel_with_ari",
        likeCount: 12400,
        isLiked: false,
        commentCount: 320,
        caption: "Sunset vibes in Bali 🌅✨",
        video: "https://plus.unsplash.com/premium_photo-1661629259850-9a893425f1f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd29tZW58ZW58MHx8MHx8fDA%3D",
        userprofile: "https://picsum.photos/200?1",
        shareCount: 90,
        isFollowed: true
    },
    {
        username: "foodie_rahul",
        likeCount: 7800,
        isLiked: true,
        commentCount: 140,
        caption: "Paneer tikka recipe🔥 try it now!",
        video: "https://images.unsplash.com/photo-1568819317551-31051b37f69f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd29tZW58ZW58MHx8MHx8fDA%3D",
        userprofile: "https://picsum.photos/200?2",
        shareCount: 60,
        isFollowed: false
    },
    {
        username: "gym_freak",
        likeCount: 15600,
        isLiked: true,
        commentCount: 410,
        caption: "No excuses, just results 💪",
        video: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd29tZW58ZW58MHx8MHx8fDA%3D",
        userprofile: "https://picsum.photos/200?3",
        shareCount: 120,
        isFollowed: true
    },
    {
        username: "tech_by_sana",
        likeCount: 5400,
        isLiked: false,
        commentCount: 80,
        caption: "Best laptop under 50k for coding 👨‍💻",
        video: "https://images.unsplash.com/photo-1515161318750-781d6122e367?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        userprofile: "https://picsum.photos/200?4",
        shareCount: 45,
        isFollowed: false
    },
    {
        username: "artistic_soul",
        likeCount: 9100,
        isLiked: true,
        commentCount: 220,
        caption: "Made this painting in 4 hours 🎨",
        video: "https://images.unsplash.com/photo-1512101176959-c557f3516787?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
        userprofile: "https://picsum.photos/200?5",
        shareCount: 70,
        isFollowed: true
    },
    {
        username: "gaming_world",
        likeCount: 13000,
        isLiked: false,
        commentCount: 500,
        caption: "GTA 6 trailer reaction 🤯",
        video: "https://images.unsplash.com/photo-1574539602047-548bf9557352?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        userprofile: "https://picsum.photos/200?6",
        shareCount: 200,
        isFollowed: false
    },
    {
        username: "daily_quotes",
        likeCount: 4300,
        isLiked: true,
        commentCount: 60,
        caption: "Success starts with your mind 🧠🚀",
        video: "https://images.unsplash.com/photo-1723109438209-2f6402e08c7c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
        userprofile: "https://picsum.photos/200?7",
        shareCount: 30,
        isFollowed: false
    },
    {
        username: "street_dancer",
        likeCount: 16200,
        isLiked: true,
        commentCount: 430,
        caption: "Dance is life 🔥",
        video: "https://plus.unsplash.com/premium_photo-1661297485356-2497102824d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
        userprofile: "https://picsum.photos/200?8",
        shareCount: 150,
        isFollowed: true
    },
    {
        username: "nature_clicks",
        likeCount: 7200,
        isLiked: false,
        commentCount: 110,
        caption: "Early morning forest walk 🌿",
        video: "https://images.unsplash.com/photo-1575186083127-03641b958f61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
        userprofile: "https://picsum.photos/200?9",
        shareCount: 40,
        isFollowed: false
    },
    {
        username: "coding_with_ace",
        likeCount: 9900,
        isLiked: true,
        commentCount: 260,
        caption: "Javascript tips for beginners 💡",
        video: "https://images.unsplash.com/photo-1605248259586-a64eb06b6970?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
        userprofile: "https://picsum.photos/200?10",
        shareCount: 80,
        isFollowed: true
    }
];

const reelsContainer = document.querySelector('.all-reels');

let sum = 0;

reels.forEach((elem) => {
    sum += `<div class="reel">
                    <img src="${elem.video}"
                        alt="">
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed ? "Following" : "Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
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

reelsContainer.innerHTML = sum;