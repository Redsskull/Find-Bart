# Find-Bart

Find Bart is a fun game for those who love cats and space where the user must find the planet Bart is lost in. It has an interactive UI and can be played easily on any device anywhere. 

![responsive Mockup](assets/images/responsive.jpg)

## Features

- __The game area__

- The 3 planets, some text about the game, and a scorekeeper.

![game area](assets/images/game-area.jpg)

- __background image__

- The entire game has a background image of space with all features being laid on it. (it can be seen in the game area image)

- __The footer__

- The footer is there just to be cute. features a fun fact about Bart the cat and an icon of a basketball. 

![footer](assets/images/footer.jpg)

- __404 page__

- a 404 page was added for good practice habits 

![footer](assets/images/404.jpg)

### Features Left to Implement

- Would like music to be played while the player is playing the game
- looking to turn the mouse cursing into an animated cat while the game is being played

## Testing

 - tested the style and buttons function with CSS. found that the planet buttons do not function on mobile. adjust the design with Flexbox and mobile queries to adjust. Used wrap and different dimensions to the divs. 

 - Absolute footer position did not work with wrap. used margin auto instead. 

 - Discovered when adding a game score div and a button that not having a flex display for the main itself causes position problems. added the style properties to fix it. 

 - While making functions for the game, discovered the need for a global function for computer value storing. 

 - Found out that storing a hyperlink as a button in a div is a bad idea. the button became invisible. fixed by making the div the button. 

 | Test | Action| Expectation | Result |
|------|-------|-------------|--------|
|Home page|Responsive to 320|Elements size to 320px|Works as intended|
|Home page|Responsive to 1920|Elements size to 1920px|Works as intended|
|Home page|Instructions button |explainations appear |Works as intended |
|planets as button |user is able to interact with the planets when the game is active|Random location of Bart per game, cannot click when inactive|Works as intended|

 ### Validator testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fredsskull.github.io%2FFind-Bart%2F)
- CSS
  - No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fredsskull.github.io%2FFind-Bart%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JS
  - No errors were found when passing through the official Jshint validator. ![Jshint validator](assets/images/jshint.jpg)


  

 ## Deployment
 - The site was deployed to GitHub pages. The steps to deploy are as follows:

- in Github repository I clicked settings.

- I then navigated to the pages tab, where I seleted deploy from branch. the branch selected was the "main" branch.

- Click "Deploy". after a few minutes, refreshing the page should now include a link to the deployed website at the top.

- The site was deployed using Github pages. the link can be found here - https://redsskull.github.io/Find-Bart/

 ## Credits

 ### Content

 - Some of the function layouts were learned and even copied(although not copy paste, the game is different) from Matt Rudge's video in the LMS of Code Institute where he shows how to build a basic JS Rock, Paper, Scissors game.

### Media

- All images were taken from https://www.pexels.com/
- Grumpycat was taken from pngmart.com
- "Happy" Grumpycat was taken from edidit.com

- Special thanks to my friend Alex (https://www.linkedin.com/in/victoralexandrumihai/) who took the time to be my tutor when I was stuck. I couldn't have done this as I did without your help.

- Very special thanks to my mentor Lauren (https://www.linkedin.com/in/lauren-nicole-popich/) who went out of her way in listening to any questions I had during this work and helped as best as she could have. 
