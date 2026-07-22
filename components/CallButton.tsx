export default function CallButton() {
  return (
    <a
      href="tel:+2250748416657"
      style={{
        position: "fixed",
        bottom: "100px",
        right: "25px",
        background: "#2563eb",
        color: "white",
        padding: "16px 20px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 10px 25px rgba(0,0,0,.25)",
        zIndex: 999,
      }}
    >
      📞 Appeler maintenant
    </a>
  );
}