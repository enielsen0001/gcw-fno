import { CaseStudiesSkeleton } from '@/components/ui/CaseStudiesSkeleton';

export default function Loading() {
  return (
    <div className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-16">
          <div className="h-16 w-1/2 mb-6 bg-muted animate-pulse rounded-lg" />
          <div className="h-6 w-2/3 bg-muted animate-pulse rounded-md" />
        </div>

        <div className="mb-16">
           <div className="h-16 w-1/3 bg-muted animate-pulse rounded-md mb-6" />
        </div>

        <CaseStudiesSkeleton count={4} />
      </div>
    </div>
  );
}