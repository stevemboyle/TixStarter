# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Events

- `GET /api/events`
  - Events index/search
  - accepts pagination params (if I get there)
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Showtimes

- `GET /api/showtimes`
- `POST /api/showtimes`
- `GET /api/showtimes/:id`
- `PATCH /api/showtimes/:id`
- `DELETE /api/showtimes/:id`
  - accepts pagination params (if I get there)


### Tickets

- `GET /api/tickets`
- `POST /api/tickets`
- `GET /api/tickets/:id`
- `PATCH /api/tickets/:id`
- `DELETE /api/tickets/:id`
  - accepts pagination params (if I get there)
