import { CategoryCard } from "../components"
import { categoryData } from "../data/categoryData"
export const Categories = () => {
  return (
    <section className="home-cards">
      {categoryData.map(({_id,category,description,imageURL})=>{
          return(
              <CategoryCard key={_id} _id={_id} category={category} description={description} imageURL={imageURL} />
          )
      })}  
    </section>
  )
}
