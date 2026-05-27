function createCountdown(targetDate, ids){

  function update(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance < 0){
      return;
    }

    const days = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
    );

    document.getElementById(ids.days).innerHTML = days;
    document.getElementById(ids.hours).innerHTML = hours;
    document.getElementById(ids.minutes).innerHTML = minutes;
    document.getElementById(ids.seconds).innerHTML = seconds;
  }

  update();

  setInterval(update,1000);
}

/* CONTADOR 1 */

createCountdown(
  new Date("May 29, 2026 00:00:00").getTime(),
  {
    days:"d1",
    hours:"h1",
    minutes:"m1",
    seconds:"s1"
  }
);

/* CONTADOR 2 */

createCountdown(
  new Date("May 31, 2026 00:00:00").getTime(),
  {
    days:"d2",
    hours:"h2",
    minutes:"m2",
    seconds:"s2"
  }
);

/* HEARTS */

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💜";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    (Math.random() * 20 + 10) + "px";

  heart.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },10000);
}

setInterval(createHeart,300);