import Link from 'next/link'

export default function Navbar(){
  return (
    <div>
      <ul>
        <li>
         <Link href="#"><a >Home</a></Link>
        </li>
        <li>
        <Link href="#"><a >News</a></Link>
        </li>
        <li>
        <Link href="#"><a >Contact</a></Link>
        </li>
        <li>
        <Link href="#"><a >About</a></Link>
        </li>
      </ul>
    </div>
  )
}


