export function CaseStudiesSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="p-8 rounded-lg border border-border bg-card animate-pulse"
                >
                    {/* Header Area */}
                    <div className="mb-6">
                        <div className="flex items-start justify-between mb-2">
                            <div className="h-8 w-3/4 bg-muted rounded-md" />
                            <div className="h-5 w-5 bg-muted rounded-md" />
                        </div>
                        <div className="h-4 w-1/2 bg-muted rounded-md" />
                    </div>

                    {/* Body Text */}
                    <div className="space-y-3 mb-6">
                        <div className="h-4 w-full bg-muted rounded-md" />
                        <div className="h-4 w-5/6 bg-muted rounded-md" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <div className="h-6 w-16 bg-muted rounded-md" />
                        <div className="h-6 w-20 bg-muted rounded-md" />
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-border">
                        <div className="h-5 w-1/3 bg-muted rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    );
}
