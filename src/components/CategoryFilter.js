import React from "react";

function CategoryFilter({onCategory,selected,categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
{categories.map((category,index) => (
  <button
  className={onCategory===category?'selected':''}
         key={index}
         onClick={()=>{selected(category)}}
         
         >
          {category}
        </button>
))}
//     </div>
  );
}

export default CategoryFilter;
