import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="app">
      <h1>Product Search</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      <ProductList searchText={searchText}/>
      <a href="https://github.com/pipatpong1412/Pagination/tree/dev">Source on git</a>
    </div>
  )
};

export default App;
