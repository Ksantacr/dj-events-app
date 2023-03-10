import { API_URL } from '@/config/index'
import Layout from "@/components/Layout";
import EventItem from '@/components/EventItem';

export default function EventPage({events}) {
    return (
        <Layout>
            <h1>Events</h1>
          {events.length === 0 && <h3>No events to show</h3>}
          {events.map(evt => <EventItem key={evt.id} evt={evt} />)}
        </Layout>
      )
}

export async function getServerSideProps() {

    const response = await fetch(`${API_URL}/api/events`)
    const events = await response.json()

    return {
        props: { events }
    }

}