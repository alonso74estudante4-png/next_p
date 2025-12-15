import Image from "next/image";
import styles from "./page.module.css";
import database from "@/database/database";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default async function Home() {
  const sqlFilmes = "SELECT * FROM filmes";
  const sqlSeries = "SELECT * FROM series";
  const responseFILMES = await database.query(sqlFilmes);
  const responseSERIES = await database.query(sqlSeries);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>PipocApp</h1>

      <h2 className={styles.section}>Filmes</h2>
      <div className={styles.quadroGrande}>
        {responseFILMES.rows.map((item: { id_filme: Key | null | undefined; name_filme: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; imagem_filme: any; theme_filme: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; url_filmes: string | undefined; }) => (
          <div className={styles.quadroPequeno} key={item.id_filme}>
            <p className={styles.nome}>{item.name_filme}</p>
            <figure className={styles.figure}>
              <Image
                src={`/${item.imagem_filme}`}
                alt={item.theme_filme}
                width={160}
                height={100}
                className={styles.img}
              />
              <figcaption className={styles.figcaption}>
                {item.theme_filme}
              </figcaption>
            </figure>
            <a
              href={item.url_filmes}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.assistir}
            >
              Assistir
            </a>
          </div>
        ))}
      </div>

      <h2 className={styles.section}>Séries</h2>
      <div className={styles.quadroGrande}>
        {responseSERIES.rows.map((item) => (
          <div className={styles.quadroPequeno} key={item.id_serie}>
            <p className={styles.nome}>{item.name_serie}</p>
            <figure className={styles.figure}>
              <Image
                src={`/${item.imagem_serie}`}
                alt={item.name_serie}
                width={160}
                height={100}
                className={styles.img}
              />
              <figcaption className={styles.figcaption}>
                {item.theme_serie}
              </figcaption>
            </figure>
            <a
              href={item.url_serie}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.assistir}
            >
              Assistir
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
