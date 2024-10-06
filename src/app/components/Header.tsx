import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <div>
    <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul> 
    </div>
  )
}
