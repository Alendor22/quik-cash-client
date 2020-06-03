# Quik-Cash-Client

The frontend of the afore mentioned application was made using the latest version of the React library (v16.13.1), as well as the following libraries Redux, redux-thunk, react-redux, and react-router.  Quik-Cash is a Letgo clone of sorts whereby a user can post products, goods, and services and buy products, goods, and services from other users, a user may also post and buy from themselves if they wished to do so.  With that being said this is a self referential relationship domain, there are only 2 models a User model and a Listing model.  Auth with JWT was utilized in the development of this application, it made sense to make sure a user was in fact the user that posted a listing via the use of auth, as well as to only render certain views/access to a user if they were indeed logged in.  The backend of the App "Quik-Cash" was stubbed out using Rails new in api mode, then scaffolded with the models needed to render JSON.  Active model serializer was also used to serialize the data being sent from the backend to the front end. To view the repo for the backend please see https://github.com/Alendor22/quik-cash-api.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.