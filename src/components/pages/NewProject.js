import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.npContainer}>
            <h1>Create Project</h1>
            <p>Create your Project and then add the services</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject