# Fullstack React app

## 2/16/2019 JavaMan React GraphQL Web Session

I'm going to add this to the README.md

My Notes path: 03-user-authentication.md/03-user-authorization-in-graphql/12-query-backend-for-cologne.md

[notes for today](https://github.com/kingluddite/web-dev-notes/blob/master/full-stack/udemy/118n-graphql-apollo-react/03-user-authentication/03-user-authorization-in-graphql/12-query-backend-for-cologne.md#L1-L225)

[We covered render props](https://github.com/kingluddite/family-tree/blob/master/frontend/src/components/genealogy/GenealogyPage.js#L14-L22)

[We used the playground](https://i.imgur.com/nyoZyL9.png) to make sure our GraphQL was correct and pulling in the data we wanted (which was one specific genealogy)

The [data we get back looks like this](https://i.imgur.com/yblT8bt.png):

We had to populate with [a dynamic variable (\_id)](https://i.imgur.com/BjncJCZ.png)

Then we populate our [client side GraphQL (queries/index.js)](https://github.com/kingluddite/family-tree/blob/master/frontend/src/queries/index.js#L17-L25)

We know that query works so we write a simple shell and export it (so we can use it inside other files and then we just paste our playground query that we know it works inside it

We then import the query using react-apollo and the query we just wrote. The curly braces let us just import that one query and not all of them

Then we use a render prop to give access to our data from the query

[render prop](https://github.com/kingluddite/family-tree/blob/master/frontend/src/components/genealogy/GenealogyPage.js#L8-L25)

Homework:
Watch these two videos
[render props vs HOC](https://www.bram.us/2017/10/05/never-write-another-hoc-use-a-render-prop/)

[react hooks](https://www.youtube.com/watch?v=asrdFuAxPaU)

## Install Instructions

Create `variables.env`

MONGO_URI=mongodb://GETFROMMLAB
SECRET=FILLTHISIN

In root
`$ npm i`

In frontend
`$ npm i`

In backend
`$ npm i`

## To run app

- Be inside root

`$ npm run dev`

## Troubleshooting

- blow up package-lock.json and node_modules and reinstall with `$ npm i` for both root and frontend
- username is the person's name (not email)
