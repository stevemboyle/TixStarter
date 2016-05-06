== README

# TixStarter

TixStarter is an event ticketing web application. Inspired by KickStarter, Events must achieve a revenue goal in order to be funded. Unlike KickStarter, the mechanism for funding on TixStarter is with ticket sales -- not donations.

Users can sign in, buy tickets, and create Events. Events have multiple showtimes, each of which has multiple tickets. After enter only a few pieces of information, users are able to create a full splash onepage website for their Events, featuring beautiful imagery and embedded videos. The process of buying tickets, meanwhile, is engaging and interactive.

TixStarter is a full-stack application. We utilize Ruby on Rails on the back-end with a PostgreSQL database. On the front-end, we use React.js with a Flux architectural framework. And, of course, there's plenty of html and javascript mixed in.


## Features & Implementation

+ Users Sign In and Sign Out

+ There is a Demo Account

+ User can buy tickets to events

+ Users can create Events, Showtimes, and tickets

+ Users can track the Events they have created.

+ Users can track the tickets they have purchased.


### Single-Page App

TixStarter is actually a single-page app, wherein all content is delivered from a single static page. The design is meant to suggest that we have navigate through a variety of splashes and windows as we follow our journey to tickets. Instead, TixStarter is based off of a single root page which listens to a `SessionStore`. This `SessionStore` delivers content based on a call to `SessionStore.currentUser()`. Users' sensitive information is kept away from the app's front-end.

### Events, Showtimes, and tickets

Users create and buy tickets to events through a three-step process, navigating Events, Showtimes, and Tickets. An event is a (potentially) recurring experience -- think Beyonce's Formation Tour, or San Francisco Giants baseball. A showtime is a specific day, time, and location -- think December 17th at the Warfield, or September 24th at AT&T Park. Tickets have a tier, a description, and a price. An example ticket be a $25 seat in the Upper Deck.

### Get Tickets or Learn More?

On our home page, Users are greeted by an index of events. Different users will have different needs -- are they browsing and looking for inspiration, or are they in a hurry to get tickets? At any point on a visit to TixStarter, clicking "Get Tickets" will jumpstart the Ticket-buying process, which uses modals to narrow down our selection of Showtimes and Tickets. Or, clicking "Learn More" or the Event index item leads to a splash marketing page for the Event.

### Splash Pages for Events

One longstanding frustration of mine has been how many ticketed events have inadequately attractive websites. This extends further than my frustrations with the aesthetics of ticketing websites; even individual theatres and venues have websites that seem ten years our of date. With TixStarter, I wanted to make sure that any event-creator could follow a handful of steps and then create a beautiful landing page for their event that they can link their fans to. On TixStarter, event-creators get a onepage design with a large splash image, a description, an embedded video, and clickable showtimes.



Welcome to TixStarter!

# TixStarter

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

TixStarter is a web application for creating `Events` and buying `Tickets`. Inspired by Kickstarter, `Events` must achieve a revenue goal in order to be funded. The aesthetic design is inspired in part by TicketLeap, and in part by a desire to create a more beautiful ticketing app.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

* Basic AppAcademy Features:

- [x] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [x] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

* TixStarter Specific Features:

- [ ] CRUD functionality for Events, `Showtimes`, and Tickets
- [ ] A simulated process for "buying" `Tickets`

## Product Goals and Priorities

TixStarter will allow users to do the following:

- [X] Create an account (MVP)
- [X] Sign In, Log Out, and Sign Up, including as a Guest/Demo User (MVP)
- [X] Create, read, edit, and delete `Events` (MVP)
- [X] Create, read, edit, and delete `Showtimes` for those `Events` (MVP)
- [ ] Create, read, edit, and delete `Tickets` for those `Showtimes` (MVP)
- [ ] Simulate buying `Tickets` (MVP)

## Implementation Timeline

### Phase 1: Backend Setup and User Authentication (0.5 days)

**Targeted Completion Date:** Tuesday
**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Events Model, API, and basic APIUtil (0.5 Days)

**Targeted Completion Date:** Wednesday
**Objective:** Events can be created, read, edited and destroyed through the API.

- [X] create `Event` model
- [X] seed the database with a small amount of test data
- [X] CRUD API for `Events` (`EventsController`)
- [X] jBuilder views for `Events`
- [X] setup Webpack & Flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (0.5 Days)

**Targeted Completion Date:** Wednesday
**Objective:** Events can be created, read, edited and destroyed with the user interface.

- [X] setup the flux loop with skeleton files
- [X] setup React Router
- Implement each note component, building out the flux loop as needed.
  - [X] `EventsIndex`
  - [X] `EventIndexItem`
  - [X] `EventForm`

### Phase 4: `Showtimes` (1 Day)

**Targeted Completion Date:** Thursday
**Objective:** ``Showtimes`` can be created, read, edited and destroyed through the API.

  - [X] Create `Showtime` model
  - Build out API, Flux loop, and components for:
     - [x] `Showtime` CRUD
	   - [X] Fetching `Showtimes`
     - [X] `ShowtimesIndex`
     - [X] `ShowtimeIndexItem`
     - [X] `ShowtimeForm`
     - [X] `ShowtimeDetail`

### Phase 5: Tickets (1 Day)

**Targeted Completion Date:** Friday
**Objective:** `Tickets` can be created, read, edited and destroyed through the API.

- [ ] Create `Ticket` model
- Build out API, Flux loop, and components for:
   - [ ] `Ticket` CRUD
   - [ ] Fetching `Tickets`
   - [ ] `TicketsIndex`
   - [ ] `TicketIndexItem`
   - [ ] `TicketForm`
   - [ ] `TicketDetail`

### Phase 6: Aesthetics (4 days)

**Targeted Completion Date:** Thursday
**Objective:** Make it sexy!

- [X] Implement modals
- [ ] Style menus
- [ ] Style splashes
- [ ] Style buttons
- [ ] Style modals
- [ ] Ensure appropriate sizing for components
- [ ] Implement video embedding
- [ ] Get feedback on my UI from others

### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel clean and purposeful.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules

### Bonus Features (TBD)
- [ ] Instant Search for Events Index
- [ ] Pagination / infinite scroll for Events Index
- [ ] Animations on load
- [ ] Video background on homepage
- [ ] Animations for demo account login
- [ ] Parallax Scrolling
