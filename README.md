# **Project 2: Superheroes**

## Overview
Superheroes is a fun web-site about superheroes. It consumes an API published by GitHub user 'akabab'. [https://akabab.github.io/superhero-api/api/]

This project has been built as part of a learning module in General Assembly's Software Engineering Immersive Course using JavaScript and React.

It has been developed jointly by Michael G. Laird and Sian Alcock.

### Project duration
48 hours.

Launch on [GitHub Pages](https://sian-alcock.github.io/project-02/).

![Main screenshot](/screenshots/Screenshot-home.png)

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

We agreed on superheroes as our theme very quickly and found a few APIs to choose from.  We tested one, but quite quickly established that there was no endpoint that meant we could access 'all superheroes'.  After a quick search, we found the same data in a separate API on GitHub which included the endpoint we needed.

After deciding on the API, we drew wireframes of the index and show pages.  We agreed that if we had time, we would also like to build a game based on 'Top trumps'.

We created a Trello board and documented a list of tasks.  Each task was categorized as 'must have', 'should have' or 'could have'.  Our goal was to complete all the 'must have' tasks and as many of the remainder as we could.

We also agreed which technologies/packages we would like to employ including Bulma, Lodash and Axios.  We considered having user registration and log on but could not think of a good reason to include those features, so ruled it out.

## Functionality

### Landing page
The player is introduced to the website with an attractive welcome screen and a navigation bar.

![Screenshot](/screenshots/Screenshot-home.png)

### Index page
The index page is accessed from the Landing page when the user clicks 'All Heroes'.  The page displays all available superheroes, displayed in card components.

This page includes searching, sorting and filtering.  It also includes a react-select component that is populated by 'affiliated groups'  The user can search and select groups to which the superheroes belong (eg Avengers).

![Screenshot](/screenshots/Screenshot-index.png)

### Show page
Clicking on a superhero in the index page, will display the show page for the selected superhero.

![Screenshot](/screenshots/Screenshot-show.png)

### Game
The game is based on Top Trumps.  The premise is that each player is dealt a card containing a superhero character listing his or her (or it's) power statistics (eg intelligence, power etc.)  The player picks a statistic to compare on by clicking a button (eg Intelligence) and the player with the highest rating for the selected statistic wins the game.

![Screenshot](/screenshots/Screenshot-game.png)

### About page
The About page includes a description of the application, information about the developers and acknowledgements.


![Screenshot](/screenshots/Screenshot-about.png)


### Bugs

* The sorting pull-down on the Index page only works on the second selection
* The images on the About page do not appear on a mobile


## Wins and Blockers

### Win: Final deliverable looks good and works well

We are very happy with the final deliverable which meets the brief. We are particularly proud of the styling.

### Blocker: Creating two card components

We created a component for the card that we used to display the superhero characters eg on the Index page.  We wanted to use it in three different places.

On the 'Play Game' page, we wanted to apply an animation to the image in the card, but we did not want the animation to apply in the other two places we were employing the Card component.  

We tried to find a way to only apply the animation in one place but we ended up creating a second component instead.

Ideally, there would only be a single component but the animation would only apply where needed.

### Blocker: Cleaning the group affiliation data

Each superhero can be assigned to one or many groups. The group data was stored as one long comma-separated string per superhero.  The challenge was to pull all the group data together into a single array that was:
* unique
* succinct
* free of unnecessary punctuation / characters.

```JavaScript
componentDidMount() {
  axios.get('https://akabab.github.io/superhero-api/api/all.json')
    .then(res => {
      let groups = res.data.map(hero => {
        return hero.connections.groupAffiliation.split(', ')
          .map(group => {
            group = group.replace('Former', 'former')
              .replace('Incorporated', 'Inc.')
            const match = group.match(/[A-Z][a-zA-Z0-9 .-]+/)
            return match ? match[0].trim() : group
          })
      })
        .reduce((flattened, groupArray) => flattened.concat(groupArray), [])
        .filter(group => group.length < 50 && group !== '-')
        .sort()

      groups = Array.from(new Set(groups))

      const objectGroups =groups.map(group => ({value: group, label: group}))
      console.log(objectGroups)

      this.setState({ heroes: res.data, filteredHeroes: res.data, groups, objectGroups })
    })
}

```

## Future Content

Given more time, we would like to include the following capabilities:
* Make more responsive for use on mobiles
* Consume a second API to include superhero theme tunes
* Keep score between games
* Allow user to select their superhero character for the game
* Make more of the groups - eg include a separate entry page
* Combine the different filter methods on the index page so they work together
* Devise a Superhero name generator.

## What we learned

This project was such a great learning experience.  Major learning points:
* Storing values in state but not setting state too often.
* Accessing fields within the API using bracket notation so that we can build up variables using string literals.
* The API included data on Affiliated Groups.  This data needed a lot of attention (eg to remove duplicates).  This was probably our biggest challenge.
* Bulma is very powerful - you need to engage with the documentation to make the most of it and make it more customizable.
