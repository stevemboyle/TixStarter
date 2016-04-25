
# Phase 2: Flux Architecture and Note CRUD (2 days)
This document is still in progress. In the meantime, please refer to the ReadMe or the TixStarter Phases PDF for a description of the various phases. 

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* NotesIndex
  - NotesIndexItem
* NoteForm

### Stores
* Note

### Actions
* ApiActions.receiveAllNotes -> triggered by ApiUtil
* ApiActions.receiveSingleNote
* ApiActions.deleteNote
* NoteActions.fetchAllNotes -> triggers ApiUtil
* NoteActions.fetchSingleNote
* NoteActions.createNote
* NoteActions.editNote
* NoteActions.destroyNote

### ApiUtil
* ApiUtil.fetchAllNotes
* ApiUtil.fetchSingleNote
* ApiUtil.createNote
* ApiUtil.editNote
* ApiUtil.destroyNote

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
