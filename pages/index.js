import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import DateRange from '../components/date'

import styles from '../styles/Home.module.css'

import { getSortedProjectsData } from '../lib/projects'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section id="hero" className={styles.hero}>
        <h1 className={styles.heading2Xl}>Work in Progress...</h1>
      </section>

      <section id="projects" className={styles.section}>
        <h1 className={styles.headingXl}>Projects</h1>
        <ul className={styles.grid}>
          {allProjectsData.map(({ id, date, title, logo, desc }) => (
            <Link href={`/projects/${id}`} key={id} className={styles.card}>
              <div>
                <Image
                  priority
                  src={logo}
                  width={160}
                  height={90}
                  alt={title}
                />
                <h2>{title}</h2>
                <small className={styles.lightText}>
                  <DateRange dateRangeString={date} />
                </small>
                <p>{desc}</p>
              </div>
            </Link>
          ))}
        </ul>
      </section>

      <section id="about" className={styles.section}>
        <h1 className={styles.headingXl}>About</h1>
        
        <h3>Employment</h3>
        <p>Software Engineer @ Unisys</p>
        <br/>
        <h3>Education</h3>
        <p>B.S. Computer Science, Concentration in Game Programming and Development, Drexel University Class of 2021</p>
        <br/>
        <h3>Interests</h3>
        <p>Games</p>
        <p>Front-end web</p>
        <p>Digital art</p>
        <p>Content creation</p>
        <p>Open-source software</p>
      </section>

      <section id="contact" className={styles.section}>
        <h1 className={styles.headingXl}>Contact</h1>

        <h3>Social</h3>
        <div className={styles.flex}>
          <a className={styles.button} href="https://github.com/vncegd" target="_blank" rel="noopener noreferrer">
            GitHub
            <span className={styles.logo}>
              <Image src="/images/logo/github-brands.svg" alt="Github logo" width="16" height="16" />
            </span>
          </a>
          <a className={styles.button} href="https://linkedin.com/in/vtn28" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span className={styles.logo}>
              <Image src="/images/logo/linkedin-brands.svg" alt="LinkedIn logo" width="16" height="16" />
            </span>
          </a>
          <a className={styles.button} href="https://facebook.com/16nguyenv" target="_blank" rel="noopener noreferrer">
            Facebook
            <span className={styles.logo}>
              <Image src="/images/logo/facebook-brands.svg" alt="Facebook logo" width="16" height="16" />
            </span>
          </a>
          <a className={styles.button} href="https://twitter.com/zevinlevin" target="_blank" rel="noopener noreferrer">
            Twitter
            <span className={styles.logo}>
              <Image src="/images/logo/twitter-brands.svg" alt="Twitter logo" width="16" height="16" />
            </span>
          </a>
          <a className={styles.button} href="https://instagram.com/zevinlevin" target="_blank" rel="noopener noreferrer">
            Instagram
            <span className={styles.logo}>
              <Image src="/images/logo/instagram-brands.svg" alt="Instagram logo" width="16" height="16" />
            </span>
          </a>
        </div>

        <h3>Game</h3>
        <div className={styles.flex}>
          <a className={styles.button} href="https://youtube.com/channel/UCK9phU1rhKDBEuyxpq6uBQQ" target="_blank" rel="noopener noreferrer">
            YouTube
            <span className={styles.logo}>
              <Image src="/images/logo/youtube-brands.svg" alt="YouTube logo" width="16" height="16" />
            </span>
          </a>
          <a className={styles.button} href="https://twitch.tv/zevinlevin" target="_blank" rel="noopener noreferrer">
            Twitch
            <span className={styles.logo}>
              <Image src="/images/logo/twitch-brands.svg" alt="Twitch logo" width="16" height="16" />
            </span>
          </a>
          <a className={styles.button} href="https://steamcommunity.com/id/vince-nt/" target="_blank" rel="noopener noreferrer">
            Steam
            <span className={styles.logo}>
              <Image src="/images/logo/steam-brands.svg" alt="Steam logo" width="16" height="16" />
            </span>
          </a>
          <a className={styles.button} href="https://osu.ppy.sh/users/4890690" target="_blank" rel="noopener noreferrer">
            osu!
            <span className={styles.logo}>
              <Image src="/images/logo/osu-logo-white.svg" alt="osu! logo" width="16" height="16" />
            </span>
          </a>
        </div>

        <h3>Discord</h3>
        <p>ZevinLevin#4019</p>

        <h3>Email</h3>
        <p>16nguyenv@gmail.com</p>
      </section>
    </Layout>
  )
}
