# TixStarter
## Design Inspirations and Wireframes


## Home Page

The homepage is a one-page style theme.

(Image)

The first page you see will look a little something like this:

(Image)

The top menu bar will have three options:
-	Sign In
-	Sign Up
-	Demo Account

All three will open a modal, with looks inspired by the GitHub sign-in:

(Image)

That is to say, there will be a backround photo. You’ll enter your first_name, last_name, username, and password.

Success will redirect you to the homepage, but with different menu options:
-	My Profile
-	My Tickets
-	My Events
-	Create An Event

At the bottom of the home splash, where the “Check Our Profile” button is in the example below, there will be two buttons.

(Image)

-	Search Events
-	Learn More

The “Search Events” button will take you to the second page-section down in the one-page homepage: our EventIndex (with instant search).

(Image)

That page has a search bar at the top, and eight EventIndexItems below, chosen based on the search parameters.

(Image)

Those EventIndexItems will learn heavily on the Event’s image_url, but also display their title, catchphrase, funding_status, funding_goal, earliest Showtime’s date, and latest Showtime’s date.

Click an EventIndexItem, and it will open up a modal.

The design of the modal is inspired by this:

(Image)

The functionality is more like this:

(Image)

This will show much of the same information as the EventIndexItem, but with the addition of the Event’s description.

There will be two buttons:
-	LEARN MORE
-	GET TICKETS

LEARN MORE will take us to the EventDetail page. More on that in a moment.

GET TICKETS will take us to the ShowtimeIndexItem Modal. More on that in a moment.

Remember the splash on the home page?

(Image)

There were two buttons:
-	SEARCH EVENTS
-	LEARN MORE

The LEARN MORE button takes us to the third page-section on the one-page-style homepage.

(Image)

This one is really more a boilerplate marketing page, followed by a footer, with as much content as time allows.

Let’s check out the EventDetail page.

# EventDetail
 
The EventDetail page is also a one-page style page, with very similar aesthetics to the first page. This time, however, they are specific to the particular Event, rather than TixStarter the company.

(Image)

The first page-section is a splash, with the Event’s image_url, title, and catchphrase.

(Image)

Where the “Check Our Profile” button is in this example, there will be two buttons:
-	LEARN MORE
-	GET TICKETS

GET TICKETS will open the Showtime Selection Modal. More on that soon.

LEARN MORE will take us down to the second page-section.

(Image)

This section has the Event’s description and a box for its revenue_status and revenue_goal.

At the bottom of this page is a button to GET TICKETS. That works the same as all the others.

Keep scrolling down and you’ll arrive at the third page-section, the Event’s embedded video_url.

Keep scrolling and you’ll arrive at the fourth page-section, the Event’s ShowtimesIndex. This is a page with buttons for each of the Event’s showtimes. Click one of these, and you’ll be taken to the Ticket Selection Modal.

Keep scrolling and, if time permits, you’ll arrive at the first_name, last_name, username, image_url, and bio of the Event’s creator (user_id).

All of these page-sections have their own GET TICKETS button. Let’s see what happens if we click that.

#Showtime Selection Modal

Clicking the GET TICKETS button anywhere will take you to the Showtime Selection Modal. Its look is inspired by this:

(Image)

It’s wireframe is more similar to this:

(Image)

That is to say, it has the Event’s image_url at the top, followed by the Event’s title and catchphrase. Then, it has all of the Event’s ShowtimeIndexItems.

Click one, and you’ll be taken to the Ticket Selection Modal.

## Ticket Selection Modal:

At the Ticket Selection Modal, you’ll see all of your chosen Showtime’s TicketIndexItems. It’s aesthetically and conceptually the same as the Showtime Selection Modal.

(Image)
(Image)

Select your ticket, and you’re ready to pay! That brings us to the…

## “Don’t Give Me Real Money” Modal

This would look like this…

(Image)

But, this is a demo site, filled with fake events. So instead, it will look something like this:

(Image)

There will be a button to simulate paying and move on to the success modal.

## Success Modal

The success modal is a background image, text saying “Congratulations, you have bought tickets to #{Event.name}”, and three buttons:
-	Search More Events
-	Back to Event
-	My Tickets

## My Tickets

My Tickets is a TicketIndex, with just the tickets that User has purchased.

## My Profile / Edit My Profile Modal

This is just a modal with the edit options for User attributes.

## Create Event / Edit Event Modal

This is just a modal with the edit options for Event attributes.

## Create Showtime / Edit Showtime Modal

This is just a modal with the edit options for Showtime attributes.

## Create Ticket / Edit Ticket Modal

This is just a modal with the edit options for Ticket attributes.
