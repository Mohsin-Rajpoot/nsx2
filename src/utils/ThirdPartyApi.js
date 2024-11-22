// utils/ThirdPartyApi.js

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = "889c5553016e4951be74b36c2a152664";  // Replace with your API key

// Utility function to fetch data
export const fetchNewsData = async (query) => {
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const formattedCurrentDate = currentDate.toISOString().split("T")[0];
  const formattedSevenDaysAgo = sevenDaysAgo.toISOString().split("T")[0];

  const params = new URLSearchParams({
    q: query,
    apiKey: API_KEY,
    from: formattedSevenDaysAgo,
    to: formattedCurrentDate,
    pageSize: 100,
  });

  try {
    const response = await fetch(`${API_URL}?${params}`);
    if (!response.ok) {
      throw new Error("Error fetching data from API");
    }
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    throw new Error(error.message || "Sorry, something went wrong during the request.");
  }
};

// Function to manage local storage
export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};
