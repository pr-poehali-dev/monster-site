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
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=300&fit=crop",
      stats: { strength: 95, speed: 88, intelligence: 92 },
    },
    {
      name: "Кровавый Вампир",
      type: "Нежить",
      danger: "extreme" as const,
      description:
        "Элегантный и смертоносный вампир, охотящийся на людей в темных переулках города.",
      abilities: ["Регенерация", "Гипноз", "Превращение в летучую мышь"],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      stats: { strength: 85, speed: 90, intelligence: 88 },
    },
    {
      name: "Зомби-Орда",
      type: "Нежить",
      danger: "high" as const,
      description:
        "Восставший из мертвых, жаждущий человеческой плоти. Распространяет заразу среди живых.",
      abilities: ["Заражение", "Невосприимчивость к боли", "Групповая атака"],
      image:
        "https://images.unsplash.com/photo-1509248961158-d3f6d7e8f7f6?w=400&h=300&fit=crop",
      stats: { strength: 70, speed: 45, intelligence: 30 },
    },
    {
      name: "Оборотень",
      type: "Ликантроп",
      danger: "high" as const,
      description:
        "Человек-волк, превращающийся в чудовище в полнолуние. Обладает звериными инстинктами.",
      abilities: ["Превращение", "Острые когти", "Ночное зрение"],
      image:
        "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
      stats: { strength: 88, speed: 92, intelligence: 65 },
    },
    {
      name: "Призрак Замка",
      type: "Призрак",
      danger: "medium" as const,
      description:
        "Беспокойная душа, привязанная к старинному замку. Наводит ужас на всех живых.",
      abilities: ["Нематериальность", "Левитация", "Духовное воздействие"],
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      stats: { strength: 60, speed: 80, intelligence: 85 },
    },
    {
      name: "Демон Бездны",
      type: "Демон",
      danger: "extreme" as const,
      description:
        "Порождение адского пламени, способное поглощать души грешников.",
      abilities: ["Огненная магия", "Портал в ад", "Проклятия"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      stats: { strength: 95, speed: 75, intelligence: 90 },
    },
    {
      name: "Скелет-Воин",
      type: "Нежить",
      danger: "medium" as const,
      description:
        "Костяной воин, поднятый темной магией. Сражается с мечом и щитом.",
      abilities: ["Неутомимость", "Сопротивление магии", "Воскрешение"],
      image:
        "https://images.unsplash.com/photo-1542736705-53f0131d1e98?w=400&h=300&fit=crop",
      stats: { strength: 75, speed: 55, intelligence: 45 },
    },
    {
      name: "Ведьма Болот",
      type: "Ведьма",
      danger: "high" as const,
      description:
        "Старая ведьма, живущая в глубинах болот. Варит зелья и насылает проклятья.",
      abilities: ["Темная магия", "Зельеварение", "Проклятия"],
      image:
        "https://images.unsplash.com/photo-1509248961158-d3f6d7e8f7f6?w=400&h=300&fit=crop",
      stats: { strength: 50, speed: 60, intelligence: 95 },
    },
    {
      name: "Чупакабра",
      type: "Криптид",
      danger: "high" as const,
      description:
        "Загадочное существо, высасывающее кровь из домашних животных в ночи.",
      abilities: ["Высасывание крови", "Прыжки", "Маскировка"],
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=300&fit=crop",
      stats: { strength: 70, speed: 88, intelligence: 55 },
    },
    {
      name: "Мумия Фараона",
      type: "Нежить",
      danger: "high" as const,
      description:
        "Древний правитель, восставший из саркофага. Владеет магией песков.",
      abilities: ["Песчаная буря", "Древние проклятия", "Регенерация"],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      stats: { strength: 80, speed: 40, intelligence: 88 },
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
