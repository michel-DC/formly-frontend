import EnzoImage from "/assets/enzo.jpg";

export default function ProfileInfo() {
  const profileContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "32px",
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "3px solid white",
  };

  const nameStyle = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "8px",
  };

  const emailStyle = {
    fontSize: "13px",
    color: "#9ca3af",
  };

  return (
    <div style={profileContainerStyle}>
      <img src={EnzoImage} alt="Profile" style={avatarStyle} />
      <h2 style={nameStyle}>First name : Enzo</h2>
      <p style={emailStyle}>enzo.ledoux@icloud.com</p>
    </div>
  );
}
