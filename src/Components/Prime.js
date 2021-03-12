import React from 'react'
import style from '../Module.css/Prime.module.css'


const Prime= () => {
    return(
        <div>
            <h1 className={style.header}>todos</h1>
            
            <div className={style.inputContainer}>
                <input type='text' placeholder='your todos today' className={style.inputBar}/>

                <button type='submit' className={style.addBar}>Add</button>
            </div>

        </div>
    )
}



export default Prime