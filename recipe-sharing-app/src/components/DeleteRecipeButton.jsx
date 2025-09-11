// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete this recipe?');
    if (!ok) return;
    deleteRecipe(recipeId);
    if (typeof onDeleted === 'function') onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
