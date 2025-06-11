import MonsterCard from "./MonsterCard";

const MonsterGallery = () => {
  const monsters = [
    {
      name: "Теневой Пожиратель",
      type: "Демон Тьмы",
      danger: "extreme" as const,
      description:
        "Древнее существо, питающееся страхами и кошмарами людей. Может материализоваться из любой тени.",
      abilities: ["Невидимость", "Телепортация", "Контроль тьмы"],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      stats: { strength: 95, speed: 88, intelligence: 92 },
    },
    {
      name: "Лесной Страж",
      type: "Природный Дух",
      danger: "medium" as const,
      description:
        "Защитник древнего леса, обладающий способностью управлять растениями и животными.",
      abilities: ["Контроль природы", "Исцеление", "Камуфляж"],
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      stats: { strength: 75, speed: 60, intelligence: 85 },
    },
    {
      name: "Кровавый Вампир",
      type: "Нежить",
      danger: "high" as const,
      description:
        "Элегантный и смертоносный вампир, охотящийся на людей в темных переулках города.",
      abilities: ["Регенерация", "Гипноз", "Превращение в летучую мышь"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      stats: { strength: 85, speed: 90, intelligence: 88 },
    },
    {
      name: "Огненный Дракон",
      type: "Дракон",
      danger: "extreme" as const,
      description:
        "Могучий дракон с огненным дыханием, способный уничтожить целые города.",
      abilities: ["Огненное дыхание", "Полет", "Магическая защита"],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      stats: { strength: 98, speed: 75, intelligence: 90 },
    },
    {
      name: "Ледяной Голем",
      type: "Элементаль",
      danger: "high" as const,
      description:
        "Создание из льда и снега, способное заморозить все живое одним прикосновением.",
      abilities: ["Заморозка", "Ледяная броня", "Снежная буря"],
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      stats: { strength: 90, speed: 45, intelligence: 60 },
    },
    {
      name: "Призрачный Рыцарь",
      type: "Призрак",
      danger: "medium" as const,
      description:
        "Дух павшего воина, обреченный вечно охранять свою гробницу.",
      abilities: ["Нематериальность", "Проклятие", "Духовная атака"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      stats: { strength: 70, speed: 65, intelligence: 75 },
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="creepy-text text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            Галерея Монстров 🎃
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Коллекция самых жутких и загадочных существ из темных уголков мира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monsters.map((monster, index) => (
            <MonsterCard key={index} {...monster} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonsterGallery;
