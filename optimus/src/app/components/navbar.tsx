import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between w-[15%] p-3 text-white'>
        <Link className="m-2" href="/">Home</Link>
        <Link className="m-2" href="/upload">Interview</Link>
        <Link className="m-2" href="/about">About</Link>
    </div>
  )
}


export default Navbar


