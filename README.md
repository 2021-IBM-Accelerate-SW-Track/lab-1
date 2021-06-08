# Lab 1: To-do list application
## Requirements
Create and style a to-do list application. This app needs to:
+ Take in to-do items
+ Display to-do items
+ Allow user to mark items as complete
+ Provide date and time of item addition
+ Validate there are no duplicated items
+ Update list items
+ Delete list items
+ Use Material UI styles
+ Use list.map function for list items
+ Use functional components

## Testing ids
When testing web components, developers often use ids to uniquely define elements on a page. The React Testing Library provides a query which can identify items with the attribute `data-testid` to do just that (reference [here](https://testing-library.com/docs/queries/bytestid/)). We have implemented simple tests in `App.test.js` that will look for ids in your code. To get familiar with this idea, implement the attributes below:
+ `data-testid="new-item-input"` on the Input component which takes user input for new items.
+ `data-testid="new-item-button"` on the Button component which submits new items to the to do list.
Note: Material UI components (and other libraries) render as HTML components under the hood, so using Material UI's TextField would still render in the DOM as an Input element and pass the tests for this lab.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

