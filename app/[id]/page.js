import React from "react";
import Image from "next/image";
import NotFound from "./notFound";
import styles from "./styles.module.css";

async function getPost(id) {

try{
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  return res.json();
}
catch{
  throw new Error(error)
}

 
}

export default async function Page({ params }) {
  const { id, title, body } = await getPost(params.id);
  if (!body) {
    return NotFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div>
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt={title}
          priority={true}
          width={600}
          height={400}
        />
      </div>

      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
