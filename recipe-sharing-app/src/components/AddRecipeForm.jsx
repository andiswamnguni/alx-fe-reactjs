// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add a Recipe</h2>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', width: '100%', height: 100, marginBottom: 8 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
