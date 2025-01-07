import styles from "../Components/Button.module.css"


function Button(){
    return(
        <div className={styles.div}>
            <div className={styles.container}>
                <div className={styles.button}>
                    <button >INCREMENT</button>
                    <br/>
                    <button >SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Button;