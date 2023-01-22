import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.body}>
                <Link href='/'>
                    <Image
                    src="/thirteen.svg"
                    alt="13"
                    width={40}
                    height={31}
                    priority
                    />
                </Link>
            </div>
        </>
    )
}