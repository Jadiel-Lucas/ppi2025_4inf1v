import styles from './MyHeader.module.css';

export function MyHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>My Header</h1>
        </header>
    );
}
