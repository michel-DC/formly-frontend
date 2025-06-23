export default function Hero() {
  const heroStyle = {
    background: "linear-gradient(to right, #fbb6ce, #fce7f3, #fed7aa)",
    padding: "48px 0",
    borderRadius: "16px",
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 24px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#000000",
    marginBottom: "8px",
  };

  const subtitleStyle = {
    color: "#6b7280",
  };

  return (
    <div style={heroStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Find your ideal training!</h1>
        <p style={subtitleStyle}>
          Browse through our curated selection of professional courses
        </p>
      </div>
    </div>
  );
}
