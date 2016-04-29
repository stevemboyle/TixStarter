
User.create!({
      username: "guest",
      password: "password",
      first_name: "Guest",
      last_name: "Account",
      bio_image_url: "",
      bio_text: "John is a great patron of the arts.",
      })

User.create!({
      username: "guest2",
      password: "password2",
      first_name: "Guest2",
      last_name: "Account2",
      bio_image_url: "",
      bio_text: "John is a great patron of the arts.",
      })


# # Blank Event:
#
# Event.create({
#         title: ,
#         catchphrase: ,
#         description: ,
#         image_url: ,
#         video_url: ,
#         user_id: ,
#         revenue_goal: ,
#         revenue_status: 0
#         })

Event.create({
        title: "First Event Title",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "The Globe to Globe Festival",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "World Hamlet",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "Hamilton",
        catchphrase: "An American Musical",
        description: "Hamilton is a musical about Alexander Hamilton, with music, lyrics and book by Lin-Manuel Miranda. The show, inspired by the 2004 biography Alexander Hamilton, by historian Ron Chernow, has achieved both critical acclaim and box office success.",
        image_url: "http://www.trbimg.com/img-5665dfbe/turbine/ct-hamilton-tour-launch-chicago",
        video_url: "Eq6ciU2iqW0",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "Sleep No More",
        catchphrase: "The Immersive Experience",
        description: "Sleep No More is the New York City production of a site-specific, interactive work of theatre created by British theatre company Punchdrunk, based on their original 2003 London incarnation (at the Beafoy Building), their Brookline, Massachusetts 2009 collaboration with Boston's American Repertory Theatre (at the Old Lincoln School), and William Shakespeare's Macbeth. The company reinvented Sleep No More as a co-production with Emursive, and began performances on March 7, 2011. Sleep No More won the 2011 Drama Desk Award for Unique Theatrical Experience and won Punchdrunk special citations at the 2011 Obie Awards for design and choreography.",
        image_url: "http://www.batterypark.tv/wp-content/uploads/2015/03/sleep-no-more.jpg",
        video_url: "3kz6I5bpxI0",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "Then She Fell",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "Matthew Briar Defeats Death",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "Ancien Regime",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "The Speakeasy",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

Event.create({
        title: "The Racket",
        catchphrase: "First Event Catchphrase",
        description: "First Event Description",
        image_url: "https://d12edgf4lwbh8j.cloudfront.net/photo/image/h2_7.jpg",
        video_url: "gKc31H6adR8",
        user_id: 1,
        revenue_goal: 20000,
        revenue_status: 0
        })

#
# # Blank Showtime:
#
# Showtime.create({
#         event_id: ,
#         date: ,
#         tme: ,
#         location:
#         })

Showtime.create({
        event_id: 1,
        date: Time.now,
        time: Time.now,
        location: "First Showtime Location"
        })

#
# # Blank Ticket:
#
# Ticket.create({
#         showtime_id: ,
#         tier: ,
#         description: ,
#         cost:
#         })

#
Ticket.create({
        showtime_id: 1,
        tier: "First Ticket Tier",
        description: "First Ticket Description",
        price: 10
        })
#
# # Blank Ticket_Purchase:
#
# TicketPurchase.create({
#         user_id: ,
#         ticket_id:
#         })
#

#
# TicketPurchase.create({
#         user_id: 1,
#         ticket_id: 1
#         })
