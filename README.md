##  Code challenge - Profile App
#### To run
`npm start`

Launch : http://localhost3000/profile/1 or http://localhost3000/profile/2

### Technologies used
- React JS
- React-bootstrap library for styling

#### Design appraoch
- Componentized into ***header*** , ***info*** and ***interest*** componenets.
- Main component is in app.js that makes API calls from route path param (*profile/{id}*) , makes API call to pull details and passes sub sections of profile data to each child component. 
- Similated API call to read profiles from */users/{id}* 
- Interfaces are for all data types are not defined as Typescript is not used.
- For image upload, since there is no backend, used javascript *file reader* to hold image object in react state.
- Used react states and hooks for data changes ( adding, removes interests, updates of basic profile info etc).
- For responsive sizes used media queries.
