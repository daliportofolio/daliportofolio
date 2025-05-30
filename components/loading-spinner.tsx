export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  return (
    <div className={`animate-spin border-2 border-blue-500 border-t-transparent rounded-full ${sizeClasses[size]}`} />
  )
}

export function LoadingCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 animate-pulse">
      <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
      </div>
    </div>
  )
}
