import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/NavBar";
import { ArrowRight } from "lucide-react"
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-inherit text-white ">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* NavBar */}
      <NavBar />

      {/* Landing Page */}
      <main className="flex-grow flex items-center justify-center relative">
        <div className="text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Build custom AI Agents with a few clicks
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build your own custom ai agents for your own custom needs. Join our community of ai enthusiasts and enhance your experience
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 p-6 text-lg">
              <Link href="/dashboard">
                Try opencraft <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="relative w-full text-center p-6 text-gray-500">
        <p>&copy; 2024 openmodels. All rights reserved.</p>
      </footer>
    </div>
  );
}
