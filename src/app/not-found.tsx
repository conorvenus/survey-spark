import Link from 'next/link'

//TODO: Fix non centered 404 page
export default function NotFound() {
    return (
    <section className="h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-primary font-bold text-5xl">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <Link className="btn btn-outline btn-primary mt-4" href={"/"}>Go back home</Link>
    </section>
    )
}