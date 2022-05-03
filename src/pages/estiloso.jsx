import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <div className={styles.pink}>
            <Link href="/"><h1>estilos usando modulos</h1></Link> 
        </div>
    )
}