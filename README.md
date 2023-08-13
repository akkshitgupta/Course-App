# Course App
This is an online course selling app. Students now able to learn from any teacher around the globe without the hesitation of being there or not being able to reach there.

This app is build using MERN Tech Stack. 
## FULLSTACK - NEXT.js
Frontend is created using the [Next.js](https://nextjs.org/docs) framework built over the top of the React.js which made working with React.js even better.
Backend is also done using serverless functions of the Next.js within in the api folder with the help of app routes


## DataBase - MongoDB
MongoDB is being used to store the data related to the app like user data, creator data, created video lectures, etc. Mongoose library which works great with Express.js

## Authentication - Next-Auth
[Next-auth](https://next-auth.js.org/) library has been implemented for better user experience as Google auth and GitHub auth for user to sign in easily. Also, it help the maintainers to verify the credibility of the app users

## Local Setup

1. Fork the repo by clicking `fork` button at the top-right corner
![image](https://github.com/akkshitgupta/course-selling-app/assets/96991785/30bc5e69-1ade-4caf-91bc-56d1ecc6cb9a)

2. Make a local copy of project by cloning it.
> Open your terminal or command prompt and run the below commands
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
5. Set up the variables to locally run the code successfully
- copy the `.env.example` file as `.env` and replace all the sample credentials with yours originals.
- Get your `MONGO_URL` and `MONGO_DB` credentials and replace them with those in `.env`
- Set a `SECRET_KEY` of your choice, it can be any random string.
- Get your next-auth providers' credentials, atleast one. [learn more here](https://next-auth.js.org/configuration/providers/oauth#how-to)
