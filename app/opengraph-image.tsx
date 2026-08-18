import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: 60, background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 100%)', color: 'white' }}>
        <div style={{ fontSize: 40, fontWeight: 700, marginBottom: 16 }}>BIGZICO</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>Genuine appliances for every home</div>
        <div style={{ fontSize: 28, marginTop: 20, opacity: 0.9 }}>Refrigerators, TVs, generators, air conditioners and more.</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
