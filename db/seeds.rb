
####################################
# USERS
####################################

    User.create!({
          username: "guest",
          password: "password",
          first_name: "Guest",
          last_name: "Guesterson",
          bio_image_url: "",
          bio_text: "Guest Guesterson is a fantastic patron of the arts, and all around rockstar of an event-attender. Guest seeks out thrilling experiences and lives life to the fullest.",
          })

    User.create!({
          username: "admin",
          password: "upperhaight",
          first_name: "Admin",
          last_name: "Account",
          bio_image_url: "",
          bio_text: "The Admin makes all the biggest decisions.",
          })

####################################
# EVENTS
####################################

    Event.create({
            title: "The Globe to Globe Festival",
            catchphrase: "First Event Catchphrase",
            description: "In 2012 we invited the world to visit us during our Globe to Globe festival, and who could have anticipated the sheer wild joy with which so many companies played within our wooden walls? Since the Festival in 2012, we've enjoyed welcoming back some of those companies to perform in the Globe and continue to do so each summer season. Having undertaken a ground-breaking tour of China in 2014 with A Midsummer Night's Dream, we are delighted to welcome the return of the National Theatre of China with Richard III in Mandarin, and of the great Tang-Shu Wing's company from Hong Kong with Macbeth in Cantonese.",
            image_url: "http://40.media.tumblr.com/afe8d5561a67f58230e5937a13d73fe0/tumblr_nyznqmwqVm1t96b19o1_1280.jpg",
            video_url: "4YQGSYPATDI",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "Sleep No More",
            catchphrase: "The Immersive Experience",
            description: "Sleep No More is the New York City production of a site-specific, interactive work of theatre created by British theatre company Punchdrunk, based on their original 2003 London incarnation (at the Beafoy Building), their Brookline, Massachusetts 2009 collaboration with Boston's American Repertory Theatre (at the Old Lincoln School), and William Shakespeare's Macbeth. The company reinvented Sleep No More as a co-production with Emursive, and began performances on March 7, 2011. Sleep No More won the 2011 Drama Desk Award for Unique Theatrical Experience and won Punchdrunk special citations at the 2011 Obie Awards for design and choreography.",
            image_url: "http://www.batterypark.tv/wp-content/uploads/2015/03/sleep-no-more.jpg",
            video_url: "3kz6I5bpxI0",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "'Per Se' San Francisco Pop-Up",
            catchphrase: "Delicious Come to You",
            description: "Per Se is a New American and French restaurant located on the fourth floor of the Time Warner Center at 10 Columbus Circle (at West 60th Street and Broadway) in Manhattan in New York City, owned by chef Thomas Keller.[1] In 2011, it was called the best restaurant in New York City by the New York Times.",
            image_url: "http://www.trbimg.com/img-55d25a07/turbine/spiaggia-switches-to-prix-fixe-tasting-menu-only",
            video_url: "Yji20MJ5VaE",
            user_id: 1,
            revenue_goal: 20000,
            revenue_status: 0
            })


    Event.create({
            title: "World Hamlet",
            catchphrase: "All the World's a Stage",
            description: "The Globe theatre is sending a production of Hamlet on the first genuine world tour in theatre history. Starting on 23 April 2014, the 450th anniversary of Shakespeare's birth, the company will spend two years travelling by planes, trains, boats and buses to visit every nation on Earth – 205 countries in all. The revered theatre director Peter Brook said it was 'a bold and dynamic project', and agreed with the choice of play. 'The six simplest words in the English language are 'to be or not to be'. There is hardly a corner of the planet where these words have not been translated. Even in English, those who can't speak the language will at once recognise the sound and exclaim 'Shakespeare!' The 204th and 205th stops are already decided: the Rift Valley in Kenya – 'where human life began on Earth', Dromgoole said – and Elsinore in Denmark, the castle where Shakespeare set his tragedy. They will be performing in theatres, in town squares, on beaches and in jungle clearings.",
            image_url: "http://www.todayonline.com/sites/default/files/styles/photo_gallery_image_lightbox/public/23531719_0.JPG?itok=Uox7_X3hs",
            video_url: "-UiRi7AiSMo",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "Hamilton",
            catchphrase: "An American Musical",
            description: "Hamilton is a musical about Alexander Hamilton, with music, lyrics and book by Lin-Manuel Miranda. The show, inspired by the 2004 biography Alexander Hamilton, by historian Ron Chernow, has achieved both critical acclaim and box office success.",
            image_url: "http://www.trbimg.com/img-5665dfbe/turbine/ct-hamilton-tour-launch-chicago",
            video_url: "OmigjxG7KWI",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "Then She Fell",
            catchphrase: "An immersive theater experience combining a hospital ward and the writings of Lewis Carroll.",
            description: "Then She Fell is a fully immersive, multi-sensory experience in which only 15 audience members per performance explore a dreamscape where every alcove, corner, and corridor has been transformed into a lushly designed world. Inspired by the life and writings of Lewis Carroll, it offers an Alice-like experience for audience members as they explore the rooms, often by themselves, in order to discover hidden scenes; encounter performers one-on-one; unearth clues that illuminate a shrouded history; use skeleton keys to gain access to guarded secrets; and imbibe elixirs custom designed by one of NYC’s foremost mixologists.",
            image_url: "http://www.maxamoo.com/wp-content/uploads/ThenSheFell3.jpg",
            video_url: "NJ0FKKfxygM",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "The Speakeasy",
            catchphrase: "Illicit Bar. Crooked Casino. Immersive Theatrical Experience",
            description: "Upon entering the secret venue that’s hidden behind an old clock shop in the Civic Center area (you’ll be given instructions and password by text message or email, one of the show’s few nods to the 21st century), you find yourself in a dimly lit bar: faded Persian carpets, wall sconces, a red velvet curtain, Tiffany lamps, an old brocade sofa, an upright piano on a platform. You’ll eavesdrop on overlapping conversations, including one between a shell-shocked war veteran and his buddy and another between a couple in San Francisco from the 'farmland'--faraway Concord. From this point on, things get increasingly layered as the storyline progresses and as you wander from room to room. The Speakeasy is a choose-your-own-adventure collection of character studies of the folks who populate a San Francisco speakeasy in the 1920s. There are the mob bosses and the showgirls, the fallen heroes and the families they (tried to) leave behind.",
            image_url: "http://ww2.hdnux.com/photos/26/33/44/5880097/5/920x920.jpg",
            video_url: "vF48ECGrUZw",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "Muse in Concert",
            catchphrase: "The Uprising Tour",
            description: "Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, piano, keyboards), Chris Wolstenholme (bass guitar, backing vocals) and Dominic Howard (drums, percussion).",
            image_url: "http://nepascene.com/wp-content/uploads/2015/05/muse-concert-review.jpg",
            video_url: "Ek0SgwWmF9w",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "We Players' Ondine",
            catchphrase: "A Love Story Where Worlds Collide",
            description: "Ondine is the tragicomic love story between a mystical creature of the deep and a hapless knight errant. A fable of the follies of love, Ondine also explores our own fraught relationship with Nature. Worlds collide, aquatic powers wreak havoc among men, who will be left standing?… Our story comes to life where Land’s End meets the multitudinous seas. At Sutro Baths and Sutro Heights Park, we experience the timeless depths as we traverse the cliffs, wander through the enchanting forest of cypress trees, and visit the decaying remains of a once regal mansion.",
            image_url: "http://media1.fdncms.com/sfweekly/imager/hybrid-place-hybrid-play-we-players/u/original/3584464/2015_04_22_17-09-46_638b.jpg",
            video_url: "2VCtvTApaxs",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "We Player's Macbeth",
            catchphrase: "At Fort Point",
            description: "This spring, We Players remounts its epic production of Macbeth at Fort Point. Multiple performance trajectories wind through the dark stone corridors, narrow passageways, expansive brick casemates, and inner chambers of the fort. On the parade ground, in the direct onslaught of the billowing fog and relentless wind, the witches work their charms. The Golden Gate Bridge soars overhead, the city skyline flickers – a full sensory immersion into Macbeth’s Scotland as it collides with Civil War era and modern day San Francisco. In collaboration with the National Park Service.",
            image_url: "http://richmondsfblog.com/wp-content/uploads/2015/02/fortpoint.jpg",
            video_url: "xGkNneyWx_M",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "Macbeth at St. Ann's Warehouse",
            catchphrase: "Haunting and Suspenseful",
            description: "TR Warszawa, Poland’s most exciting theater company, arrives in New York with a spectacular production of Macbeth that boldly reinvents the classic for the twenty-first century. With a huge cinematic sweep, the production takes multi-media theater to the limit, directed by the gifted Grzegorz Jarzyna. A dramatic two-story set, video walls, special effects, an extraordinary, layered soundscape, and a deep well of acting tradition transform Shakespeare’s web of intimacy, politics and the supernatural into a contemporary living film. St. Ann’s Warehouse will create an outdoor theater in the Civil War-era Tobacco Warehouse, located in Empire-Fulton FerryState Park, across the street from St. Ann’s Warehouse. This historic site’s romantic, open air and column-free structure is well-suited to St. Ann’s visionary programming, at the gateway to the Brooklyn Waterfront.",
            image_url: "https://static01.nyt.com/images/2015/10/05/theater/20151005-stanns-slide-ACKX/20151005-stanns-slide-ACKX-superJumbo.jpg",
            video_url: "KDm0MgpIY_s",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

    Event.create({
            title: "Fuerzabruta Tours to SF",
            catchphrase: "An uninhibited and unforgettable show you have to see to believe!",
            description: "Fuerza Bruta is a postmodern theatre show that originated in Buenos Aires in 2003 and was created by Diqui James. It is also the name of the company that brings the show. Members of the company that created Fuerza Bruta were co-creators of a previous company called De La Guarda, which presented a similar show named Villa Villa. It is a very energetic spectacle under the motto Brute Force, features interaction between the performers and the public, and is described as a 360 degree experience.",
            image_url: "https://kudago.com/media/images/event/c8/04/c8041917ad152d978173f4a1046627d1.jpg",
            video_url: "taBAtxasWto",
            user_id: 2,
            revenue_goal: 20000,
            revenue_status: 0
            })

####################################
# SHOWTIMES
####################################

    Showtime.create({
            event_id: 1,
            date: "2016-07-16 00:00:00",
            time: "2000-01-01 08:30:00",
            location: "The Globe Theatre in London"
            })

    Showtime.create({
            event_id: 2,
            date: "2016-08-24 00:00:00",
            time: "2000-01-01 02:30:00",
            location: "The McKittrick Hotel in New York"
            })

    Showtime.create({
            event_id: 2,
            date: "2016-09-08 00:00:00",
            time: "2000-01-01 08:30:00",
            location: "The McKittrick Hotel in New York"
            })


      Showtime.create({
              event_id: 3,
              date: "2016-06-12 00:00:00",
              time: "2000-01-01 07:30:00",
              location: "A Secret San Francisco Location Announced The Day Of"
              })

              Showtime.create({
                      event_id: 3,
                      date: "2016-07-14 00:00:00",
                      time: "2000-01-01 06:30:00",
                      location: "A Secret San Francisco Location Announced The Day Of"
                      })

                      Showtime.create({
                              event_id: 3,
                              date: "2016-02-13 00:00:00",
                              time: "2000-01-01 08:30:00",
                              location: "A Secret San Francisco Location Announced The Day Of"
                              })


      Showtime.create({
              event_id: 4,
              date: "2016-06-15 00:00:00",
              time: "2000-01-01 10:30:00",
              location: "Portugal"
              })

              Showtime.create({
                      event_id: 4,
                      date: "2016-07-16 00:00:00",
                      time: "2000-01-01 08:30:00",
                      location: "Brazil"
                      })

                      Showtime.create({
                              event_id: 4,
                              date: "2016-08-21 00:00:00",
                              time: "2000-01-01 08:30:00",
                              location: "Cuba"
                              })

    Showtime.create({
            event_id: 5,
            date: "2016-07-02 00:00:00",
            time: "2000-01-01 08:30:00",
            location: "The Roy Rodgers Theatre"
            })


            Showtime.create({
                    event_id: 5,
                    date: "2016-07-03 00:00:00",
                    time: "2000-01-01 08:00:00",
                    location: "The Roy Rodgers Theatre"
                    })


                    Showtime.create({
                            event_id: 5,
                            date: "2016-07-04 00:00:00",
                            time: "2000-01-01 08:00:00",
                            location: "The Roy Rodgers Theatre"
                            })

    Showtime.create({
            event_id: 6,
            date: "2016-10-17 00:00:00",
            time: "2000-01-01 08:30:00",
            location: "Bushwick"
            })

            Showtime.create({
                    event_id: 6,
                    date: "2016-10-18 00:00:00",
                    time: "2000-01-01 08:30:00",
                    location: "Bushwick"
                    })

                    Showtime.create({
                            event_id: 6,
                            date: "2016-10-19 00:00:00",
                            time: "2000-01-01 08:30:00",
                            location: "Bushwick"
                            })

    Showtime.create({
            event_id: 7,
            date: "2016-04-12 00:00:00",
            time: "2000-01-01 08:30:00",
            location: "San Francisco"
            })

            Showtime.create({
                    event_id: 7,
                    date: "2016-04-15 00:00:00",
                    time: "2000-01-01 08:30:00",
                    location: "San Francisco"
                    })

                    Showtime.create({
                            event_id: 7,
                            date: "2016-05-21 00:00:00",
                            time: "2000-01-01 08:30:00",
                            location: "San Francisco"
                            })

    Showtime.create({
            event_id: 8,
            date: "2016-08-18 00:00:00",
            time: "2000-01-01 08:30:00",
            location: "The Warfield"
            })

            Showtime.create({
                    event_id: 8,
                    date: "2016-08-24 00:00:00",
                    time: "2000-01-01 08:30:00",
                    location: "The San Jose Arena"
                    })

                    Showtime.create({
                            event_id: 8,
                            date: "2016-08-27 00:00:00",
                            time: "2000-01-01 08:30:00",
                            location: "Madison Square Garden"
                            })

    Showtime.create({
            event_id: 9,
            date: "2016-04-19 00:00:00",
            time: "2000-01-01 08:30:00",
            location: "Sutro Baths"
            })

            Showtime.create({
                    event_id: 9,
                    date: "2016-04-20 00:00:00",
                    time: "2000-01-01 08:30:00",
                    location: "Sutro Baths"
                    })

                    Showtime.create({
                            event_id: 9,
                            date: "2016-04-21 00:00:00",
                            time: "2000-01-01 08:30:00",
                            location: "Sutro Baths"
                            })

    Showtime.create({
          event_id: 10,
          date: "2017-02-13 00:00:00",
          time: "2000-01-01 08:30:00",
          location: "Fort Point"
          })

          Showtime.create({
                event_id: 10,
                date: "2017-02-14 00:00:00",
                time: "2000-01-01 08:30:00",
                location: "Fort Point"
                })

                Showtime.create({
                      event_id: 10,
                      date: "2017-02-15 00:00:00",
                      time: "2000-01-01 08:30:00",
                      location: "Fort Point"
                      })

    Showtime.create({
          event_id: 11,
          date: "2016-06-08 00:00:00",
          time: "2000-01-01 08:30:00",
          location: "The Tobacco Warehouse in Brooklyn"
          })

          Showtime.create({
                event_id: 11,
                date: "2016-06-09 00:00:00",
                time: "2000-01-01 08:30:00",
                location: "The Tobacco Warehouse in Brooklyn"
                })

                Showtime.create({
                      event_id: 11,
                      date: "2016-06-10 00:00:00",
                      time: "2000-01-01 08:30:00",
                      location: "The Tobacco Warehouse in Brooklyn"
                      })

    Showtime.create({
          event_id: 12,
          date: "2016-07-16 00:00:00",
          time: "2000-01-01 08:30:00",
          location: "Dogpath Warehouse"
          })

          Showtime.create({
                event_id: 12,
                date: "2016-07-17 00:00:00",
                time: "2000-01-01 08:30:00",
                location: "Dogpath Warehouse"
                })

                Showtime.create({
                      event_id: 12,
                      date: "2016-07-18 00:00:00",
                      time: "2000-01-01 08:30:00",
                      location: "Dogpath Warehouse"
                      })

####################################
# TICKETS
####################################

    Ticket.create({
            showtime_id: 1,
            tier: "Groundling",
            description: "Stand on the floor of the Globe and experience the venue as Shakespeare's patrons would have.",
            price: 10
            })

    Ticket.create({
            showtime_id: 1,
            tier: "Box Seats",
            description: "Sit on wooden benches with a great view of the action.",
            price: 40
            })

    Ticket.create({
            showtime_id: 1,
            tier: "The Queen's Seat",
            description: "Get the best view of the Festival.",
            price: 70
            })

    Ticket.create({
            showtime_id: 2,
            tier: "Standard",
            description: "Your reservation for Sleep No More grants you entry to The McKittrick Hotel at the check-in time that you select on the right. This does not include food, drink or a reservation at The Heath.",
            price: 130
            })

    Ticket.create({
            showtime_id: 2,
            tier: "Maximilian's Guest",
            description: "As Maximilian’s guest you will be welcome to go straight to the head of the line for priority entry. The doorman will escort you inside and assist you with complimentary coat check then you will be directed to your reserved table in our Manderley Bar.  This does not include food, drink or a reservation at The Heath. To enter Sleep No More as Maximilian's guest and have a dinner reservation please call 212-904-1883.",
            price: 180
            })

    Ticket.create({
            showtime_id: 2,
            tier: "With a Champagne Table",
            description: "You will be welcome to go straight to the head of the line for priority entry to Sleep No More. The doorman will escort you inside and assist you with complimentary coat check.",
            price: 295
            })


    Ticket.create({
            showtime_id: 3,
            tier: "Standard",
            description: "Your reservation for Sleep No More grants you entry to The McKittrick Hotel at the check-in time that you select on the right. This does not include food, drink or a reservation at The Heath.",
            price: 130
            })

    Ticket.create({
            showtime_id: 3,
            tier: "Maximilian's Guest",
            description: "As Maximilian’s guest you will be welcome to go straight to the head of the line for priority entry. The doorman will escort you inside and assist you with complimentary coat check then you will be directed to your reserved table in our Manderley Bar.  This does not include food, drink or a reservation at The Heath. To enter Sleep No More as Maximilian's guest and have a dinner reservation please call 212-904-1883..",
            price: 180
            })

    Ticket.create({
            showtime_id: 3,
            tier: "With a Champagne Table",
            description: "You will be welcome to go straight to the head of the line for priority entry to Sleep No More. The doorman will escort you inside and assist you with complimentary coat check then you will be directed to your reserved table in our Manderley Bar with a bottle of our finest champagne. There will be one seat reserved per Champagne Guest ticket purchased and the bottles of champagne will be included as follows: 1 bottle for 2-3 Guests, 2 bottles for 4 - 5 Guests, etc.)",
            price: 295
            })

    Ticket.create({
            showtime_id: 4,
            tier: "Four-Course Meal",
            description: "",
            price: 75
            })

    Ticket.create({
            showtime_id: 4,
            tier: "Eight-Course Meal",
            description: "",
            price: 125
            })

    Ticket.create({
            showtime_id: 4,
            tier: "Eight-Course Meal with Wine Pairings",
            description: "",
            price: 225
            })

    Ticket.create({
            showtime_id: 5,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 5,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 5,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 6,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 6,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 6,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 7,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 7,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 7,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 8,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 8,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 8,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 9,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 9,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 9,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 10,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 10,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 10,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 11,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 11,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 11,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 12,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 12,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 12,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 13,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 13,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 13,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 14,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 14,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 14,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 15,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 15,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 15,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

      Ticket.create({
              showtime_id: 16,
              tier: "General Admission",
              description: "Entry into the Experience.",
              price: 15
              })

              Ticket.create({
                      showtime_id: 16,
                      tier: "VIP Admission",
                      description: "Entry into the Experience, plus Bonus Amenities",
                      price: 45
                      })

                      Ticket.create({
                              showtime_id: 16,
                              tier: "VIP Admission and Dinner",
                              description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                              price: 95
                              })

    Ticket.create({
            showtime_id: 17,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 17,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 17,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 18,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 18,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 18,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })


    Ticket.create({
            showtime_id: 19,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 19,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 19,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 20,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 20,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 20,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 21,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 21,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 21,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })

    Ticket.create({
            showtime_id: 22,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 22,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 22,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })


    Ticket.create({
            showtime_id: 23,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 23,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 23,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })


    Ticket.create({
            showtime_id: 24,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 24,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 24,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                            })



    Ticket.create({
          showtime_id: 25,
          tier: "General Admission",
          description: "Entry into the Experience.",
          price: 15
          })

          Ticket.create({
                  showtime_id: 25,
                  tier: "VIP Admission",
                  description: "Entry into the Experience, plus Bonus Amenities",
                  price: 45
                  })

                  Ticket.create({
                          showtime_id: 25,
                          tier: "VIP Admission and Dinner",
                          description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                          price: 95
                          })


      Ticket.create({
              showtime_id: 26,
              tier: "General Admission",
              description: "Entry into the Experience.",
              price: 15
              })

              Ticket.create({
                      showtime_id: 26,
                      tier: "VIP Admission",
                      description: "Entry into the Experience, plus Bonus Amenities",
                      price: 45
                      })

                      Ticket.create({
                              showtime_id: 26,
                              tier: "VIP Admission and Dinner",
                              description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                              price: 95
                                                  })


      Ticket.create({
              showtime_id: 27,
              tier: "General Admission",
              description: "Entry into the Experience.",
              price: 15
              })

              Ticket.create({
                      showtime_id: 27,
                      tier: "VIP Admission",
                      description: "Entry into the Experience, plus Bonus Amenities",
                      price: 45
                      })

                      Ticket.create({
                              showtime_id: 27,
                              tier: "VIP Admission and Dinner",
                              description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                              price: 95
                                                  })


    Ticket.create({
            showtime_id: 28,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 28,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 28,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                              })

    Ticket.create({
          showtime_id: 29,
          tier: "General Admission",
          description: "Entry into the Experience.",
          price: 15
          })

          Ticket.create({
                  showtime_id: 29,
                  tier: "VIP Admission",
                  description: "Entry into the Experience, plus Bonus Amenities",
                  price: 45
                  })

                  Ticket.create({
                          showtime_id: 29,
                          tier: "VIP Admission and Dinner",
                          description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                          price: 95
                            })


      Ticket.create({
            showtime_id: 30,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 30,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 30,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                              })


        Ticket.create({
              showtime_id: 31,
              tier: "General Admission",
              description: "Entry into the Experience.",
              price: 15
              })

              Ticket.create({
                      showtime_id: 31,
                      tier: "VIP Admission",
                      description: "Entry into the Experience, plus Bonus Amenities",
                      price: 45
                      })

                      Ticket.create({
                              showtime_id: 31,
                              tier: "VIP Admission and Dinner",
                              description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                              price: 95
                                })


      Ticket.create({
            showtime_id: 32,
            tier: "General Admission",
            description: "Entry into the Experience.",
            price: 15
            })

            Ticket.create({
                    showtime_id: 32,
                    tier: "VIP Admission",
                    description: "Entry into the Experience, plus Bonus Amenities",
                    price: 45
                    })

                    Ticket.create({
                            showtime_id: 32,
                            tier: "VIP Admission and Dinner",
                            description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                            price: 95
                              })


        Ticket.create({
              showtime_id: 33,
              tier: "General Admission",
              description: "Entry into the Experience.",
              price: 15
              })

              Ticket.create({
                      showtime_id: 33,
                      tier: "VIP Admission",
                      description: "Entry into the Experience, plus Bonus Amenities",
                      price: 45
                      })

                      Ticket.create({
                              showtime_id: 33,
                              tier: "VIP Admission and Dinner",
                              description: "Entry into the Experience, plus Bonus Amenities, Dinner, and Free Parking",
                              price: 95
                                })


####################################
# TICKET PURCHASES
####################################

    TicketPurchase.create({
            user_id: 1,
            ticket_id: 1
            })


    TicketPurchase.create({
            user_id: 1,
            ticket_id: 6
            })

    1.times do |i|
      i = 1
      while i <= 53
        TicketPurchase.create({
                user_id: 2,
                ticket_id: i
                })
        i += 1
      end
    end
