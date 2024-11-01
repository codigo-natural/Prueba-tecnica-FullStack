export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/page/not-found.jpg')] bg-cover">
      <div className="flex flex-col text-center">
        <h1 className="mb-4 text-4xl md:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
          404
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-200 lg:text-lg">
          Page not found
        </p>
        <a
          href="/"
          className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
