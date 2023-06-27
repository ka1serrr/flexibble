export const metadata = {
  title: 'Flexibble',
  description: 'Showcase, discover and post developer projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <h1>Navbar</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
