const $ = (selector) => {
  return document.querySelector(selector);
}

const dot = $('.dot');
const dot2 = $('.dot2');
let showDot = true;

function update(){

  const today = dayjs();
  const hour = today.format('hh');
  const min = today.format('mm');
  const week = today.format('ddd');
  // const sec = today.format('ss');
  const ampm = today.format('A');
  // let weekCheck = today.format('D');
  const weekDay = today.day();
  
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  
  
  document.querySelector(`.day${weekDay + 1}`).classList.add('dayActive');
  document.querySelector(`.day${weekDay + 1}`).textContent = week.toUpperCase();

  let c = 1;
  let j = weekDay - 1;
  while (j >= 0 && j >= weekDay - 2) {
    document.querySelector(`.day${j + 1}`).textContent = daysOfWeek[j];
    document.querySelector(`.day${j + 1}`).classList.add(`day1${c}`);
    c++;
    j--;
  }

  c = 1;
  let k = weekDay + 1;
  while (k <= 6 && k <= weekDay + 2) {
    document.querySelector(`.day${k + 1}`).textContent = daysOfWeek[k];
    document.querySelector(`.day${k + 1}`).classList.add(`day1${c}`);
    c++;
    k++;
  }

  showDot = !showDot;

  if(showDot){
    dot.classList.add('invsible');
  }else{
    dot.classList.remove('invsible');
  }
  let ampmHtml = `${ampm}`;
  let hourHtml = `${hour}`;
  let minHtml = `${min}`;
  document.querySelector('.ampm').textContent = ampmHtml;
  document.querySelector('.hour').textContent = hourHtml;
  document.querySelector('.min').textContent = minHtml;
};

setInterval(update, 1000);