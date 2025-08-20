"use client";

import React from "react";
import { PageWrapper } from "@/components/ui/page-wrapper"; 
import { Separator } from "@/components/ui/separator"; 
import { Footer } from "@/components/ui/footer";

const SupportPage: React.FC = () => {
  return (
    <PageWrapper>
      <section className="container py-12 max-w-4xl mx-auto text-foreground">
        <h1 className="text-3xl font-bold mb-6">Support</h1>
        <p className="text-sm text-muted-foreground mb-10">
          <strong>Effective Date:</strong> 20/08/2025
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          {/* 1. Support Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Support Overview</h2>
            <p>
              Our support team is here to help you with any questions or issues related to AnyGo services. 
              We provide assistance for booking, payments, account management, and general inquiries.
            </p>
          </div>

          <Separator />

          {/* 2. How to Contact Support */}
          <div>
            <h2 className="text-xl font-semibold mb-2">2. How to Contact Support</h2>
            <p>You can reach our support team through the following channels:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Email: <strong>support@anygo.com</strong></li>
              <li>Phone: <strong>+1 (555) 123-4567</strong></li>
              <li>In-app chat: Accessible via your AnyGo account dashboard</li>
            </ul>
          </div>

          <Separator />

          {/* 3. Response Times */}
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Response Times</h2>
            <p>
              We strive to respond to all support requests within 24 hours. During high-demand periods, 
              response times may be longer, but we ensure all inquiries are addressed promptly.
            </p>
          </div>

          <Separator />

          {/* 4. Reporting Issues */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Reporting Issues</h2>
            <p>
              To report any issues with rides, payments, or accounts, please provide detailed information, 
              including screenshots if applicable, so our team can assist efficiently.
            </p>
          </div>

          <Separator />

          {/* 5. Feedback & Suggestions */}
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Feedback & Suggestions</h2>
            <p>
              We value your feedback! You can share suggestions or report improvements via email or 
              the in-app feedback feature. Your input helps us enhance the AnyGo experience.
            </p>
          </div>

          <Separator />

          {/* 6. Escalation */}
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Escalation</h2>
            <p>
              If your issue is not resolved satisfactorily, you may escalate it by contacting our 
              support manager at <strong>support-manager@anygo.com</strong>.
            </p>
          </div>

          <Separator />

          {/* 7. Privacy & Support */}
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Privacy & Support</h2>
            <p>
              All support interactions are subject to our Privacy Policy. Your personal information 
              will be used solely for resolving your requests and will not be shared with third parties 
              outside of necessary service providers.
            </p>
          </div>

          <Separator />

          {/* 8. Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
            <p>If you have questions or need further assistance, contact us:</p>
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

export default SupportPage;
