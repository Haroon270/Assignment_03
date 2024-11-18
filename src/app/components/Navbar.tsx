import Link from "next/link"

function Navbar() {
  return (
    <div>
       <header style={{backgroundColor:"blue" , color:"white"}}>
            <nav>
                <ul>
                    <li style={{color:"white"}}>
                        <Link href="/category/crypto">Crypto</Link>
                    </li> 
                    <li style={{color:"white"}}>
                        <Link href="/products/product1">Laptop</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
