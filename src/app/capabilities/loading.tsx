import { ServiceSkeleton } from "@/components/ui/CapabilitySkeleton";

export default function ServicesLoading() {
    return (
        <div className="py-16 px-6 lg:px-12 animate-pulse">
            <div className="max-w-7xl mx-auto">
                {/* Page Header Skeleton */}
                <div className="mb-16">
                    <div className="h-4 w-24 bg-muted rounded mb-4" />{" "}
                    {/* Eyebrow */}
                    <div className="h-12 w-3/4 md:w-1/2 bg-muted rounded mb-6" />{" "}
                    {/* Title */}
                    <div className="h-6 w-full md:w-2/3 bg-muted/60 rounded" />{" "}
                    {/* Subtitle */}
                </div>

                {/* Capability List Skeleton */}
                <div className="flex flex-col border-t border-border">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="py-12 flex flex-col md:flex-row md:items-center gap-8 border-b border-border"
                        >
                            {/* Icon Placeholder */}
                            <div className="shrink-0 w-10 h-10 bg-muted rounded-md" />

                            {/* Content Area */}
                            <div className="flex-1 space-y-4">
                                <div className="h-8 w-48 bg-muted rounded" />{" "}
                                {/* Service Title */}
                                <div className="space-y-2">
                                    <div className="h-4 w-full max-w-2xl bg-muted/60 rounded" />
                                    <div className="h-4 w-3/4 max-w-md bg-muted/60 rounded" />
                                </div>
                            </div>

                            {/* Action Arrow Placeholder */}
                            <div className="hidden md:block w-12 h-12 rounded-full border border-border bg-muted/20" />
                        </div>
                    ))}
                </div>

                {/* Footer CTA Skeleton */}
                <div className="mt-24 p-12 rounded-xl bg-muted/10 border border-border flex flex-col items-center text-center">
                    <div className="h-10 w-64 bg-muted rounded mb-4" />
                    <div className="h-5 w-full max-w-md bg-muted/60 rounded mb-8" />
                    <div className="h-12 w-40 bg-muted rounded-lg" />
                </div>
            </div>
        </div>
    );
}
