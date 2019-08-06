# **Project 2: Superheroes**

## Overview
Superheroes is a fun web-site about superheroes. It consumes an API published by GitHub user 'akabab'. [https://akabab.github.io/superhero-api/api/]

This project has been built as part of a learning module in General Assembly's Software Engineering Immersive Course using JavaScript and React.

It has been developed jointly by Michael G. Laird and Sian Alcock.

### Project duration
48 hours.

Launch on [GitHub Pages](https://sian-alcock.github.io/project-01/).

![Main screenshot](/src/images/screenshot-home.png)

## Brief

The project brief is as follows:

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


## Approach Taken

### General approach

We agreed on superheroes as our theme very quickly and found a few APIs to choose from.  We tested one but quite quickly established that there was no endpoint that meant we could access 'all superheroes'.  After a quick search, we found the same data in a separate API on GitHub which included the endpoint we needed.

After deciding on the API, we drew wireframes of the index and show pages.  We agreed that if we had time, we would also like to build a game based on 'Top trumps'.

We created a Trello board and documented a list of tasks.  Each task was categorized as 'must have', 'should have' or 'could have'.  Our goal was to complete all the 'must have' tasks and as many of the remainder as we could.

We also agreed which technologies/packages we would like to employ including Bulma, Lodash and Axios.  We considered having user registration and log on but could not think of a good reason to include those features, so ruled it out.

## Functionality

### Landing page
The player is introduced to the website with an attractive welcome screen and a navigation bar.

![Screenshot](/src/images/screenshot-home.png)

### Index page
The index page is accessed from the Landing page when the user clicks 'All Heroes'.  The page displays all available superheroes, displayed in card components.

This page includes searching, sorting and filtering.  It also includes a react-select component that is populated by 'affiliated groups'  The user can search and select groups to which the superheroes belong (eg Avengers).

![Screenshot](/src/images/screenshot-index.png)

### Show page
Clicking on a superhero in the index page, will display the show page for the selected superhero.

![Screenshot](/src/images/screenshot-show.png)

### Game
The game is based on Top Trumps.  The premise is that each player is dealt a card containing a superhero character listing his or her (or it's) power statistics (eg intelligence, power etc.)  The player picks a statistic to compare on by clicking a button (eg Intelligence) and the player with the highest rating for the selected statistic wins the game.

![Screenshot](/src/images/screenshot-game.png)

### About page
The About page includes a description of the application, information about the developers and acknowledgements.


![Screenshot](/src/images/screenshot-about.png)


### Bugs

* The sorting pull-down on the Index page only works on the second selection
* The images on the About page do not appear on a mobile


## Wins and Blockers

### Win: Final deliverable looks good and works well

We are very happy with the final deliverable which meets the brief. We are particularly proud of the styling.

### Issue: Creating two card components

We created a component for the card that we used to display the superhero characters eg on the Index page.  We wanted to use it in three different places.

On the 'Play Game' page, we wanted to apply an animation to the image in the card, but we did not want the animation to apply in the other two places we were employing the Card component.  

We tried to find a way to only apply the animation in one place but we ended up creating a second component instead.

Ideally, there would only be a single component but the animation would only apply where needed.

## Future Content

Given more time, we would like to include the following capabilities:
* Consume a second API to include superhero theme tunes
* Keep score between games
* Make more of the groups - eg include a separate entry page
* Devise a Superhero name generator

## What we learned

This project was such a great learning experience.  Major learning points:
* Storing values in state but not setting state too often
* Accessing fields within the API using bracket notation so that we can build up variables using string literals.
* The API included data on Affiliated Groups.  This data needed a lot of attention (eg to remove duplicates).  This was probably our biggest challenge.
