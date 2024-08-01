Recipe App

<br>
This is a simple React application that allows users to search for recipes using the Forkify API. Users can view a list of recipes, get detailed information about a specific recipe, and add recipes to their favorites.

Features
<br>

Search Recipes: Users can search for recipes by entering a keyword.
Recipe Details: Users can view detailed information about a selected recipe.
Favorite Recipes: Users can add or remove recipes from their favorites list.
Loading State: Displays a loading message while fetching data.
Error Handling: Logs errors if fetching data fails.
Context API: Manages global state using React Context API.

<br>

Installation
<br>
Clone the repository

git clone https://github.com/yourusername/recipe-app.git
Navigate to the project directory
<br>

cd recipe-app
Install dependencies

npm install
<br>
Usage
Start the development server
<br>
npm start
Open the app in your browser
http://localhost:3000

<br>
Components
App.jsx
Renders the main application wrapped in the GlobalState provider.

GlobalState.jsx
Provides global state management for the app using React's Context API.


Manages state for search parameters, loading state, recipe list, recipe details, and favorite recipes.

Contains functions for handling recipe search, adding/removing favorite recipes.

Search.jsx
Handles user input for searching recipes.
RecipeList.jsx
Displays a list of recipes based on the search results.
RecipeDetails.jsx
Displays detailed information about a selected recipe.
FavoriteRecipes.jsx
Displays a list of favorite recipes.

<br>
API
Forkify API: Used to fetch recipe data.
Endpoint: https://forkify-api.herokuapp.com/api/v2/recipes?search={searchParam}
Dependencies
React: Library for building user interfaces.
React Router: For handling navigation.
Tailwind CSS: Utility-first CSS framework for styling.
License
This project is licensed under the MIT License - see the LICENSE file for details.
<br>
Contributing
Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.
Author

- <a href="https://github.com/FlackoCodes">Flacko</a>
  Acknowledgments
  Forkify API for providing recipe data.
