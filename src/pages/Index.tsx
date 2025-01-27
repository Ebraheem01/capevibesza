import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <div 
          className="h-screen relative flex flex-col items-center justify-center px-4 text-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2942&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Explore the vibes of Cape Town
          </h1>
          <p className="text-xl text-white mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Discover things to do in Cape Town
          </p>
          
          <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <SearchBar />
          </div>
          
          <div className="mt-12 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <Stats />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;