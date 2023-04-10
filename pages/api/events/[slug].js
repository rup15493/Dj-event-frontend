import Layout from "@/componenets/Layout"
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Image from "next/image"
import {API_URL} from "../config/index"
import styles from "../styles/Event.Module.css"
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function EventPage(evt) {

    const deleteEvent = (e) => {
        console.log("delete")
    }
  return (
    <Layout>
        <div className={styles.events}>
            <div className={styles.controls}>
                <Link href={`/events/edit/${evt.id}`}>
                    <a>
                        <FaPencilAlt /> Edit Event 
                    </a>
                </Link>
                <a href="#" className= {styles.delete} onClick={deleteEvent }>
                    <FaTimes /> Delete Event 
                </a>
            </div>
        </div>
        <span>
            {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
            <div className={styles.image}>
                <Image src={evt.image.formats.medium.url} width = {960} height={600} />
            </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performer}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue:{evt.venue}</h3>
        <p>{evt.adress}</p>

        <Link href = "/events">
            <a className={styles.back}>
              {"<"}  Go back 
            </a>
        </Link>
    </Layout>
  )
}

export async function getServerSideProps ({query:{slug}}) 

{

    const  res = await fetch (`${API_URL}/api/events/?slug={slug}`)

    const events = await res.json ()



    return {
        props:{
            evt: events[0]
        }
    }
}