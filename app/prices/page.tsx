import BirthdayPackages from "@/components/prices/BirthdayPackages";
import GameSection from "@/components/prices/GameSection";
import HappyHours from "@/components/prices/HappyHours";
import SpaceBooking from "@/components/prices/SpaceBooking";
import SpaceList from "@/components/prices/SpaceList";
import VRSpaceBooking from "@/components/prices/VRSpaceBooking";

export const metadata = {
  title: "Послуги та ціни | Smile Neon Club",
  description: "Ціни на індивідуальні атракціони, бронювання VR-простору та додаткові розваги кімнати SPACE в Обухові.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#1e1b4b,_#000000)] text-white px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <GameSection />
        <HappyHours />
        <VRSpaceBooking />
        <SpaceBooking />
        <BirthdayPackages />
        <SpaceList />
      </div>
    </div>
  );
}