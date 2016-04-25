
# Phase 1: User Authentication, Note Model and JSON API
This document is still in progress. In the meantime, please refer to the ReadMe or the TixStarter Phases PDF for a description of the various phases. 

## Rails
### Models
* User
* Event

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::EventsController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* events/index.json.jbuilder
* events/show.json.jbuilder
* events/_ events.json.jbuilder (Partial)

## Flux
### Views (React Components)

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt (Gem)
