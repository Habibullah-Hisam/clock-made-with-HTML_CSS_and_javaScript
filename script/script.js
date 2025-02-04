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
  const sec = today.format('ss');
  const ampm = today.format('A');
  let weekCheck = today.format('D');
  
  // let weekHtml = `
  //       <div class="day day2 day22">SUN</div>
  //       <div class="day day3 day11">MON</div>
  //       <div class="day day4">TUE</div>
  //       <div class="day day5 day11">WED</div>
  //       <div class="day day6 day22">THU</div>`
  //       ;
  // document.querySelector('.week').innerHTML = weekHtml;

  
  
  document.querySelector(`.day${weekCheck}`).classList.add('dayActive');
  document.querySelector(`.day${weekCheck}`).textContent = week.toUpperCase();

  // let i = weekCheck;
  // let c=1,j = i-1;
  // while(j>=i-2){
  //   document.querySelector(`.day${j}`).textContent = "a";
  //   document.querySelector(`.day${j}`).classList.add(`day1${c}`);
  //   c++;
  //   j--;
  // }
  // c = 1;
  // let k = i+1;
  // while(k<=i+2){
  //   document.querySelector(`.day${k}`).textContent = "a";
  //   document.querySelector(`.day${k}`).classList.add(`day1${c}`);
  //   c++;
  //   k++;
  // }
  showDot = !showDot;

  if(showDot){
    dot.classList.add('invsible');
  }else{
    dot.classList.remove('invsible');
  }
  // if(showDot){
  //   dot2.classList.add('invsible');
  // }else{
  //   dot2.classList.remove('invsible');
  // }
  let ampmHtml = `${ampm}`;
  let hourHtml = `${hour}`;
  let minHtml = `${min}`;
  // let secHtml = `${sec}`;
  document.querySelector('.ampm').textContent = ampmHtml;
  document.querySelector('.hour').textContent = hourHtml;
  document.querySelector('.min').textContent = minHtml;
  // document.querySelector('.sec').textContent = secHtml;
};

setInterval(update, 1000);
// update();