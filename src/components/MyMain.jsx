import styles from './MyMain.module.css';

export function MyMain() {
    return (
        <div className={styles.container}>
            {/*<header className={styles.header1} />*/}
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>My Text 0</h2>
                        <p>This is a card</p>
                    </div>
                    <div className={styles.card}>
                        <h2>My Text 1</h2>
                        <p>This is a card.</p>
                    </div>
                    <div className={styles.card}>
                        <h2>My Text 2</h2>
                        <p>This is a card.</p>
                    </div>
                    <div className={styles.card}>
                        <h2>My Text 3</h2>
                        <p>This is a card.</p>
                    </div>
                    <div className={styles.card}>
                        <h2>My Text 4</h2>
                        <p>This is a card.</p>
                    </div>
                </div>
            </div>
            {/*<footer className={styles.footer1} />*/}
        </div>
    );
}
