import { createContext } from "react";
import "./App.css";
import UseList from "./Components/UseList";
import useFetchData from "./api/services/UseFetchData";
export const ProviderData = createContext("");

function App() {
  const URL = "https://jsonplaceholder.typicode.com/users"; // Example API URL
  const { data, isLoading, error } = useFetchData(URL);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="App">
      <ProviderData.Provider value={{ data: data }}>
        <UseList />
      </ProviderData.Provider>
    </div>
  );
}

export default App;
