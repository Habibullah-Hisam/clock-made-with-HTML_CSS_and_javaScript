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

  showDot = !showDot;

  if(showDot){
    dot.classList.add('invsible');
  }else{
    dot.classList.remove('invsible');
  }
  if(showDot){
    dot2.classList.add('invsible');
  }else{
    dot2.classList.remove('invsible');
  }
  
  let weekHtml = `${week}`;
  let hourHtml = `${hour}`;
  let minHtml = `${min}`;
  let secHtml = `${sec}`;
  document.querySelector('.day').innerHTML = weekHtml;
  document.querySelector('.hour').textContent = hourHtml;
  document.querySelector('.min').textContent = minHtml;
  document.querySelector('.sec').textContent = secHtml;
};

setInterval(update, 500);
// update();