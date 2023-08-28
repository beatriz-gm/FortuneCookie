// variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#cookie")
let luckyMessage = document.querySelector("#luckyMessage")
let anotherCookie = document.querySelector("#anotherCookie")
const messages = [
  `If you've failed, congratulations, most people don't even try!`,
  `It's okay if your heart needs more time to accept what your head already knows.`,
  `Make sure it brings you PEACE, not problems.`,
  `If you don't sacrifice for what you want, what yoou want becomes the sacrifice.`,
  `It's Okay if you don't know how to move on, start with something easier(like not going back!)`,
  `Set boundaries, be careful with what you tolerate, you are teaching them how to treat you`,
  `Your biggest limitation is your mind!`,
  `You should not climb mountains so that the world sees you, but rather so that you see the world`,
];

// events
cookie.addEventListener('click', anotherOne)
anotherCookie.addEventListener('click', anotherOne)

//functions
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function anotherOne() {
  const randomIndex = Math.floor(Math.random() * messages.length)
  const randomMessage = messages[randomIndex]

  screen2.querySelector("#luckyMessage").innerText = randomMessage
  toggleScreen()
}