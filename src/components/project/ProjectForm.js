import { useState, useEffect} from "react"

import Select from "../form/Select"
import Submit from "../form/Submit"
import Input from "../form/input"
import styles from "./ProjectForm.module.css"

function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories] = useState([]) 

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

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
            
            <Select 
            name="categoy_id" 
            text="Select the category" 
            options={categories}
            />

            <Submit text={btnText}/>
        </form>
    )
}

export default ProjectForm