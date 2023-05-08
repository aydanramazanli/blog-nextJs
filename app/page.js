import style from './style.module.css';
import BlogCard from "@/components/BlogCard";



async function getPosts(){
  const res = await fetch('https://dummyjson.com/posts?limit=10');
  return res.json()
}
export default  async function Home() {
  const {posts}= await getPosts();
 
  return (
  <div className ={style.blogContainer}>
 {posts.map(post=>
   <BlogCard {...post} key={post.id} />)}
 
  </div>
  )
}
