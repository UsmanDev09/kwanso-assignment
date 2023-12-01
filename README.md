
# Project Title

This project is a profile listing application that has the following features.
1. List profile using randomuser.me api
2. Paginate all data
3. Filter data with gender
5. View specific profile, user location on map and flag of user's nationality
6. A dark mode and light mode for the application
7. Error handling 
8. Search users

## Documentation

The frontend dark mode state management is done using Context API. Routing is handled through react-router-dom. 

I have implemented search by filtering profiles which contain alphabets of the search text, and then displayed those profiles.

I have implemented pagination and filters as explained in the api documentation. The filters persists even if the user navigates away from the page. 

## Installation

After cloning, run:
```
cd client
npm install
npm run dev
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server directory.
```
Add .env in the directory.
```
`VITE_SERVER_URL = 'https://randomuser.me/api/'`
```

#### The client runs on localhost:5173
