import styles from './MyText.module.css';

export function MyText() {
    return (
        <div className={styles.textContainer}>
            <div className={styles.div}>
                <h1 className={styles.title}>Meu primeiro React App</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime
                    doloremque distinctio mollitia repudiandae nulla cumque culpa
                    consequuntur illum, neque saepe voluptates id numquam iste suscipit
                    totam harum beatae? Cupiditate!
                </p>
            </div>
        </div>
    );
}