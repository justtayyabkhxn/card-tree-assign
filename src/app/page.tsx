import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Welcome to the Onboarding Process</h1>
      <div className="flex space-x-4">
        <Link href="/onboarding1">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Start Onboarding
          </button>
        </Link>
      </div>
    </div>
  );
}
