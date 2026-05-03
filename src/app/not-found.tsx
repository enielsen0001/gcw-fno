import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center py-24 px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
                {/* Playful top badge */}
                <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase rounded-full bg-accent text-accent-foreground">
                    Error 404: Route Not Found
                </span>

                <h1 className="text-5xl md:text-6xl tracking-tight mb-6 text-foreground">
                    Looks like we took a wrong turn.
                </h1>

                <p className="text-lg text-fg-60 mb-12 leading-relaxed">
                    The page you're looking for has wandered off the grid. Don't
                    worry the rest of the site is still running smoothly. Let's
                    get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/" className="btn-ghost min-w-[160px]">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
