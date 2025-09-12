import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => recipes.find((recipe) => recipe.id === id))
  );

  if (!favorites.length) {
    return <p>No favorites yet. Add some recipes to favorites!</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) =>
        recipe ? (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FavoritesList;
