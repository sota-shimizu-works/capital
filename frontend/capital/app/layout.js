import "./globals.scss"


export const metadata = {
  title: 'CAPITAL',
}

export default function RootLayout({ children }) {

  return (
    <html lang="ja">

      <body>

        <video className="globalBgVideo" src="/bg_pc.mp4" autoPlay muted loop width="1280" height="720" playsInline />

        {children}

      </body>
    </html>
  );
}
