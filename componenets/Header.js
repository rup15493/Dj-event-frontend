import Link from "next/link"
import styles from "../styles/Header.module.css"
import Search from "./Search"


export default function Header() {
  return (
    <header className={styles.header}>
        <div className= {styles.logo}>
            <Link href="/">
             events
            </Link>

        </div>
        <Search /> 
     <nav>
        <ul>
            <li>
                <Link href="/events">
                  Events 
                </Link>
            </li>
            <Link href="/events/add">
               Add Events 
            </Link>
        </ul>
     </nav>
    </header>
  )
}
