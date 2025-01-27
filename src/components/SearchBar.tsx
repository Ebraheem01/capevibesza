import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Users, Wallet } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-4xl w-full">
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

      <Button variant="outline" className="w-full md:w-[200px] justify-start text-left font-normal">
        <Wallet className="mr-2 h-4 w-4" />
        Budget
      </Button>

      <Button variant="outline" className="w-full md:w-[200px] justify-start text-left font-normal">
        <Users className="mr-2 h-4 w-4" />
        Guests
      </Button>

      <Button className="w-full md:w-[120px]">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;