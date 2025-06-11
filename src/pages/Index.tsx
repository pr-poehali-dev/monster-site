import MonsterHero from "@/components/MonsterHero";
import MonsterGallery from "@/components/MonsterGallery";
import MonsterStats from "@/components/MonsterStats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MonsterHero />
      <MonsterGallery />
      <MonsterStats />
    </div>
  );
};

export default Index;
