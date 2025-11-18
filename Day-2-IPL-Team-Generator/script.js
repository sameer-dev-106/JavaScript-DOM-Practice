let arr = [
    { team: 'CSK', primary: 'gold', secondary: 'navy', captain: 'MS Dhoni', fullname: 'Chennai Super Kings', trophies: 5 },
    { team: 'MI', primary: 'navy', secondary: 'blue', captain: 'Hardik Pandya', fullname: 'Mumbai Indians', trophies: 5 },
    { team: 'RCB', primary: 'red', secondary: 'gole', captain: 'Rajat Patidar', fullname: 'Royal Challengers Bengaluru', trophies: 1 },
    { team: 'KKR', primary: 'purple', secondary: 'gold', captain: 'Sheryas Iyer', fullname: 'Kolkata Knight Riders', trophies: 3 },
    { team: 'RR', primary: 'crimson', secondary: 'gold', captain: 'Sanju Samson', fullname: 'Rajasthan Royals', trophies: 1 },
    { team: 'SRH', primary: 'orange', secondary: 'black', captain: 'Pat Cummins', fullname: 'Sunrisers Hyderabad', trophies: 1 },
    { team: 'PBKS', primary: 'crimson', secondary: 'silver', captain: 'Shikhar Dhawan', fullname: 'Punjab Kings', trophies: 0 },
    { team: 'DC', primary: 'navy', secondary: 'crimson', captain: 'Rishabh Pant', fullname: 'Delhi Capitals', trophies: 0 },
    { team: 'GT', primary: 'teal', secondary: 'gold', captain: 'Shubman Gill', fullname: 'Gujarat Titans', trophies: 1 },
    { team: 'LSG', primary: 'skyblue', secondary: 'orange', captain: 'KL Rahul', fullname: 'Lucknow Super Giants', trophies: 0 }
]

let bd = document.querySelector('body')
let tn = document.querySelector('#tmn');
let fln = document.querySelector('h2');
let cn = document.querySelector('#cn');
let tp = document.querySelector('span');
let btn = document.querySelector('button');

// btn.innerHTML = "jjj"

btn.addEventListener('click', function(){
    let winner = arr[Math.floor(Math.random()*arr.length)];

    let c1 = winner.primary
    let c2 = winner.secondary

    tn.innerHTML = winner.team ;
    fln.innerHTML = winner.fullname ;
    cn.innerHTML = winner.captain ;
    tp.innerHTML = winner.trophies ;

    bd.style.background = `linear-gradient(${c1}, ${c2})`
    
})
