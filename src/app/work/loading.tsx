export default function Loading() {
    return (
        <div className="py-16 px-6 lg:px-12 animate-pulse">
            <div className="max-w-7xl mx-auto">
                {/* Page Header Skeleton */}
                <div className="mb-16">
                    <div className="h-12 w-3/4 md:w-1/2 bg-muted rounded mb-6" />
                    <div className="h-6 w-full md:w-2/3 bg-muted/60 rounded" />
                </div>

                {/* Filter Bar Skeleton */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3">
                        <div className="h-10 w-16 bg-muted rounded-md" />{" "}
                        {/* "All" button */}
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="h-10 w-24 bg-muted/40 rounded-md"
                            />
                        ))}
                    </div>
                </div>

                {/* Case Study Grid Skeleton */}
                <div className="grid md:grid-cols-2 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-xl border border-border bg-card/30 space-y-6"
                        >
                            {/* Header: Title & Subtitle */}
                            <div className="space-y-3">
                                <div className="h-7 w-3/4 bg-muted rounded" />
                                <div className="h-4 w-1/2 bg-muted/60 rounded" />
                            </div>

                            {/* Description Body */}
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-muted/40 rounded" />
                                <div className="h-4 w-full bg-muted/40 rounded" />
                                <div className="h-4 w-2/3 bg-muted/40 rounded" />
                            </div>

                            {/* Tags & Metric Footer */}
                            <div className="pt-4 flex justify-between items-end">
                                <div className="flex gap-2">
                                    <div className="h-6 w-16 bg-muted/30 rounded-full" />
                                    <div className="h-6 w-16 bg-muted/30 rounded-full" />
                                </div>
                                <div className="h-8 w-20 bg-primary/10 rounded-md" />{" "}
                                {/* Impact Metric */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
