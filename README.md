## NextAuth Tutorial

<img src="public/NextAuth_tutorial.png" alt="Alt text" title="Optional title">

Using the Next 13, this is an upgrade on the NextAuth with credentials tutorial on [Youtube](https://www.youtube.com/watch?v=K9ZzYGINC00&list=PLAnect3-bJNb8t8m6-Tg99OY4xk-a7uWs).

## Start the project

This project has to be cloned and initialized using the following commands:

```
npm i
npm run dev
```

## .env

Remember that .env.local file is needed for the following environment variables.

Do not share nor commit the .env.local file. This is only here for learning purposes. The .env.local file should be on your .gitingore!

```
GITHUB_ID=<token>
GITHUB_SECRET=<token>

NEXTAUTH_SECRET=<token>
NEXTAUTH_URL=<token> (use [NEXTAUTH_URL=http://localhost:3000/] for testing)
NEXTAUTH_JWT_SECRET=<token>

MONGODB_USER=<token>
MONGODB_PASSWORD=<token>
MONGODB_DB=<token>
MONGODB_URI=<token>
```
