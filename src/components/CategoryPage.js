import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { name } = useParams();

  return (
    <div className="category-page">
      <h1>{name} Page</h1>
      {/* Add content for the category */}
    </div>
  );
}

export default CategoryPage; 