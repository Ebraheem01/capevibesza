import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityResult } from "@/services/openai";

interface ActivityCardProps {
  activity: ActivityResult;
  imageUrl?: string;
}

const ActivityCard = ({ activity, imageUrl }: ActivityCardProps) => {
  return (
    <Card className="w-full max-w-md overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={activity.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-cape-blue">{activity.name}</CardTitle>
        <CardDescription className="text-sm text-cape-grey">
          {activity.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{activity.description}</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="px-2 py-1 bg-cape-sand/20 rounded-full">
            {activity.cost}
          </span>
          {activity.child_friendly && (
            <span className="px-2 py-1 bg-cape-blue/20 rounded-full">
              Child Friendly
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;