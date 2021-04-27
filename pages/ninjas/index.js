import Link from 'next/link';
import styles from '../../styles/ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { ninjas: data }
  };
};

// because of server side rendering, we cannot call useEffect directly like in React; instead getStaticProps should be used.

const ninjas = ({ ninjas }) => {
    
  return (
    <div>
      <h2>All people</h2>
     {
         ninjas.map(ninja => (
             <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                 <a className={styles.single}>
                     <h4>{ninja.name}</h4>
                 </a>
             </Link>
         ))
     }
    </div>
  );
};

export default ninjas;
