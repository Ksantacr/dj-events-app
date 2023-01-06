import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/EventItem.module.css'

export default function EventItem({evt}) {

    return(
        <div className={styles.event}>
            <div className={styles.img}>
                <Image alt={evt.name} src={evt.image ? evt.image : '/images/event-default.png'} width={170} height={100}/>
            </div>

            <div className={styles.info}>
            <span>
                {evt.date} at evt.time
            </span>
                <h3>{evt.name}</h3>
            </div>

            <div className={styles.link}>
                <Link href={`/events/${evt.slug}`}>
                    <span className='btn'>Details</span>
                </Link>

            </div>
        </div>
    )
}