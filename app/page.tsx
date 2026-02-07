import Header from '@/components/Header';
import ValentineProposal from '@/components/ValentineProposal';
import PhotoGallery from '@/components/PhotoGallery';
import RomanticFAQ from '@/components/RomanticFAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <Header />
      <ValentineProposal />
      <PhotoGallery />
      {/*<RomanticFAQ />*/ }
      <Footer />
    </div>
  );
}
