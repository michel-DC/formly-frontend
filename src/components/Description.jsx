export default function Description() {
  const sectionStyle = {
    backgroundColor: "transparent",
    borderRadius: 0,
    padding: 0,
    border: "none",
    boxShadow: "none",
    marginTop: "16px",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "8px",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.6",
  };

  return (
    <div style={sectionStyle}>
      <h3 style={titleStyle}>Description</h3>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
