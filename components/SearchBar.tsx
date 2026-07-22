"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
      }}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Rechercher une machine..."
        style={{
          width: "100%",
          padding: "18px",
          fontSize: "20px",
          borderRadius: "12px",
          border: "2px solid #d1d5db",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}