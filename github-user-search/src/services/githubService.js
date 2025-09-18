// src/services/githubService.js
import axios from "axios";

/**
 * Fetch GitHub users with advanced search criteria
 * @param {Object} params - { username, location, minRepos }
 * @returns {Promise<Object>} - GitHub API response { items: [...] }
 */
export const fetchUsers = async ({ username, location, minRepos }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  
  const response = await axios.get(url);
  return response.data; // returns { items: [...] }
};
