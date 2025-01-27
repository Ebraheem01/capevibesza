import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-cape-blue">
            CapeVibesZA
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-cape-grey hover:text-cape-blue transition-colors">
              About
            </Link>
            <Link href="/activities" className="text-cape-grey hover:text-cape-blue transition-colors">
              Activities
            </Link>
            <Link href="/blog" className="text-cape-grey hover:text-cape-blue transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-cape-grey hover:text-cape-blue transition-colors">
              Contact
            </Link>
            <Button variant="outline">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;