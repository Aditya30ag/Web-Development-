async function getsongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let i = 0; i < as.length; i++) {
    const elements = as[i];
    if (elements.href.endsWith(".mp3")) {
      songs.push(elements.href);
    }
  }
  return songs;
}
let button = document.querySelector(".playbar .main");
let icon = document.querySelector(".playbar .main i");
let wave = document.querySelector(".wave");
let line = document.querySelector(".line");
let songinfo = document.querySelector(".songinfo");
let greenbutton = document.querySelectorAll(".l");

async function main() {
  let songs = await getsongs();
  console.log(songs);
  const random = Math.floor(Math.random() * 6);
  var audio = new Audio(songs[random]);
  button.addEventListener("click", () => {
    songinfo.innerHTML = `Enjoy your song`;

    if (audio.paused || audio.currenTime <= 0) {
      audio.play();
      icon.classList.remove("fa-circle-play");
      icon.classList.add("fa-circle-pause");
      wave.style.opacity = "1";
      songinfo.style.opacity = "1";
      setInterval(function () {
        let percentage = (audio.currentTime / audio.duration) * 100;
        line.value = percentage;
      }, 1000);
    } else {
      audio.pause();
      icon.classList.remove("fa-circle-pause");
      icon.classList.add("fa-circle-play");
      wave.style.opacity = "0";
      songinfo.style.opacity = "0";
    }
  });
  greenbutton.forEach(function (element) {
    element.addEventListener("click", (e) => {
      if (element.classList[2] == "fa-circle-play") {
        songinfo.innerHTML = `Enjoy your song`;
        let index = e.target.id;
        audio.play();
        line.value = 0;
        audio.currentTime = 0;
        element.classList.remove("fa-circle-play");
        element.classList.add("fa-circle-pause");
        icon.classList.remove("fa-circle-play");
        icon.classList.add("fa-circle-pause");
        wave.style.opacity = "1";
        songinfo.style.opacity = "1";
        setInterval(function () {
          let percentage = (audio.currentTime / audio.duration) * 100;
          line.value = percentage;
        }, 1000);
      } else {
        audio.pause();
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
        icon.classList.remove("fa-circle-pause");
        icon.classList.add("fa-circle-play");
        wave.style.opacity = "0";
        songinfo.style.opacity = "0";
      }
    });
  });
  line.addEventListener("click", () => {
    audio.currentTime = (audio.duration * line.value) / 100;
  });
}
main();
