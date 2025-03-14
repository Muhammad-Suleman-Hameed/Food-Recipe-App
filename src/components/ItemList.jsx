import Item from './Item'
export default function ItemList({food, isLoading}){
    return(
        <div> 
            {isLoading ? (<p>Loading</p>) : 
            (food.extendedIngredients.map((items) => {
                return ( <Item items={items}/>)
             }))}
            
        </div>
    )
}