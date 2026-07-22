"use client";

import { useState } from "react";

export default function Gallery({
  images,
}: {
  images: string[];
}) {
  const [current, setCurrent] = useState(images[0]);

  return (
    <div>
      <img
        src={current}
        alt="Machine"
        style={{
          width: "100%",
          height: "550px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Photo ${index + 1}`}
            onClick={() => setCurrent(img)}
            style={{
              width: "120px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "10px",
              cursor: "pointer",
              border:
                current === img ? "3px solid #FFD400" : "2px solid #ddd",
            }}
          />
        ))}
      </div>
    </div>
  );
}