// NDWebCV/src/components/Tree.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Tree() {
  const navigate = useNavigate();

  console.log('Tree component rendered');

  const handleCategoryClick = (category) => {
    console.log(`Navigating to category: ${category}`);
    navigate(`/category/${category}`);
  };

  return (
    <div className="tree">
      <h2>Tree Component</h2>
      <motion.div
        className="branch"
        whileHover={{ scale: 1.1 }}
        onClick={() => handleCategoryClick('example')}
      >
        <div className="circle">Category Logo</div>
      </motion.div>
      {/* Add more branches as needed */}
    </div>
  );
}

export default Tree;