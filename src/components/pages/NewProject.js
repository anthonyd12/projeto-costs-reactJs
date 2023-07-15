import {useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const history = useNavigate()

    function createPost(project){
        
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http:/localhost:5000/project", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp)=> resp.json())
        .then((data) => {
                console.log(data)
            })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.npContainer}>
            <h1>Create Project</h1>
            <p>Create your Project and then add the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
}

export default NewProject