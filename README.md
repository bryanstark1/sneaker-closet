# Sneaker Closet

## APP URL: https://sleepy-brushlands-83505-4ecc231d4b1c.herokuapp.com/

## OVERVIEW

This app compiles a list of sneaker that you can add on your own. The "My Closet" page is the main list of all sneakers that have been added. Clicking on either the sneaker model or name, will access the sneaker details page for that specific sneaker. With the details page there are options to update the sneaker data, or delete the sneaker from the database entirely.


## TECH

1. Reset Form buttons - Noticed these while researching input types on W3Schools. Decided that implementing them would provide useful functionality in the New and Edit forms. The functinoality is applied by simply adding an input type attribute with a value of "reset" to the button element. The button will only reset values in input fields that have been manually entered by a user. If the input field value was initially set by a value attribute, like on the Edit Sneaker page, the reset button will not clear the field - However, it will reset it back to the value attribute's value if the user has altered the value in the input field.

2. Instead of immediately deleting a sneaker upon clicking the "Delete Sneaker" button, I wanted a modal to prompt the user to confirm before deleting. I utilized some simple DOM manipulation with vanilla JS in order to achieve the proper effect. The modal now opens on the "Delete Sneaker" button click, the "Confirm Delete" button in the modal is what will trigger the sneaker to be removed from the database, and the user redirection back to the list of all sneakers.

   By placing the element used for the modal within another div (#delete-prompt) that covered the entire page, I was able to prevent the user from clicking on anything underneath the modal while it's open. Forcing the user to either cancel the delete request to close the modal, or confirm the delete. In order for this to work properly, the #delete-prompt div needed certain CSS properties like:
      ```CSS
      height: 100vh;
      width: 100vw;
      position: fixed;
      ```

- Referenced [StackOverflow](https://stackoverflow.com/questions/45607982/how-to-disable-background-when-modal-window-pops-up) to understand how to disable the page under the modal while the modal is open.

- Issue with console/element flickering when trying to toggle the display from flex to none. Needed to implement event.preventDefault() - [StackOverflow](https://stackoverflow.com/questions/55889300/my-javascript-output-flashes-for-a-second-and-then-disappears)


3. Mobile Menu - Utilized a hamburger style menu button that when clicked, triggers a JQuery slideToggle animation. The menu initially pushed all page content below it futher down upon opening. In order to remedy this, I applied the following CSS properties to the header element acting as a container for it all:
    ```CSS
    position: absolute;
    width: 100%;
    ```



## ISSUES

1. Issue with date format on show pages. Chrome is displaying the date of day the before the release date that is stored in the database for each sneaker. (If a release date is 4/1/2017, Chrome displays 3/31/2017)

   This issue was fixed upon deploying to Heroku. Issue was related to time zones and seems to have been specific to local host in browser.

2. Issue on edit page, date value isn't automatically filling in the input element on the edit page. Prevents user from editing a sneaker without manually reselecting the Release Date. This is because the format of the value doesn't match the required format of the input type value (YYY-MM-DD).

I fixed this by changing:
```javascript
<label>Release Date
  <input type="date" name="release" value="<%= sneaker.release %>">
</label>
```
To:
```javascript
<% const year = sneaker.release.getFullYear(); %>
<% let month = sneaker.release.getMonth() + 1; %>
<% if (month <= 9 ) { %>
  <% month = '0' + month; %>
<% }; %>
<% let day = sneaker.release.getDate() + 1; %>
<% if (day <= 9 ) { %>
  <% day = '0' + day; %>
<% }; %>
<label>Release Date
  <input type="date" name="release" value="<%= year %>-<%= month %>-<%= day %>">
</label>
```

   Because values for Month and Day act like indexes of an array (starting at 0), I needed to increase each of these values by 1. This led to another issue - What if one of these increased values indicates a month or day that doesn't exist? (ex: January 32, February 30, etc). In order to circumvent this issue I had to further modify the JavaScript above to:
```javascript
<% let year = sneaker.release.getFullYear(); %>
<% let month = sneaker.release.getMonth() + 1; %>
<% let day = sneaker.release.getDate() + 1; %>
<% if (month === 12) { %>
  <% if (day === 32) { %>
    <% month = 1; %>
    <% day = 1; %>
    <% year = year + 1; %>
  <% }; %>
<% } else if (month === 2) { %>
  <% if (year % 4 === 0) { %>
    <% if (day === 30) { %>
      <% month = month + 1; %>
      <% day = 1; %>
    <% }; %>
  <% } else { %>
      <% if (day === 29) { %>
        <% month = month + 1; %>
        <% day = 1; %>
      <% }; %>
  <% } %>
<% } else if (month === 4 || month === 6 || month === 9 || month === 11) { %>
  <% if (day === 31) { %>
    <% month = month + 1; %>
    <% day = 1; %>
  <% }; %>
<% } else { %>
  <% if (day === 32) { %>
    <% month = month + 1; %>
    <% day = 1 %>
  <% }; %>
<% }; %>
<% if (month <= 9 ) { %>
  <% month = ('0' + (month)); %>
<% };%>
<% if (day <= 9 ) { %>
  <% day = ('0' + (day)); %>
<% };%>
<label>Release Date
  <input type="date" name="release" value="<%= year %>-<%= month %>-<%= day %>" required>
</label>
```

## To Add:

1. Including '$' dollar sign in the input fields for the New and Edit pages.

2. Make entire row of table clickable, instead of just the linked words.

3. OAuth login to allow users to create personal "closets" with their own list of sneakers.

4. Find and implement a sneaker API to automate the process of filling in the "new sneaker" form.