# Install

## React version of the code challenge

All the challenge will be changing the react/src/components/Header.jsx file

### Requirements

Node version ~12.7.0

If using [nvm](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/)

```
nvm install 12.7.0
nvm use 12.7.0
```

### Install

```
cd ./react
sudo yarn
(alternatively sudo npm i)
```

### Run

To run the application (from the react folder)

```
yarn start
(alternatively npm start)
```

And open a browser toward http://localhost:3000

To run the tests

```
yarn test
(alternatively npm test)
```

#Prerequisite
Requires Node version 16 or higher

Install dependencies - $ `npm install`

# Running the App & Tests
Local Dev Server - $ `npm start`

if you check your terminal the tests should already run by default on local dev. They're also hot loaded so any changes to them will cause them to re trigger and rerun

Production Build - $ `npm run build`

# Testing

I experimented with using Enzyme for my tests (shallow rendering components ). It worked well for some of the 'dumb' components but it was giving me hassle with the likes of the HomePage. As of writing this read me I am installing my usual libraries (Chai & react test utils for my assertions and shallow rendering for unit tests).

Without time constraints I would ideally aim for 100% code coverage where possible and of course the implementation of a full acceptance & unit test suite.  

# Notes of consideration
I limited my self to approximately 5 - 6 hours of development & styling .
Therefore any tests that I've not managed to complete or write are mostly missing due to time constraints (not that I didn't know I should test them :D ).

I also requested a PRODUCTION ready API key from Giphy to use within the app but they've yet to get back to me with one. I will probably update the Git Repo when I receive the key but that'll probably be after the fact.
