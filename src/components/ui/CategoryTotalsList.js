'use client'
import { motion } from "framer-motion"
import React, { useState } from 'react';

const CategoryItem = ({ category, amount }) => {
  return (
      <>
      <div className="flex items-center justify-between p-4 w-80 border border-gray-200">
          <div>
              <p className="font-bold">{category}</p>
          </div>
          <p className="text-red-500 font-bold">-$ {amount}</p>
      </div>
      </>
  )
}

export default function CategoryTotalsList({ user }) {
  // Define initial and animate properties for fading in
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = user.categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="sticky top-0 bg-white w-full mb-4">
        <h2 className="text-md font-bold pt-2 text-center">Search For Categories</h2>
        <input
          type="text"
          className="w-full p-2 border border-green-600 my-2"
          placeholder="Enter category name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredCategories.map((category, index) => (
        <motion.div
          key={index}
          variants={itemVariants} // Use variants for animation
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered fade in
        >
          <CategoryItem
            category={category}
            amount={user.categoryTotals[index]}
          />
        </motion.div>
      ))}
    </div>
  );
}