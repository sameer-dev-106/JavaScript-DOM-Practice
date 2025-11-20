const user = [
    {
        fullName: "Aman Sharma",
        profession: "Web Developer",
        image: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
        tags: ["JavaScript", "React", "Problem Solver"]
    },
    {
        fullName: "Priya Mehta",
        profession: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        tags: ["Creativity", "Figma", "Branding"]
    },
    {
        fullName: "Rahul Verma",
        profession: "Digital Marketer",
        image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww",
        tags: ["SEO", "Ads", "Strategy"]
    },
    {
        fullName: "Sonal Gupta",
        profession: "UX/UI Designer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8fDA%3D",
        tags: ["User Research", "Wireframes", "Figma"]
    }
];

let main = document.querySelector('main');

sum = '';

user.forEach(function(val){
    let tagHTML = "";
    val.tags.forEach(t => {
        tagHTML += `<span class="tag">${t}</span>`;
    });

    sum += `<div class="card">
        <img src=${val.image} />
        <h2>${val.fullName}</h2>
        <h3>${val.profession}</h3>
        <div class="tags">${tagHTML}</div>
    </div>`;

    // sum += `<div class="card">
    //         <img src=${val.image} alt="">
    //         <h2>${val.fullName}</h2>
    //         <h3>${val.profession}</h3>
    //         <p>${val.tags.join(', ')}</p>
    //     </div>`;
});

main.innerHTML = sum;
