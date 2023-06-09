import Layout from "@/componenets/Layout"
import {API_URL} from "../config/index"
import EventItem from "@/componenets/EventItem"



export default function EventsPage(events) {
  return (
    <Layout>
      
      <h1>Events</h1>
      {events.length === 0 && <h3> No events to show </h3>}
      {events.map (evt => (
      <EventItem key={evt.id}  evt={evt} />
      ))}
    </Layout>
    
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?_sort=date:ASC`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}
