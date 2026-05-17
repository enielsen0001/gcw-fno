import { ServiceSkeleton } from "@/components/ui/CapabilitySkeleton";

export default function ServicesLoading() {
    return (
        <div className="min-h-screen py-16 px-6 lg:px-12 animate-pulse">
            <div className="max-w-7xl mx-auto">
                {/* Page Header Skeleton */}
                <div className="mb-20">
                    <div className="h-4 w-32 bg-muted rounded mb-8" />{" "}
                    {/* Back Link */}
                    <div className="h-12 w-3/4 bg-muted rounded mb-4" />{" "}
                    {/* Title */}
                    <div className="h-6 w-1/2 bg-muted/60 rounded mb-6" />{" "}
                    {/* Subtitle */}
                    <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="h-6 w-16 bg-muted/30 rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content Area */}
                    <main className="flex-1 space-y-32">
                        {/* Executive Summary Skeleton */}
                        <section className="grid md:grid-cols-2 gap-16 border-t border-border pt-12">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="space-y-6">
                                    <div className="h-3 w-24 bg-primary/20 rounded" />
                                    <div className="space-y-3 border-l-2 border-border pl-6">
                                        <div className="h-5 w-full bg-muted/40 rounded" />
                                        <div className="h-5 w-full bg-muted/40 rounded" />
                                        <div className="h-5 w-2/3 bg-muted/40 rounded" />
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Key Decisions Skeleton */}
                        <section className="space-y-12">
                            <div className="h-10 w-48 bg-muted rounded" />
                            <div className="grid md:grid-cols-2 gap-8">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="p-8 border border-border bg-card/10 rounded-lg space-y-4"
                                    >
                                        <div className="h-6 w-1/2 bg-muted rounded" />
                                        <div className="h-4 w-full bg-muted/40 rounded" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Execution Timeline Skeleton */}
                        <section className="space-y-16">
                            <div className="h-10 w-64 bg-muted rounded" />
                            <div className="space-y-12">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="relative pl-16 h-24 border-l border-border"
                                    >
                                        <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 bg-background border border-border rounded-full" />
                                        <div className="h-7 w-48 bg-muted rounded mb-4" />
                                        <div className="h-4 w-full max-w-xl bg-muted/40 rounded" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>

                    {/* Sidebar Skeleton */}
                    <aside className="lg:w-80 space-y-8">
                        <div className="sticky top-12 space-y-12 border-t border-border pt-12">
                            <div className="space-y-4">
                                <div className="h-3 w-20 bg-primary/20 rounded" />
                                <div className="h-6 w-32 bg-muted rounded" />
                                <div className="h-4 w-24 bg-muted/40 rounded" />
                            </div>
                            <div className="space-y-4">
                                <div className="h-3 w-32 bg-primary/20 rounded" />
                                <div className="flex flex-wrap gap-2">
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-5 w-14 bg-muted/30 rounded-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
