import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import ActivityCard from "@/components/ActivityCard";
import { ActivityResult } from "@/services/openai";

const Index = () => {
  const [searchResults, setSearchResults] = useState<ActivityResult[]>([]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <div 
          className="min-h-screen relative flex flex-col items-center justify-center px-4 text-center"
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
            <SearchBar onResults={setSearchResults} />
          </div>
          
          <div className="mt-12 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <Stats />
          </div>

          {searchResults.length > 0 && (
            <div className="container mx-auto mt-12 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((result, index) => (
                  <ActivityCard key={index} activity={result} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;