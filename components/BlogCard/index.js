import React from 'react';
import Link from 'next/link';
import style from './styles.module.css';
import Image from 'next/image';

export default function BlogCard({title,body,id}) {
  return (
    <Link href={`/${id}`} className={style.card}>
    <div className={style.card}>
    <Image src={`https://picsum.photos/200/300?random=${id}`} alt='card image' width={100} height={100}/>
    </div>
    <div className={style.cardBody}>

        <h3>{title}</h3>
        <p>{body}</p>
    </div>
    </Link>
  )
}
