import { API_URL } from '@/config/index'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Link from 'next/link'

export default function Home({events}) {
    return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map(evt => <EventItem key={evt.id} evt={evt} />)}
      {events.length > 0 && <Link href="/events">
        <span className='btn-secondary'>View all events</span>
        </Link>}
    </Layout>
  )
}

export async function getStaticProps() {

  const response = await fetch(`${API_URL}/api/events`)
  const events = await response.json()

  return {
      props: { events: events.slice(0, 3) }
  }

}