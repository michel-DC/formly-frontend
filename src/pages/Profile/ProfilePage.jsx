import Sidebar from "../../components/Sidebar";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileInfo from "../../components/ProfileInfo";
import StatsGrid from "../../components/StatsGrid";
import Description from "../../components/Description";
import SecondHeader from "../../components/SecondHeader";

export default function ProfilePage() {
  const pageStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    flexDirection: "column",
  };

  const mainContentWrapperStyle = {
    display: "flex",
    flex: 1,
    minHeight: 0,
  };

  const mainContentStyle = {
    flex: 1,
    marginLeft: "280px",
    padding: "32px",
  };

  const contentWrapperStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
  };

  return (
    <div style={pageStyle}>
      <SecondHeader />
      <div style={mainContentWrapperStyle}>
        <Sidebar />
        <main style={mainContentStyle}>
          <div style={contentWrapperStyle}>
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
