"use client";

import React from "react";
import { PageWrapper } from "@/components/ui/page-wrapper"; // keep if you have it
import { Separator } from "@/components/ui/separator"; // keep if you have it
import { Footer } from "@/components/ui/footer"; //

const PrivacyPolicy: React.FC = () => {
  return (
    <PageWrapper>
      <section className="container py-12 max-w-4xl mx-auto text-foreground">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">
          <strong>Effective Date:</strong> 20/08/2025
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              We collect the following types of information to provide a seamless mobility
              experience:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Personal Information:</strong> Name, email, phone number, payment details, and account credentials when you sign up or book a trip.</li>
              <li><strong>Location Data:</strong> Real-time GPS data for booking rides, tracking trips, and ensuring accurate routing.</li>
              <li><strong>Usage Data:</strong> Device information, IP address, browser type, app interactions, and cookies to improve performance.</li>
              <li><strong>Communication Data:</strong> Customer support requests, chat history, and feedback submitted through the app or website.</li>
            </ul>
          </div>

          <Separator />

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Process bookings and manage trips.</li>
              <li>Provide customer support and resolve disputes.</li>
              <li>Send important updates, promotions, or service-related messages.</li>
              <li>Ensure safety, fraud prevention, and compliance with legal requirements.</li>
              <li>Improve our website, mobile app, and overall user experience.</li>
            </ul>
          </div>

          <Separator />

          {/* 3. Sharing of Information */}
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Drivers & Partners:</strong> Limited details necessary to complete trips.</li>
              <li><strong>Service Providers:</strong> Payment processors, cloud hosting, analytics providers.</li>
              <li><strong>Legal Authorities:</strong> When required by law, regulation, or to protect safety and rights.</li>
            </ul>
            <p className="mt-2">We <strong>do not sell</strong> your personal information to third parties.</p>
          </div>

          <Separator />

          {/* 4. Data Retention */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
            <p>
              We retain your information only as long as necessary for the purposes stated above,
              unless a longer retention period is required by law.
            </p>
          </div>

          <Separator />

          {/* 5. Security of Your Information */}
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Security of Your Information</h2>
            <p>
              We use encryption, secure servers, and strict access controls to safeguard your data.
              However, no online system can guarantee 100% security.
            </p>
          </div>

          <Separator />

          {/* 6. Your Rights & Choices */}
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights & Choices</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access, update, or delete your personal data.</li>
              <li>Opt out of marketing emails or push notifications.</li>
              <li>Restrict location tracking (may affect service functionality).</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, contact us at <strong>support@anygo.com</strong>.
            </p>
          </div>

          <Separator />

          {/* 7. Cookies & Tracking */}
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Cookies & Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to improve site performance and
              personalize your experience. You may disable cookies in your browser settings.
            </p>
          </div>

          <Separator />

          {/* 8. Third-Party Links */}
          <div>
            <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
            <p>
              Our website and app may contain links to third-party websites. We are not responsible
              for the privacy practices of such sites.
            </p>
          </div>

          <Separator />

          {/* 9. Updates */}
          <div>
            <h2 className="text-xl font-semibold mb-2">9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted with a
              revised “Effective Date.”
            </p>
          </div>

          <Separator />

          {/* 10. Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, contact us:</p>
            <ul className="list-none ml-0 mt-2 space-y-1">
              <li>📧 Email: <strong>support@anygo.com</strong></li>
              <li>📞 Phone: <strong>+1 (555) 123-4567</strong></li>
              <li>📍 Address: <strong>Cyber City, Gurgaon, India</strong></li>
            </ul>
          </div>
        </div>

      </section>

      {/* Footer included */}
      <Footer />
    </PageWrapper>
  );
};

export default PrivacyPolicy;
