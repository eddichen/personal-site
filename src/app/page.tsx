import Experience from './components/experience';
import styles from './page.module.css';

export default async function Home() {
  return (
    <main>
      <article className={styles.article}>
        <h1>eddichen</h1>
        <p>
          A Frontend Engineer based in London, who is product minded and enjoys
          build great UI experiences.
        </p>
        <h2>Experience</h2>
        <Experience />
      </article>
    </main>
  );
}
