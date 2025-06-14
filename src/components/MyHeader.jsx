import styles from './MyHeader.module.css';
import { AlarmClock } from 'lucide-react';

export function MyHeader() {
    return (
        <header className={styles.header}>
            <AlarmClock size={72} />
            <h1>Foco, Força, Fé</h1>
        </header>
    );
}
