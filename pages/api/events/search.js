import Layout from "@/componenets/Layout"
import {API_URL} from "../config/index"
import EventItem from "@/componenets/EventItem"
import qs from qs
import { useRouter } from "next/router"



export default function SearchPage(events) 

{
    const router = useRouter
  return (
    <Layout title= "Search Results">
      
      <h1>Search results for {router.query.term}</h1>
      {events.length === 0 && <h3> No events to show </h3>}
      {events.map (evt => (
      <EventItem key={evt.id}  evt={evt} />
      ))}
    </Layout>
    
  )
}
   

export async function getServerSideProps({query: {term}}) {
    const query = qs.stringify ({
        _where: {
            or: [
                {name_contains:term},
                {performers_contains:term},
                {description_contains:term},
                {venue_contains:term}
            ]
        }
    })
  const res = await fetch(`${API_URL}/api/events?${query}`)
  const events = await res.json()

  return {
    props: { events },
    
  }
}
