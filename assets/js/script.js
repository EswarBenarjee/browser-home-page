let getRandomInt = () => {
  return Math.floor(Math.random() * 9 + 1);
};

let backgroundGenerator = () => {
  document.body.style.backgroundImage =
    "url('assets/img/body/background/bg" + getRandomInt() + ".png')";
};
backgroundGenerator();

let greeting = () => {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    greetingDiv.innerHTML = "morning";
  } else if (hour < 18) {
    greetingDiv.innerHTML = "afternoon";
  } else {
    greetingDiv.innerHTML = "evening";
  }
};
let greetingDiv = document.getElementById("greeting");
greeting();

let randomGradient = () => {
  let colors = [
    "#ff00ff",
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0000ff",
    "#4b0082",
    "#ee82ee",
  ];
  let color1 = colors[Math.floor(Math.random() * colors.length)];
  let color2 = colors[Math.floor(Math.random() * colors.length)];

  return `linear-gradient(45deg, ${color1}, ${color2})`;
};
// document.getElementById("searchName").style.backgroundImage = randomGradient();

let recents = [
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
    logo: "bootstrap",
  },
  {
    name: "Canva",
    link: "https://www.canva.com/",
    logo: "canva",
  },
  {
    name: "Codepen",
    link: "https://codepen.io/your-work",
    logo: "codepen",
  },
  {
    name: "Font Awesome",
    link: "https://fontawesome.com/search?s=solid%2Cbrands",
    logo: "fontawesome",
  },
  {
    name: "Google",
    link: "http://google.com/",
    logo: "google",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/eswarbenarjeenaidu/",
    logo: "linkedin",
  },
  {
    name: "Neetcode",
    link: "https://neetcode.io/practice",
    logo: "neetcode",
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/playlist/3p2tAkOvJqOPYjttRxEQD5",
    logo: "spotify",
  },
  {
    name: "Youtube",
    link: "https://youtu.be/",
    logo: "youtube",
  },
];

let recentsDiv = document.getElementById("recentsDiv");

let searching = () => {
  let searchStr = searchInput.value;

  maxCards = recents.length;
  count = 5;

  recentsDiv.innerHTML = "";
  for (i = 0; i < recents.length && count > 0; i++) {
    if (!recents[i]["name"].toLowerCase().includes(searchStr.toLowerCase())) {
      continue;
    }

    let card = document.createElement("a");
    card.classList = "card";
    card.href = recents[i]["link"];
    card.target = "_blank";

    let logo = document.createElement("img");
    logo.src = "assets/img/body/recents/" + recents[i]["logo"] + ".png";

    let text = document.createElement("h6");
    text.innerText = recents[i]["name"];

    card.appendChild(logo);
    card.appendChild(text);

    recentsDiv.appendChild(card);
    count--;
  }
};
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", searching);
searching();
