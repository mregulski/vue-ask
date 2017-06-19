# vue-ask

## Install & run
1. `git clone https://github.com/mregulski/vue-ask.git`
2. `npm install`
3. `npm start` (uses port 8080)

## Technologies used:
* Vue.js - because I'm familiar with it, and it introduces relatively small complexity overhead while making e.g templating fast & simple. Also because I wanted to use it more extensively than I had an opportunity to before.
* webpack - because I wanted to use Vue's single-file components to see how are they to work with, and webpack is the recommended tool for this purpose
* For views themselves I used mostly vanilla HTML and CSS, with some SCSS sugar on top of it for keeping tabs on colors, some common sizes, etc. Decided not to use any HTML templating language, because Vue already handles templating logic, and I didn't feel the angle-bracket-free syntax itself was worth pulling in another dependency.
* Also decided against css frameworks, because I felt like it would be a bit of overkill for the project of this size, especially considering that most things would have to be adjusted manually anyway - probably wouldn't save me that much time.
* No unit tests, because logic is rudimentary at best, and quick enough to check "manually" - and as I don't expect to work on this exact code much more, there's no perspective of the comlexity growing. Also, time constraints.
