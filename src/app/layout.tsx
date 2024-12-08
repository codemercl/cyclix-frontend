import { GeistSans } from 'geist/font/sans';
import "../styles/global.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { SelectedPriceProvider } from '../hooks/useSelectedPriceContext';

const geistSans = GeistSans;

export const metadata = {
  title: "Cursus Platform",
  description: "A platform for learning and teaching",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SelectedPriceProvider>
        <body className={geistSans.className}>
          <div className='container'>
            <div className="blurry-background"></div>
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </SelectedPriceProvider>
    </html>
  );
}

export default RootLayout;