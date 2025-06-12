export function ShopCardSkeleton() {
  return (
    <div className="flex flex-col h-full bg-base-100 shadow-sm z-0 rounded-2xl border-3 border-base-content box-border">
      <figure className="overflow-hidden rounded-t-xl">
        <div className="w-full h-48 bg-base-content animate-pulse p-4"></div>
      </figure>
      <div className="card-body p-3 sm:p-4 lg:p-6 flex flex-col flex-grow">
        <div className="h-3.5 sm:h-4 lg:h-5 bg-base-300 rounded w-3/4 animate-pulse"></div>
        <div className="space-y-1.5 flex-grow mt-2">
          <div className="h-3 bg-base-300 rounded w-full animate-pulse"></div>
          <div className="h-3 bg-base-300 rounded w-5/6 animate-pulse"></div>
          <div className="h-3 bg-base-300 rounded w-2/3 animate-pulse hidden sm:block"></div>
        </div>
        <div className="h-4 sm:h-5 bg-base-300 rounded w-14 animate-pulse mb-2"></div>
        <div className="card-actions flex-nowrap justify-between items-center mt-2">
          <div className="h-6 sm:h-7 bg-base-300 rounded w-24 animate-pulse"></div>
          <div className="h-6 sm:h-6 lg:h-7 bg-base-300 rounded w-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
