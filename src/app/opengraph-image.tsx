import { ImageResponse } from "next/og";
import { studio } from "@/lib/data";
import { unsplash } from "@/lib/utils";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const bg = unsplash("1519741497674-611481863552", 1200, 630);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#26221d",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bg}
          width={1200}
          height={630}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(38,34,29,0.95), rgba(38,34,29,0.35) 60%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 72,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#e7c3a4",
              marginBottom: 20,
            }}
          >
            {studio.role} &middot; {studio.location}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: 88,
              lineHeight: 1.05,
              color: "#faf5ec",
              maxWidth: 900,
            }}
          >
            {studio.tagline}
          </div>
        </div>
      </div>
    ),
    size
  );
}
