import './globals.css';
import Footer from '../components/Footer';
import NavBar from '../components/navBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
