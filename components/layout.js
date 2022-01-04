import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import layoutStyles from './layout.module.css'
import NavDropdown from './nav-dropdown'

const name = 'Vincent T. Nguyen'
export const siteTitle = `${name} - Developer, Designer, Streamer`

export default function Layout({ children, home }) {
  return (
    <main>
      <Head>
        <link rel="icon" href="/vtn-logo.svg" />
        <meta
          name="description"
          content="Web, games, content creation, and more"
        />
        <meta property="og:image" content={"/vtn-logo.svg"} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className={layoutStyles.nav}>
        <Link href="/#top">
            <a className={layoutStyles.navLogo}>
            <Image
              src="/images/profile.jpg"
              className={layoutStyles.borderCircle}
              width={50}
              height={50}
            />
          </a>
        </Link>
        <NavDropdown />
      </nav>

      <main className={styles.main}>
        {children}
        <div className={layoutStyles.backToHome}>
          <Link href="/#top">
            <a>← Back to {home ?  ('top') : ('home') }</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://particles.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Background made with <b>tsParticles</b></span>
        </a>
        <a
          href="https://fontawesome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Icons from <b>FontAwesome</b></span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/images/logo/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://github.com/vncegd/vtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </footer>
    </main>
  )
}
