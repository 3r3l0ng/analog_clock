const container = document.querySelector(".container");
const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

let i = 0;
while (i < 60) {
  const pin = document.createElement("div");
  pin.className = "pin";
  container.append(pin);
  i++;
  pin.style.transform = `rotateZ(${6 * i}deg) translateY(-118px)`;
  if (i % 5 == 0) {
    pin.style.width = "5px";
    pin.style.backgroundColor = "gold";
  }
}
let j = 0;
while (j < 6) {
  const nums = document.createElement("div");
  nums.className = "nums";
  container.append(nums);
  const up = document.createElement("div");
  up.className = "up";
  nums.prepend(up);
  const down = document.createElement("div");
  if (j == 0) {
    up.textContent = 12;
  } else {
    up.textContent = j;
  }
  down.className = "down";
  nums.append(down);
  down.textContent = j + 6;
  nums.style.transform = `rotateZ(${30 * j}deg)`;

  up.style.transform = `rotateZ(${j * -30}deg)`;
  down.style.transform = `rotateZ(${j * -30}deg)`;
  j++;
}

const secondMove = (second) => {
  sec.style.transform = `rotateZ(${second * 6}deg)`;
};
const minuteMove = (minute, second) => {
  const secondAngle = second * 0.1;
  min.style.transform = `rotateZ(${minute * 6 + secondAngle}deg)`;
};
const hourMove = (hourTime, minute) => {
  const minuteAngle = minute * 0.5;
  hour.style.transform = `rotateZ(${hourTime * 30 + minuteAngle}deg)`;
};

function clock() {
  const currentTime = new Date();
  const second = currentTime.getSeconds();
  const minute = currentTime.getMinutes();
  let hourTime = currentTime.getHours();
  if (hourTime >= 12) {
    hourTime = hourTime - 12;
  }
  secondMove(second);
  minuteMove(minute, second);
  hourMove(hourTime, minute);
}

setInterval(clock, 1000);
