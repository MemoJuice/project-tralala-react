import ProfileHeader from "@/components/userprofile/01_ProfileHeader";
import LatesWorks from "@/components/userprofile/02_LatesWorks";
import Certificates from "@/components/userprofile/03_Certificates";
import AllProjects from "@/components/userprofile/04_AllProjects";
import Reviews from "@/components/userprofile/05_Reviews";

export default function UserProfile() {
  return (
    <div className="min-h-full mx-4 md:mx-24 mt-8 mb-8 bg-white rounded-2xl shadow p-6 font-noto">
      <ProfileHeader />
      <LatesWorks />
      <Certificates />
      <AllProjects />
      <Reviews />
    </div>
  );
}
