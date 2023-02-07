import Head from 'next/head'
import Layout from '../../components/layout'
import DateRange from '../../components/date'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import styles from '../../styles/Home.module.css'

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export default function Project({ projectData }) {
  const title = `Projects - ${projectData.title}`
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{projectData.title}</h1>
        <div className={styles.lightText}>
          <DateRange dateRangeString={projectData.date} />
        </div>
        <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  )
}
