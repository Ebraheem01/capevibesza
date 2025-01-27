import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Users, Search, Wallet } from "lucide-react";
import { useState } from "react";
import { searchActivities, ActivityResult } from "@/services/openai";
import { toast } from "sonner";

interface SearchBarProps {
  onResults: (results: ActivityResult[]) => void;
}

const SearchBar = ({ onResults }: SearchBarProps) => {
  const [date, setDate] = useState<Date>();
  const [searchQuery, setSearchQuery] = useState("");
  const [budget, setBudget] = useState<string | undefined>(undefined);
  const [people, setPeople] = useState<string | undefined>(undefined);
  const [childFriendly, setChildFriendly] = useState<string | undefined>(undefined);

  const categories = [
    "Food & Drinks",
    "Hiking",
    "Beaches",
    "Pools",
    "Museums",
    "Shopping",
    "Adventure",
    "Nature",
  ];

  const handleSearch = async () => {
    try {
      const results = await searchActivities(
        searchQuery,
        date,
        budget,
        people,
        childFriendly
      );
      onResults(results);
    } catch (error) {
      console.error("Search error:", error);
      toast.error("Failed to search activities. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row gap-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full">
        <Input
          placeholder="Search activities..."
          className="w-full md:w-[250px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          leftIcon={<Search className="h-4 w-4" />}
        />

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full md:w-[200px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? date.toLocaleDateString() : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Select onValueChange={setBudget}>
          <SelectTrigger className="w-full md:w-[200px]">
            <Wallet className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="under-100">Under R100</SelectItem>
            <SelectItem value="100-300">R100 - R300</SelectItem>
            <SelectItem value="300-500">R300 - R500</SelectItem>
            <SelectItem value="500-1000">R500 - R1000</SelectItem>
            <SelectItem value="1000-plus">R1000+</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setPeople}>
          <SelectTrigger className="w-full md:w-[200px]">
            <Users className="mr-2 h-4 w-4" />
            <SelectValue placeholder="People" />
          </SelectTrigger>
          <SelectContent>
            {[...Array(9)].map((_, i) => (
              <SelectItem key={i} value={(i + 1).toString()}>
                {i + 1} {i === 0 ? "Person" : "People"}
              </SelectItem>
            ))}
            <SelectItem value="10-plus">10+ People</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setChildFriendly}>
          <SelectTrigger className="w-full md:w-[200px]">
            <Users className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Child Friendly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full md:w-[120px]" onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className="rounded-full bg-white/90 hover:bg-white"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
