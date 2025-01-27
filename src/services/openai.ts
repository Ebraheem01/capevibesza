import { toast } from "sonner";

export interface ActivityResult {
  name: string;
  description: string;
  location: string;
  cost: string;
  child_friendly: boolean;
  source?: string;
}

const SYSTEM_PROMPT = `You are a Cape Town local expert. Your task is to recommend activities based on user preferences.
Consider the following when making recommendations:
- Current weather conditions
- Location accessibility
- Budget constraints
- Group size and child-friendliness
- Activity category (food, hiking, beaches, etc.)

Respond in JSON format with an array of up to 10 items. Each item should have:
{
  "name": "Activity name",
  "description": "Detailed description",
  "location": "Specific location in Cape Town",
  "cost": "Price range or specific cost",
  "child_friendly": boolean,
  "source": "URL source if available"
}`;

export const searchActivities = async (
  searchQuery: string,
  date: Date | undefined,
  budget: string | undefined,
  people: string | undefined,
  childFriendly: string | undefined,
  selectedCategory?: string
): Promise<ActivityResult[]> => {
  try {
    const userPrompt = `Find activities in Cape Town with these preferences:
    Search query: ${searchQuery}
    Date: ${date?.toLocaleDateString()}
    Budget: ${budget}
    Number of people: ${people}
    Child friendly: ${childFriendly}
    Category: ${selectedCategory}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch activities");
    }

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("Error fetching activities:", error);
    toast.error("Failed to fetch activities. Please try again.");
    return [];
  }
};