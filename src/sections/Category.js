import React from "react";
import CategoryCard from "../components/CategoryCard";
import categoryCardImage1 from "../assets/category-card-1.png";
import categoryCardImage2 from "../assets/category-card-2.png";
import categoryCardImage3 from "../assets/category-card-3.png";
import categoryCardImage4 from "../assets/category-card-4.png";
import "../styles/Category.css";

function Category() {
  return (
    <div className="categories">
      <div className="heading">Category</div>
      <div className="punchline">We Offer Best Services</div>
      <div className="category-cards">
        <CategoryCard
          image={categoryCardImage1}
          title={`Calculated Weather`}
          desc={`Built Wicket longer admire do barton vanity itself do in it.`}
        />
        <div className="decor-card">
          <div className="decor"></div>
          <CategoryCard
            image={categoryCardImage2}
            title={`Best Flights`}
            desc={`Engrossed listening. Park gate sell they west hard for the.`}
            className="decor-card"
          />
        </div>

        <CategoryCard
          image={categoryCardImage3}
          title={`Local Events`}
          desc={`Barton vanity itself do in it. Preferd to men it engrossed listening.`}
        />

        <CategoryCard
          image={categoryCardImage4}
          title={`Customization`}
          desc={`We deliver outsourced aviation services for military customers`}
        />
      </div>
    </div>
  );
}

export default Category;
