import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Skeleton className="h-10 w-64 mb-2" />
        <Skeleton className="h-5 w-full max-w-3xl" />
      </div>

      <Skeleton className="h-12 w-full max-w-xl mb-12" />

      <div className="grid grid-cols-4 gap-4 mb-12">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
      </div>

      <Skeleton className="h-8 w-64 mb-6" />
      <Skeleton className="h-[400px] w-full rounded-lg mb-12" />

      <Skeleton className="h-8 w-64 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <Skeleton className="h-48 w-full rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
      </div>

      <Skeleton className="h-64 w-full rounded-lg" />
    </div>
  )
}
