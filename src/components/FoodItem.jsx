import styles from './fooditem.module.css'

export default function FoodItem({food , setFoodId}){
    return(
        <div className={styles.itemContainer}> 
            <img className={styles.itemImage}
                src={food.image}/>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
                <p className={styles.itemName}>${food.price}</p>
            </div>    
            <div className={styles.buttonContainer}>
                <button className={styles.itemButton}
                onClick={(e) => {
                    setFoodId(food.id)
                    console.log(food.id)
                }}
                >View Info</button>
            </div>
        </div>
    )
}