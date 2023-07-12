import styles from "./Select.module.css"

function Select({text, name, options, handleOnChange, value}){
        return(
            <div className={styles.selControl}>
                <label htmlFor={name}>{text}:</label>
                <select name={name} id={name}>
                    <option>Select an option</option>
                </select>
            </div>
        )
}


export default Select