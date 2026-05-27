import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'EduSmart Pro - Smart School Management',
  description: 'Complete ERP and LMS solution for modern schools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}