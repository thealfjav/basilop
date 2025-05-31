import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p>Welcome to ExamenConia! These terms and conditions outline the rules and regulations for the use of ExamenConia's Website, located at examenconia.com.</p>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use ExamenConia if you do not agree to take all of the terms and conditions stated on this page.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies</h2>
          <p>We employ the use of cookies. By accessing ExamenConia, you agreed to use cookies in agreement with the ExamenConia's Privacy Policy.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">License</h2>
          <p>Unless otherwise stated, ExamenConia and/or its licensors own the intellectual property rights for all material on ExamenConia. All intellectual property rights are reserved. You may access this from ExamenConia for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from ExamenConia</li>
            <li>Sell, rent or sub-license material from ExamenConia</li>
            <li>Reproduce, duplicate or copy material from ExamenConia</li>
            <li>Redistribute content from ExamenConia</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">User Comments</h2>
          <p>This Agreement shall begin on the date hereof.</p>
          <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. ExamenConia does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of ExamenConia,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3">Disclaimer</h2>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
          <ul>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
          <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
          <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
