import Container from '../components/container';
import { Header } from '../components/header';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
      <div>
      <Header />
      <main className='pt-[var(--navigation-height)]'>
        {children}
        </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </div>
    </body>
    </html>
  )
}
