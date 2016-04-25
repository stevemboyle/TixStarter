# TixStarter

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

TixStarter is a web application for creating events and buying tickets. Inspired by Kickstarter, events must achieve a revenue goal in order to be funded. The aesthetic design is inspired in part by TicketLeap, and in part by a desire to create a more beautiful ticketing app.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

  Basic AppAcademy Features:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

  TixStarter Specific Features:

- [ ] CRUD functionality for Events, Showtimes, and Tickets
- [ ] A simulated process for "buying" tickets

## Product Goals and Priorities

TixStarter will allow users to do the following:

- [ ] Create an account (MVP)
- [ ] Sign In, Log Out, and Sign Up, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete events (MVP)
- [ ] Create, read, edit, and delete showtimes for those events (MVP)
- [ ] Create, read, edit, and delete tickets for those showtimes (MVP)
- [ ] Simulate buying tickets (MVP)

## Implementation Timeline

### Phase 1: Backend Setup and User Authentication (0.5 days)

**Targeted Completion Date:** Tuesday
**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ]create User model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Events Model, API, and basic APIUtil (0.5 Days)

**Targeted Completion Date:** Wednesday
**Objective:** Events can be created, read, edited and destroyed through the API.

- [ ] create Event model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for events (EventController)
- [ ] jBuilder views for events
- [ ] setup Webpack & Flux scaffold
- [ ] setup APIUtil to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (0.5 Days)

**Targeted Completion Date:** Wednesday
**Objective:** Events can be created, read, edited and destroyed with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- Implement each note component, building out the flux loop as needed.
  - [ ] `EventsIndex`
  - [ ] `EventIndexItem`
  - [ ] `EventForm`

### Phase 4: Showtimes (1 Day)

**Targeted Completion Date:** Thursday
**Objective:** Showtimes can be created, read, edited and destroyed through the API.

  - [ ] Create Showtime model
  - Build out API, Flux loop, and components for:
    -  [ ] Showtime CRUD
	   - [ ] Fetching Showtimes
     - [ ] ShowtimesIndex
     - [ ] ShowtimeIndexItem
     - [ ] ShowtimeForm
     - [ ] ShowtimeDetail

### Phase 5: Tickets (1 Day)

**Targeted Completion Date:** Friday
**Objective:** Tickets can be created, read, edited and destroyed through the API.

- [ ] Create Ticket model
- Build out API, Flux loop, and components for:
   - [ ] Ticket CRUD
   - [ ] Fetching Tickets
   - [ ] TicketsIndex
   - [ ] TicketIndexItem
   - [ ] TicketForm
   - [ ] TicketDetail

### Phase 6: Aesthetics (4 days)

**Targeted Completion Date:** Thursday
**Objective:** Make it sexy!

- [ ] Implement modals
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
