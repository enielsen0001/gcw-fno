export default function Loading() {
  return (
    <div className="py-20 px-6 lg:px-12 max-w-5xl mx-auto animate-pulse">
      <div className="h-4 w-32 bg-muted rounded mb-12" />

      {/* Header Skeleton */}
      <div className="space-y-4 mb-16">
        <div className="h-16 w-3/4 bg-muted rounded" />
        <div className="h-8 w-1/2 bg-muted rounded" />
      </div>

      {/* Stats Bar Skeleton */}
      <div className="grid grid-cols-4 gap-8 py-8 border-y border-border mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-3 w-16 bg-muted rounded" />
            <div className="h-5 w-24 bg-muted rounded" />
          </div>
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2 space-y-12">
          <div className="h-8 w-48 bg-muted rounded" />
          <div className="space-y-4">
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-2/3 bg-muted rounded" />
          </div>
        </div>
        <div className="h-64 bg-card border border-border rounded-xl" />
      </div>
    </div>
  );
}