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


### Single-Page App

TixStarter is actually a single-page app, wherein all content is delivered from a single static page. The design is meant to suggest that we have navigate through a variety of splashes and windows as we follow our journey to tickets. Instead, TixStarter is based off of a single root page which listens to a `SessionStore`. This `SessionStore` delivers content based on a call to `SessionStore.currentUser()`. Users' sensitive information is kept away from the app's front-end.

### Events, Showtimes, and tickets

Users create and buy tickets to events through a three-step process, navigating Events, Showtimes, and Tickets. An event is a (potentially) recurring experience -- think Beyonce's Formation Tour, or San Francisco Giants baseball. A showtime is a specific day, time, and location -- think December 17th at the Warfield, or September 24th at AT&T Park. Tickets have a tier, a description, and a price. An example ticket be a $25 seat in the Upper Deck.

### Get Tickets or Learn More?

On our home page, Users are greeted by an index of events. Different users will have different needs -- are they browsing and looking for inspiration, or are they in a hurry to get tickets? At any point on a visit to TixStarter, clicking "Get Tickets" will jumpstart the Ticket-buying process, which uses modals to narrow down our selection of Showtimes and Tickets. Or, clicking "Learn More" or the Event index item leads to a splash marketing page for the Event.

### Splash Pages for Events

One longstanding frustration of mine has been how many ticketed events have inadequately attractive websites. This extends further than my frustrations with the aesthetics of ticketing websites; even individual theatres and venues have websites that seem ten years our of date. With TixStarter, I wanted to make sure that any event-creator could follow a handful of steps and then create a beautiful landing page for their event that they can link their fans to. On TixStarter, event-creators get a onepage design with a large splash image, a description, an embedded video, and clickable showtimes.
