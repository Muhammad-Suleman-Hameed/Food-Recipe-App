import { useEffect, useState } from "react"
import styles from './search.module.css'

// const URL = "https://api.spoonacular.com/recipes/complexSearch";
// const API_KEY = "c6dc82e305834fefaecd5d7a697d997d";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "dd7d6a8db6a84d5ebc8128124fe69ca2";

export default function Search({foodData, setFoodData}){
   const [query, setQuery] = useState('')
   
    useEffect(() => {
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results)
            setFoodData(data.results)

        }
         fetchFood();
    }, [query])
    return(
        <div className={styles.searchContainer}>
            <input
            className={styles.input} 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text" 
            /> 
        </div>
    )
}