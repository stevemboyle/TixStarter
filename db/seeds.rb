
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
        image_url: "#",
        video_url: "https://youtu.be/gKc31H6adR8",
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
