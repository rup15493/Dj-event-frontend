import Layout from "@/componenets/Layout"
import {API_URL} from "../config/index"
import EventItem from "@/componenets/EventItem"



export default function Home(events) {
  return (
    <Layout>
      
      <h1> Upcoming Dj events</h1>
    
    </Layout>
    
  )
}

//export async function getStaticProps() {
 // const res = await fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=3`)
 // const events = await res.json()

  //return {
    //props: { events },
   // revalidate: 1,
  //}
//}



