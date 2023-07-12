import Select from "../form/Select"
import Submit from "../form/Submit"
import Input from "../form/input"
import styles from "./ProjectForm.module.css"

function ProjectForm({btnText}){
    return (
        <form className={styles.form}>
            <Input 
            type="text"
            text="Name of project"
            name="name"
            placeholder="inser the name of project"
            />
            <Input 
            type="number" 
            text="Budget of project"
            name="budget"
            placeholder="Enter the budget"
            />
            
            <Select name="categoy_id" text="Select the category"/>

            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm