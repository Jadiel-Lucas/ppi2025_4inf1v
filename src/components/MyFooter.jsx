import styles from './MyFooter.module.css';
import { Github, Instagram, Phone } from 'lucide-react';

export function MyFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <h1>IFRN - Campus Macau</h1>
                <h1>Curso Técnico em Informática</h1>
                <h1>Programação para Internet 2025</h1>
            </div>
            <p>Prof. Guilherme Leal Santos</p>
            <div className={styles.icons}>
                <a href="https://github.com/Jadiel-Lucas" target="_blank">
                <Github />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                <Instagram />
                </a>
                <Phone />
            </div>
        </footer>
    );
}
