import Sidebar from "../../components/profile-page/profile-sidebar";
import ProfileHeader from "../../components/profile-page/profile-header";
import ProfileInfo from "../../components/profile-page/profile-info";
import StatsGrid from "../../components/profile-page/stats-grid";
import Description from "../../components/common/description";
import SecondHeader from "../../components/profile-page/second-header";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-white flex-col">
      <SecondHeader />

      <div className="flex flex-1 min-h-0">
        <Sidebar />

        <main className="flex-1 ml-70 p-8">
          <div className="max-w-4xl mx-auto">
            <ProfileHeader />

            <ProfileInfo />

            <StatsGrid />

            <Description />
          </div>
        </main>
      </div>
    </div>
  );
}
