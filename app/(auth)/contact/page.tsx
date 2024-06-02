export const metadata = {
    title: 'MakeMyMvp Contact',
    description: 'Contacts Page for MakeMyMvp, a MVP Building Agency',
  }
import Contact from '@/components/contact';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;

  