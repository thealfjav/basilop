import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container max-w-4xl py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p>Your privacy is important to us. It is ExamenConia's policy to respect your privacy regarding any information we may collect from you across our website, examenconia.com, and other sites we own and operate.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
          <p>Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered “non-identifying information.”</p>
          <p>Personal information: We may ask for personal information, such as your name and email address. This data is considered “identifying information.”</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Use of Information</h2>
          <p>We may use a combination of identifying and non-identifying information to understand who our visitors are, how they use our services, and how we may improve their experience of our website in future. We do not disclose the specifics of this information publicly, but may share aggregated and anonymised versions of this information, for example, in website usage trend reports.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">Data Security</h2>
          <p>We take security seriously and take precautions to protect your information. We retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies</h2>
          <p>We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Third-Party Services</h2>
          <p>We may employ third-party companies and individuals on our websites—for example, analytics providers and content partners. These third parties have access to your personal information only to perform specific tasks on our behalf, and are obligated not to disclose or use it for any other purpose.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">Links to Other Sites</h2>
          <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
          <p>At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</p>
          
          <p><em>This policy is effective as of {new Date().toLocaleDateString()}.</em></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
