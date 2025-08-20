'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { Footer } from '@/components/ui/footer';

const contactInfo = [
  { icon: Mail, title: 'Email Support', description: 'Get help from our support team', value: 'support@anygo.com', action: 'mailto:support@anygo.com' },
  { icon: Phone, title: 'Phone Support', description: '24/7 customer service', value: '+91 1800-123-4567', action: 'tel:+911800123456' },
  { icon: MapPin, title: 'Office Location', description: 'Visit our headquarters', value: 'Cyber City, Gurgaon, India', action: '#' }
];

const faqs = [
  { question: 'How do I book a multi-modal trip?', answer: 'Simply enter your origin and destination in the trip planner. AnyGo will show you the best combinations of metro, buses, bikes, and ride-shares to get you there.' },
  { question: 'Can I pay for all transport modes through the app?', answer: 'Yes! AnyGo wallet allows you to pay for all supported transport modes including metro, buses, bike sharing, and ride-hailing services.' },
  { question: 'Is real-time tracking available?', answer: 'Absolutely. You can track your buses, trains, and ride-shares in real-time, plus get live updates about delays or route changes.' },
  { question: 'What cities does AnyGo support?', answer: 'We currently operate in 25+ cities across India with plans to expand to more metropolitan areas. Check our coverage map in the app.' }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageWrapper>
      <div className="container py-12">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about AnyGo? We are here to make your city travel seamless.
          </p>
        </motion.section>

        {/* Contact Info Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="text-center h-full hover:shadow-2xl transition-all cursor-pointer border border-transparent hover:border-primary rounded-xl">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-md mb-3">{info.description}</p>
                  <a href={info.action} className="text-primary hover:underline font-medium">{info.value}</a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="shadow-xl rounded-2xl border border-transparent hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="focus:ring-primary focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="focus:ring-primary focus:border-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="focus:ring-primary focus:border-primary" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold transition-all flex justify-center items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.section>

          {/* FAQ Section */}
          <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="space-y-6">
            <Card className="shadow-lg rounded-xl border border-transparent hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-muted-foreground/20 pb-3">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        className="flex justify-between w-full items-center font-medium text-left hover:text-primary transition-all"
                      >
                        {faq.question} <ChevronDown className={`transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaqIndex === index && <p className="text-muted-foreground text-md mt-2">{faq.answer}</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Hours */}
            <Card className="shadow-lg rounded-xl border border-transparent hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Support Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
                  { day: 'Weekend', hours: '10:00 AM - 4:00 PM IST' },
                  { day: 'Emergency Support', hours: '24/7 Available' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Map Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
<Card className="rounded-2xl overflow-hidden shadow-lg w-full">
  <CardContent className="p-0">
    <div className="h-80 w-full relative">
      <iframe
        title="AnyGo Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.123456789!2d77.018786!3d28.459496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c7a1b1c1234%3A0xabcdef123456789!2sCyber%20City%2C%20Gurgaon%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sin!4v1692381234567!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Overlay text */}
      <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white p-4">
        <MapPin className="h-12 w-12 mb-2" />
        <h3 className="text-lg font-semibold mb-1">Visit Our Office</h3>
        <p className="text-md text-center">
          AnyGo Headquarters<br />
          Cyber City, Gurgaon 122002<br />
          Haryana, India
        </p>
      </div>
    </div>
  </CardContent>
</Card>


        </motion.section>
      </div>
      <Footer />
    </PageWrapper>
  );
}
