# sneaker-closet

https://sleepy-brushlands-83505-4ecc231d4b1c.herokuapp.com/

STORY

This app compiles a list of sneaker that you can add on your own. The "My Closet" page is the main list of all sneakers that have been added. Clicking on either the sneaker model or name, will access the sneaker details page for that specific sneaker. With the details page there are options to update the sneaker data, or delete the sneaker from the database entirely.


TECH

1. Reset Form buttons - Noticed these while researching input types on W3Schools. Decided that implementing them would provide useful functionality in the New and Edit forms.

2. Instead of auto deleting on Delete button click, I wanted a modal to prompt the user to confirm before deleting.

- Referenced https://stackoverflow.com/questions/45607982/how-to-disable-background-when-modal-window-pops-up to understand how to disable the page under the modal while the modal is open. Requiring a choice of either "Cancel" or "Confirm Delete".

- Issue with console/element flickering when trying to toggle the display from flex to none. Needed to implement event.preventDefault()
https://stackoverflow.com/questions/55889300/my-javascript-output-flashes-for-a-second-and-then-disappears




ISSUES

1. Issue with date format on show pages. Chrome is displaying the date of the before the release date that is stored in the database for each sneaker. (If a release date is 4/1/2017, Chrome displays 3/31/2017)

- This issue was fixed upon deploying to Heroku. Issue seems to have been specific to local host in browser.

2. Issue on edit page, date value isn't automatically filling in the input element on the edit page.

3. Including '$' dollar sign in the input fields for the New and Edit pages.