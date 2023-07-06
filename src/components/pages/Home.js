import styles from './Home.module.css'
import savings from '../../assets/saving.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.homeContainer}>
            <h1 className={styles.title}>
                Wellcome to <span>Costs</span>
            </h1>
            <p>Start Now!</p>
            <LinkButton to="/newproject" text="Create Project"/>
            <img src={savings} alt='costs'/>
            
        </section>
    )
}

export default Home