'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-300 p-4">
        <h1 className="text-xl font-bold">E-commerce</h1>
      </header>

      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-400 h-48 rounded-md"></div>
        <div className="bg-gray-400 h-48 rounded-md"></div>
        <div className="bg-gray-400 h-48 rounded-md"></div>
        <div className="bg-gray-400 h-48 rounded-md"></div>
        <div className="bg-gray-400 h-48 rounded-md"></div>
      </main>

      <footer className="bg-gray-300 p-4 text-center">
        <p className="text-sm">© 2025 Gaming Store</p>
      </footer>
    </div>
  );
}
