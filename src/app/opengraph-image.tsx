import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Daniil Klimenko — Full-Stack Developer";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #14101c 50%, #1a1a2e 100%)",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: 28,
          }}
        >
          Full-Stack Developer · Athens, Greece
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#c084fc",
          }}
        >
          Daniil Klimenko
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            opacity: 0.7,
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Full-stack web apps end-to-end — React, Next.js, Python, AWS.
        </div>
      </div>
    ),
    { ...size }
  );
}
