import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#26221d",
          borderRadius: "16px",
        }}
      >
        <span
          style={{
            fontSize: 30,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: "#e7c3a4",
          }}
        >
          F
        </span>
      </div>
    ),
    size
  );
}
