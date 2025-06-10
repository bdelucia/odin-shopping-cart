function CardSkeleton() {
  return (
    <div className="flex flex-col bg-base-100 w-64 sm:w-64 lg:w-72 shadow-sm z-0 rounded-2xl animate-pulse">
      <figure className="h-32 sm:h-40 lg:h-48 overflow-hidden bg-base-300 rounded-2xl"></figure>
      <div className="card-body p-3 sm:p-4 lg:p-6">
        <div className="flex items-center gap-2">
          <div className="h-4 bg-base-300 rounded w-32 sm:h-5 sm:w-40 lg:h-6"></div>
          <div className="h-6 bg-base-300 rounded w-16"></div>
        </div>
        <div className="space-y-2 mt-2">
          <div className="h-3 bg-base-300 rounded w-full"></div>
          <div className="h-3 bg-base-300 rounded w-3/4"></div>
        </div>
        <div className="card-actions flex-nowrap justify-between items-center mt-4">
          <div className="h-8 bg-base-300 rounded w-28"></div>
          <div className="h-8 bg-base-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
