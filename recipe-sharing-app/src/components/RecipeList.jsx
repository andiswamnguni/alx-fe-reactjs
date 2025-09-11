// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description?.slice(0, 120)}{(recipe.description?.length ?? 0) > 120 ? '...' : ''}</p>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
            {' | '}
            <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
