export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p className="text-lg">Welcome to the Tonerd app!</p>
        <p className="text-sm text-gray-500">
          This is a simple example of a Next.js page using Tailwind CSS.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </>
  );
}
