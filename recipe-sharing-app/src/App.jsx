import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />       {/* ✅ Added SearchBar */}
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
      </header>

      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
