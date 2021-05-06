  const reviews = [
      {
        id: 1,
        name:"Susan Smith",
        job: "Web Developer",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:"I'm baby fixie irony asymmetrical iPhone flannel YOLO. IPhone tote bag stumptown synth unicorn humblebrag authentic. Raclette kombucha tofu 3 wolf moon. Venmo hoodie ramps swag tote bag live-edge meditation. La croix man braid chicharrones artisan prism. Mixtape banh mi lomo disrupt coloring book listicle, small batch shabby chic chia yuccie. Freegan street art williamsburg, ugh migas plaid art party mixtape distillery meh affogato health goth chambray celiac taxidermy."
      },

      {
        id: 2,
        name:"Anna Johnson",
        job: "Web Designer",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:"Vexillologist normcore franzen narwhal vice etsy fashion axe pok pok whatever live-edge plaid sartorial blue bottle. Cloud bread tumblr scenester sustainable +1 cliche taxidermy glossier vape roof party squid literally. Artisan YOLO ethical, yuccie edison bulb kitsch hammock biodiesel etsy normcore woke umami paleo kogi tofu. Live-edge adaptogen vaporware plaid neutra pork belly. Kinfolk schlitz copper mug, 3 wolf moon post-ironic keytar hot chicken keffiyeh salvia helvetica. Selfies blue bottle meggings pitchfork pickled."
      },

      {
        id: 3,
        name:"Peter Jones",
        job: "Intern",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:"Direct trade pitchfork cred lumbersexual fingerstache thundercats synth seitan palo santo sartorial. Af williamsburg distillery, flannel scenester kombucha vice mixtape selfies ramps everyday carry yuccie synth retro kickstarter. Pinterest brunch knausgaard raclette hashtag XOXO live-edge try-hard tousled direct trade forage green juice. Keytar pok pok wayfarers air plant health goth, enamel pin vexillologist shoreditch distillery letterpress franzen meggings schlitz."
      },

      {
        id: 4,
        name:"Bill Anderson",
        job: "The Boss",
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:"Vegan bitters typewriter adaptogen beard. You probably haven't heard of them scenester prism leggings jean shorts pork belly umami. Umami sartorial chicharrones whatever, raw denim poke man braid cronut photo booth meggings. Master cleanse affogato hashtag asymmetrical photo booth lo-fi. DIY godard live-edge, kogi single-origin coffee hammock everyday carry viral coloring book skateboard."
      }

  ];

//get all items from html
//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0; 

//load initial item (add event listener to the window object) DOMContentLoaded is the event name

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);

//access the first item 

// const item = reviews[currentItem];
//this is assigning a unique image to each of the profiles in the reviews array

// img.src = item.img;
// author.textContent = item.name;
// job.textContent = item.job;
// info.textContent = item.text; 

//code refactor---create a function that takes care of getting the item and changing the values 

//show person based on item :

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text; 
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0; 
    }
    showPerson(currentItem);
})

//show previous person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1; 
    }
    showPerson(currentItem);
})

// show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);
})


});



