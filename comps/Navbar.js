import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <Image src="/logo.jpg" height={75} width={120}/>
            </div>
            <Link href='/'>Home</Link>
            <Link href='/ninjas'>Ninjas</Link>
            <Link href='/about'>About</Link>
            <Link href='/listing'>Listing</Link>
        </nav>
     );
}
 
export default Navbar;