# clock-made-with-HTML_CSS_and_JavaScript

This repository contains a digital clock built using HTML, CSS, and JavaScript. It displays the current time (hours, minutes, AM/PM) and the day of the week, with a blinking separator.

## Features

* Displays the current time in 12-hour format (HH:MM AM/PM).
* Displays the current day of the week, with surrounding days partially displayed.
* Blinking separator between hours and minutes.
* Real-time updates.
* Uses `dayjs` library for date and time formatting.

## Technologies Used

* **HTML:** For the structure of the clock.
* **CSS:** For styling and layout.
* **JavaScript:** For retrieving and updating the time, and for day display logic.
* **dayjs:** For date and time formatting.

## Prerequisites

* Include the `dayjs` library in your HTML file. You can use a CDN:

    ```html
    <script src="[https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js](https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js)"></script>
    ```

## How to Use

1.  Clone the repository to your local machine:

    ```bash
    git clone [https://github.com/Habibullah-Hisam/clock-made-with-HTML_CSS_and_JavaScript.git](https://www.google.com/search?q=https://github.com/Habibullah-Hisam/clock-made-with-HTML_CSS_and_JavaScript.git)
    ```

2.  Navigate to the project directory:

    ```bash
    cd clock-made-with-HTML_CSS_and_JavaScript
    ```

3.  Ensure the `dayjs` library is properly linked in your `index.html` file.
4.  Open the `index.html` file in your web browser.

## Code Explanation

* **HTML:** The `index.html` file sets up the basic structure of the clock, including elements for hours, minutes, AM/PM, and days of the week.
* **CSS:** The `style.css` file styles the clock, ensuring it is centered and readable, and handles the blinking separator.
* **JavaScript:** The `script.js` file contains the logic for retrieving the current time and updating the display every second.

    ```javascript
    const $ = (selector) => {
      return document.querySelector(selector);
    };

    const dot = $('.dot');
    let showDot = true;

    function update() {
      const today = dayjs();
      const hour = today.format('hh');
      const min = today.format('mm');
      const week = today.format('ddd');
      const ampm = today.format('A');
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

      showDot = !showDot;

      if (showDot) {
        dot.classList.add('invsible');
      } else {
        dot.classList.remove('invsible');
      }

      let ampmHtml = `${ampm}`;
      let hourHtml = `${hour}`;
      let minHtml = `${min}`;
      document.querySelector('.ampm').textContent = ampmHtml;
      document.querySelector('.hour').textContent = hourHtml;
      document.querySelector('.min').textContent = minHtml;
    }

    update();
    setInterval(update, 1000);
    ```

    * The `update()` function retrieves the current time and day using `dayjs`.
    * It updates the HTML elements with the formatted time and day.
    * It toggles the visibility of the separator (`dot`) for the blinking effect.
    * It dynamically adds and removes classes to day elements to show current and surrounding days.
    * The `setInterval()` function calls `update()` every second.

## Future Improvements

* Add a 24-hour mode.
* Improve CSS styling for better visual appeal.
* Add date display.
* Implement time zone support.
* Add settings for user customization.

## Contributing

Contributions are welcome! If you have any suggestions or find any bugs, please feel free to open an issue or submit a pull request.
