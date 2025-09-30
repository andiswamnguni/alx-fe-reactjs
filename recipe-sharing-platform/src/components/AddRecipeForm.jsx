import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // track multiple errors

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split("\n").filter((i) => i.trim()).length < 2)
      newErrors.ingredients = "Please add at least 2 ingredients.";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 80) + "...",
      image: "https://via.placeholder.com/150",
      ingredients: ingredients.split("\n").filter((i) => i.trim() !== ""),
      instructions: steps.split("\n").filter((s) => s.trim() !== "")
    };

    console.log("New recipe submitted:", newRecipe);
    alert("Recipe submitted! (check console)");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
            rows="4"
            placeholder="e.g.\n2 eggs\n100g flour\n1 cup sugar"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps (one per line)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.steps ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
            rows="5"
            placeholder="e.g.\nMix ingredients\nBake at 180°C for 20 mins"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
