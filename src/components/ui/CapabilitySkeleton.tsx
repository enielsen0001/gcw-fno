export function ServiceSkeleton() {
    return (
        <div className="p-8 rounded-lg border border-border bg-card animate-pulse">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-6 bg-muted rounded-md" />
            {/* Title Placeholder */}
            <div className="h-8 w-3/4 mb-4 bg-muted rounded" />
            {/* Description Placeholder */}
            <div className="space-y-3 mb-6">
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
            </div>
            {/* Link Placeholder */}
            <div className="h-4 w-24 bg-muted rounded" />
        </div>
    );
}
