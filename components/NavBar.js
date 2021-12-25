import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="mb-3 bg-rose-600 h-12 flex justify-between items-center rounded-b-lg">
      <Link href="/"><a className="text-3xl mx-3">Valorant Agents</a></Link>
      <div>
      <Link href="/about"><a className="mx-3">About</a></Link>
      <a href="https://github.com/zedashkan" target="_blank" className="mx-3">github</a>
      </div>
    </nav>
  )
}
