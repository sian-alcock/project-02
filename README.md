# **Project 1: Superheroes**

## Overview
Superheroes is a fun web-site about superheroes. It consumes an api [acknowledge API]

This project was built as a learning module in General Assembly's Software Engineering Immersive Course using JavaScript and React.

It was programmed jointly by Michael G. Laird and Sian Alcock.

### Project duration
48 hours.

Launch on [GitHub Pages](link).

![Main screenshot](screenshot)

## Brief

* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app should include a router** - with several "pages".
* **Include wireframes** - that you designed before building the app.
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Be deployed online** and accessible to the public.

## Technologies Used

* HTML5 with HTML5 audio
* CSS3
* JavaScript (ES6)
* React
* Bulma
* Lodash
* HashRouter, Route, Switch, Link  from 'react-router-dom'
* Select from 'react-select'
* axios
* ScSS
* Git
* GitHub
* Google Fonts


### Approach Taken

* A **working application**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
* **A `readme.md` file** with:
  * Explanations of the **technologies** used
    * A couple of paragraphs about the **general approach you took**
    * **Installation instructions** for any dependencies
    * Link to your **wireframes** – sketches of major views / interfaces in your application
   * Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome

### General approach

We agreed on superheroes as our api to consume very quickly and found a few apis to choose from.  We tested the first one which looked well documented but quite quickly established that there was no endpoint that meant we could access 'all superheroes'.  A quick search and we found the same data in a separate api on github which did have the endpoint we needed.

After deciding on the api, we then drew wireframes of the index and show pages and agreed that if we had time, we would like to build a game based on 'Top trumps'.

We also agreed the technologies we would like to employ including Bulma, Lodash and Axios.  We considered having user registration and log on but could not think of a good reason to include those features.

### Future proofing

xxx

### Generation of grids and planting of crops

xxxx

## Functionality

### Landing page
The player is introduced to the website with an attractive welcome screen and a navigation bar.

![Screenshot](/images/Screenshot-welcome.png)

### Index page
xxx

![Screenshot](/images/Screenshot-crop-rotation.png)

### Show page
xxx

![Screenshot](/images/Screenshot-crop-rotation.png)

### Game
The game is based on Top Trumps.  The premise is that each player is dealt a card containing a superhero character listing his or her (or it's) power statistics (eg intelligence, power etc.)  The player picks a statistic to compare on by clicking a button and the player with the highest rating for the


### About page
xxx

``` JavaScript

```

![Screenshot](/images/screenshot-game-play.png)

### End of game and reset
When either the player or the computer have destroyed all the crops, the game is over.  A 'Start again' button is available to reset the grids, scores etc.

![Screenshot](/images/screenshot-final.png)

### Bugs

* The sorting pull-down only works on the second selection
* xx


## Wins and Blockers

### Final deliverable looks good and works well

We are very happy with the final deliverable which met the brief. We are particularly pleased with the look and feel of the site.

### Creating two card components

We created a component for the card that we used to display the superhero characters eg on the Index page.  We wanted to use it in three different places.  On the game page, we wanted to apply an animation to the image but we did not want the animation to apply in the other two places.  We ended up creating a second component instead of making it work differently.

## Future Content

Given more time, we would like to include the following capabilities:
* Consume a second api to include superhero theme tunes
* Keep score between games
* Make more of the groups - eg own entry page
* Superhero name generator

## What we learned

This project was such a great learning experience.  Major learning points:
* Storing on state in React
* Bulma?
