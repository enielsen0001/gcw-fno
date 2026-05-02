import { ServiceSkeleton } from '@/components/ui/ServiceSkeleton';

export default function ServicesLoading() {
  return (
    <div className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-16">
          <div className="h-16 w-1/2 mb-6 bg-muted animate-pulse rounded-lg" />
          <div className="h-6 w-2/3 bg-muted animate-pulse rounded-md" />
        </div>

        <div className= "grid grid-cols-1 gap-8">
          {[...Array(6)].map((_, i) => (
            <ServiceSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}