# Course Selling App
This is an online course selling app. Students now able to learn from any teacher around the globe without the hesitation of being there or not being able to reach there.

This app is build using MERN Tech Stack. 
## Frondend - NEXT.js
Frontend is created using the Next.js framework built over the top of the React.js which made working with React.js even better.

## Backend - Express.js
Backend is created using the Express.js framework, which is used to create the HTTP Server and handle all the logic of the app working behind the scenes of any video streaming app. For now, routes are being handled using backend and soon it would be done using Next.js routing feature.

## DataBase - MongoDB
MongoDB is being used to store the data related to the app like user data, creator data, created video lectures, etc. Mongoose library which works great with Express.js

## Authentication - JWT tokens
For now, json web token is used to test the authentication logic. Soon, Next.js authentication system would be implemented for better user experience as google auth and twitter auth would help user to sign in easily. Also, it would help the maintainers to verify the credibility of the app users

## Local Setup

1. Fork the repo by clicking `fork` button at the top-right corner
![image](https://github.com/akkshitgupta/course-selling-app/assets/96991785/30bc5e69-1ade-4caf-91bc-56d1ecc6cb9a)

2. Make a local copy of project by cloning it.
> /* open your terminal or command prompt */
```
git clone https://github.com/user_name/course-selling-app.git
cd course-selling-app
```
replace the `user_name` with yours.

3. Install the dependencies using your favourite package manager, mine `yarn` 😄
```
yarn install
```
OR with npm
```
npm install
```
4. Run the frontend locally at `http://localhost:3000/` using
```
npm run dev
```
   or
```
yarn run dev
```
5. Host the server locally at `http://localhost:3002/` using
```
cd server
node index.js
```
6. Test the endpoints in Postman
> Soon, API endpoints will be available on Postman to fast forward your API learning process 
