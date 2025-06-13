import styles from './MyHeader.module.css';

export function MyHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <Img
                    src={img}
                    alt="Foco, Força e Fé"
                />
            </div>
        </div>
    );
}
