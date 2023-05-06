# Find-Bart

Find Bart is a fun game for love who love cats and space where the user must find the planet Bart is lost in. it has some syth music, interactive UI and can be played easily on any device anywhere. 

![responsive Mockup](/Find-Bart/assets/images/responsive.jpg)

## Features

- __The game area__

- The 3 panets, some text about the game and a score keeper.

![game area](/Find-Bart/assets/images/game-area.jpg)

- __background image__

- The entire game has a background image of space with all features being layed on it. (it can be seen in the game area image)

- __The footer__

- The footer is there just to be cute. features a fun fact about Bart the cat and an icon of a basketball. 

![footer](/Find-Bart/assets/images/footer.jpg)

### Features Left to Implement

- Would like music to be played while the player is playing the game
- looking to turn the mouse cursing into an animated cat while game is being played

## Testing

 - tested the style and buttons function with css. found that the planet buttons do not function on mobile. adjust design with flexbox and mobile querys to adjust. Used wrap and different dimensions to the divs. 

 - Absolute footer position did not work with wrap. used margin auto instead. 

 - Discovered when adding a game score div and a button that not having flex display for the main itself causes position problems. added the style properties to fix it. 

 - While making functions for the game, disocvered the need for a global function for computer value storing. 

 - Found out storing a hyper link as a button in a div is a bad idea. the button became invisible. fixed by making the div the button. 

 ### Validator testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fredsskull.github.io%2FFind-Bart%2F)
- CSS
  - No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fredsskull.github.io%2FFind-Bart%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JS
  - No errors were found when passing through the official Jshint validator ![Jshint validator](/Find-Bart/assets/images/jshint.jpg)
  

 ## Deployment

- The site was deployed using Github pages. the link can be found here - https://redsskull.github.io/Find-Bart/

 ## Credits

 ### Content

 - Some of the function layout was learned and even copied(although not copy pasted, the game is different) from Matt Rudge's video in the LMS of Code Institute where he shows how to build a basic JS Rock, Paper, Scissors game.

### Media

- All images were taken from https://www.pexels.com/
- Grumpycat was taken from pngmart.com
- "happy" Grumpycat was taken from edidit.com

- Special thanks to my friend Alex (https://www.linkedin.com/in/victoralexandrumihai/) who took the time to be my tutor when I was stuck. I couldn't have done this as I did without your help.

- Very special thanks to my mentor lauren (https://www.linkedin.com/in/lauren-nicole-popich/) who went out of her way in listening to any questions I had during this work and helped as best as she could have. 
