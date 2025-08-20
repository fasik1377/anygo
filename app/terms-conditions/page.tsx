"use client";

import React from "react";
import { PageWrapper } from "@/components/ui/page-wrapper"; 
import { Separator } from "@/components/ui/separator"; 
import { Footer } from "@/components/ui/footer";

const TermsAndConditions: React.FC = () => {
  return (
    <PageWrapper>
      <section className="container py-12 max-w-4xl mx-auto text-foreground">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-10">
          <strong>Effective Date:</strong> 20/08/2025
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          {/* 1. Acceptance of Terms */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By using AnyGo services, including our website and mobile application, you agree 
              to comply with and be bound by these Terms & Conditions.
            </p>
          </div>

          <Separator />

          {/* 2. Eligibility */}
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use our services. By using AnyGo, you 
              confirm that you have the legal capacity to enter into a binding agreement.
            </p>
          </div>

          <Separator />

          {/* 3. Account Responsibilities */}
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Account Responsibilities</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>You are responsible for all activities that occur under your account.</li>
            </ul>
          </div>

          <Separator />

          {/* 4. Booking & Payments */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Booking & Payments</h2>
            <p>
              All bookings are subject to availability. Payment for services must be made 
              through the payment methods provided in the app. You agree to pay all fees 
              applicable to the services you use.
            </p>
          </div>

          <Separator />

          {/* 5. Service Use */}
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Service Use</h2>
            <p>
              You agree to use AnyGo services in a lawful manner and not engage in any activity 
              that could harm, disrupt, or interfere with the services or other users.
            </p>
          </div>

          <Separator />

          {/* 6. Cancellation & Refunds */}
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Cancellation & Refunds</h2>
            <p>
              Cancellation of trips is subject to our cancellation policy. Refunds, if applicable, 
              will be processed according to the payment method used during booking.
            </p>
          </div>

          <Separator />

          {/* 7. Liability & Disclaimer */}
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Liability & Disclaimer</h2>
            <p>
              AnyGo is not responsible for any damages, losses, or inconvenience caused by delays, 
              accidents, or service interruptions. Services are provided as is without warranties 
              of any kind.
            </p>
          </div>

          <Separator />

          {/* 8. Termination */}
          <div>
            <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to services 
              at our discretion for violation of these Terms & Conditions.
            </p>
          </div>

          <Separator />

          {/* 9. Changes to Terms */}
          <div>
            <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
            <p>
              AnyGo may update these Terms & Conditions from time to time. Updates will be posted 
              with a revised “Effective Date.” Continued use of services constitutes acceptance 
              of the new terms.
            </p>
          </div>

          <Separator />

          {/* 10. Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>If you have questions about these Terms & Conditions, contact us:</p>
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

export default TermsAndConditions;
