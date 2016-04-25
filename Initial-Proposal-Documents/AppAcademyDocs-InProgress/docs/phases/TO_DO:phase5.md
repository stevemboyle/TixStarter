

# Phase 5: Reminders and Garbage Collection
This document is still in progress. In the meantime, please refer to the ReadMe or the TixStarter Phases PDF for a description of the various phases. 

## Rails
### Models
* Reminder

### Controllers
* Api::RemindersController (create, destroy, index, show, update)

### Views
* reminders/index.json.jbuilder

## Flux
### Views (React Components)
* RemindersIndex
  - ReminderIndexItem
* ReminderShow
* ReminderForm

### Stores
* Reminder

### Actions
* ApiActions.receiveAllReminders -> triggered by ApiUtil
* ApiActions.receiveSingleReminder
* ApiActions.deleteReminder
* ReminderActions.fetchAllReminders -> triggers ApiUtil
* ReminderActions.fetchSingleReminder
* ReminderActions.createReminder
* ReminderActions.updateReminder
* ReminderActions.destroyReminder

### ApiUtil
* ApiUtil.fetchAllReminders
* ApiUtil.fetchSingleReminder
* ApiUtil.createReminder
* ApiUtil.updateReminder
* ApiUtil.destroyReminder

## Gems/Libraries