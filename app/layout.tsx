import ProvidersWrapper from "./ProvidersWrapper";
import Nav from "./Nav";
import './globals.css';

export const metadata = {
  title: "Aruba and Yaseen's Wedding",
  description: "7.2.2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProvidersWrapper>
          <Nav />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
