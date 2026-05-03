import { ServiceSkeleton } from "@/components/ui/ServiceSkeleton";

export default function ServicesLoading() {
    return (
        <div className="py-16 px-6 lg:px-12 animate-pulse">
            <div className="max-w-6xl mx-auto">
                {/* Page Header Skeleton */}
                <div className="mb-20">
                    <div className="h-4 w-32 bg-muted rounded mb-8" />{" "}
                    {/* Back link */}
                    <div className="flex items-start gap-6 mb-6">
                        <div className="w-12 h-12 bg-muted rounded-md shrink-0" />{" "}
                        {/* Icon */}
                        <div className="h-12 w-2/3 bg-muted rounded" />{" "}
                        {/* Title */}
                    </div>
                    <div className="h-6 w-full max-w-2xl bg-muted/60 rounded" />{" "}
                    {/* Description */}
                </div>

                {/* 03. Capabilities Grid Skeleton */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32">
                    <div className="lg:col-span-1">
                        <div className="h-4 w-24 bg-primary/20 rounded" />
                    </div>
                    <div className="lg:col-span-2 space-y-12">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="border-b border-border pb-8 space-y-4"
                            >
                                <div className="h-7 w-48 bg-muted rounded" />
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-muted/60 rounded" />
                                    <div className="h-4 w-5/6 bg-muted/60 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04. Value Prop (Dark Card) Skeleton */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32 py-24 bg-card/20 -mx-6 px-6 lg:-mx-12 lg:px-12 rounded-xl">
                    <div className="lg:col-span-1">
                        <div className="h-4 w-24 bg-primary/20 rounded" />
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-3">
                            <div className="h-6 w-full bg-muted/40 rounded" />
                            <div className="h-6 w-full bg-muted/40 rounded" />
                            <div className="h-6 w-2/3 bg-muted/40 rounded" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-4 w-full bg-muted/20 rounded italic"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 05. Timeline Skeleton */}
                <section className="grid lg:grid-cols-3 gap-16 mb-32">
                    <div className="lg:col-span-1">
                        <div className="h-4 w-24 bg-primary/20 rounded" />
                    </div>
                    <div className="lg:col-span-2">
                        <div className="space-y-12">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-1 bg-muted h-16 rounded-full" />
                                    <div className="space-y-2 flex-1 pt-1">
                                        <div className="h-5 w-32 bg-muted rounded" />
                                        <div className="h-4 w-full bg-muted/40 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
