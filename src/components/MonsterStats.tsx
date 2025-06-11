import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MonsterStats = () => {
  const stats = [
    {
      icon: "Skull",
      title: "Всего монстров",
      value: "666",
      description: "Зарегистрированных существ",
      color: "text-red-400",
    },
    {
      icon: "Eye",
      title: "Активных",
      value: "13",
      description: "Замечены в последние 24 часа",
      color: "text-green-400",
    },
    {
      icon: "Zap",
      title: "Опасных",
      value: "42",
      description: "Крайне опасных существ",
      color: "text-orange-400",
    },
    {
      icon: "Moon",
      title: "Ночных",
      value: "187",
      description: "Активны только ночью",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="creepy-text text-4xl font-bold text-green-400 mb-4">
            Статистика Мира Монстров 📊
          </h2>
          <p className="text-gray-300 text-lg">
            Актуальные данные о жутких существах нашего мира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 monster-hover pulse-glow"
            >
              <CardHeader className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mb-4 ${stat.color}`}
                >
                  <Icon name={stat.icon as any} size={32} />
                </div>
                <CardTitle className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-white font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonsterStats;
