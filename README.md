# Guestlogix Take Home Test

Hey! We are stoked that you are interested in joining the team at Guestlogix.

We feel that the best place to really show us your skills is somewhere you feel comfortable. This test should not take you some crazy amount of time to complete.

This take home test is used to determine how you go about solving problems logically, as well as building out easy to use, performant user interfaces. The test is very open to interpretation, and you will see down below that there are few hard requirements, and we will leave the rest up to you to jazz it up a little.

### What is the test?

You will be building a typeahead input field. There are some examples listed down below, but basically you will build an input field that a user can type into, and it will start to show them possible results based off that input, the user can then select a result to populate the field.

### User Stories (Requirements)

- As a user I can start typing into the field, and filtered results will show up as I type
- As a user I can select a result and it will populate the input.
- As a user I can see the matching filter in bold in the results. (ie. __Ama__nda Smith)
- As a user I can view all possible results at any time during my input.

Feel free to go above and beyond if you have ideas for extra features!

### Examples

[React AutoComplete](https://reactcommunity.org/react-autocomplete/async-data/)
[React Select (Only States example)](http://jedwatson.github.io/react-select/)
[JQuery UI Autocomplete](https://jqueryui.com/autocomplete/)

### Getting Started

You will have to run `npm install` or `yarn` inside the directory to install required modules for faker and webpack.

For this test you can use any technology you want... seriously. JQuery? Do it. React? Send it. Angular 1? That still exists? Basically, the point is, use whatever you want, really, no need to try and impress us with a new tech if you aren't familiar with it, use what you like, anyone can learn a new framework.

We have setup a webpack dev server for you. The entry point is 'src/index.js' and 'public/index.html' is the html file it'll serve. If you do not need the dev server, or wish to change it, feel free to do so! Just make sure all of your solution lives in `src` so we know where to look! The dev server will run on `localhost:8080` and just run `npm start` or `yarn start` to run it!

The `lib/usersApi.js` file we have provided you with is a mock API, for this test, pretend the data you are getting is coming from an API endpoint. You will need to develop user filtering yourself in the `searchUsers` function inside of `lib/usersApi.js`. For that you should only need to change that function, along with the amount of users it is provided.

### Submitting

1. Run through it one last time to make sure it works!
2. Push up to your repo one last time
3. Email hgoddard@guestlogix.com with the link to your repository

### Questions

If you have any questions during the challenge feel free to email Henry Goddard at hgoddard@guestlogix.com. Whether it be a question about the requirements, submitting, anything, just send the email!
