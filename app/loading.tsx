export default function Loading() {
  return (
    <div className="p-10 grid md:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border p-4 rounded">
          <div className="h-40 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 mt-3 w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
