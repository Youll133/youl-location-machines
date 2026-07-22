export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33780260603"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        background: "#25D366",
        color: "white",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
        textDecoration: "none",
        boxShadow: "0 10px 25px rgba(0,0,0,.3)",
        zIndex: 9999,
      }}
    >
      💬
    </a>
  );
}