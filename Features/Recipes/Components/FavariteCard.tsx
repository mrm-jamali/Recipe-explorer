import React from 'react'

function FavariteCard({recipe}:any) {
  return (
    <div>  <p key={recipe.idMeal}>{recipe.strMeal}</p>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} /></div>
  )
}

export default FavariteCard