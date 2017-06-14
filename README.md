INTRODUCTION:

This project is the result of an assignment received during my developer training at IMIE Nantes.

The goal is to create a clock in javascript, implementing the MVC design pattern.

HOW TO USE IT:
- Clone the project
- Open the "index.html" in your favorite web browser
- Once open, click on one of the 6 buttons (+1h, -1h, +1m, -1m, +1s, -1s) to adjust time
- The 'reset' button resets the clock to your current local time

or
- Use https://balticwolf.github.io/clock-mvc/ directly.

BRANCH 'master':
- The 'master' branch uses a 'Date' object and offset to manage the time modifications.
- '_offset' is altered by offset values contained in each button (could be improved).
- A new 'Date' object is created each time 'changeTime' is invoked; this has the advantage to keep the clock up-to-date even when the computers exits sleep mode.
- This is the solution I prefer.

BRANCH 'no-date-object':
- This branch uses 3 attributes (_hours, _minutes, _seconds) in the model.
- This is a light solution memory-wise, but the clock will be reset every time the computer exits sleep mode
- This solution was developed for training purposes only.