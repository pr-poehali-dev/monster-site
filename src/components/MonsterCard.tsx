import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface MonsterCardProps {
  name: string;
  type: string;
  danger: "low" | "medium" | "high" | "extreme";
  description: string;
  abilities: string[];
  image: string;
  stats: {
    strength: number;
    speed: number;
    intelligence: number;
  };
}

const MonsterCard = ({
  name,
  type,
  danger,
  description,
  abilities,
  image,
  stats,
}: MonsterCardProps) => {
  const getDangerColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-600";
      case "medium":
        return "bg-yellow-600";
      case "high":
        return "bg-orange-600";
      case "extreme":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const getDangerText = (level: string) => {
    switch (level) {
      case "low":
        return "Безопасный";
      case "medium":
        return "Осторожно";
      case "high":
        return "Опасный";
      case "extreme":
        return "Смертельный";
      default:
        return "Неизвестно";
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 monster-hover group overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge className={`${getDangerColor(danger)} text-white`}>
            {getDangerText(danger)}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-2xl text-green-400 creepy-text flex items-center gap-2">
          <Icon name="Monster" fallback="Skull" />
          {name}
        </CardTitle>
        <p className="text-orange-400 font-semibold">{type}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

        <div>
          <h4 className="text-purple-400 font-semibold mb-2">Способности:</h4>
          <div className="flex flex-wrap gap-2">
            {abilities.map((ability, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-900 text-purple-200"
              >
                {ability}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
          <div className="text-center">
            <div className="text-red-400 font-bold text-lg">
              {stats.strength}
            </div>
            <div className="text-xs text-gray-400">Сила</div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 font-bold text-lg">{stats.speed}</div>
            <div className="text-xs text-gray-400">Скорость</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-bold text-lg">
              {stats.intelligence}
            </div>
            <div className="text-xs text-gray-400">Интеллект</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonsterCard;
