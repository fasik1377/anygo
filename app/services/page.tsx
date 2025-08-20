'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageWrapper } from '@/components/ui/page-wrapper';
import {Footer} from '@/components/ui/footer';
import { Bus, Bike, Train, Car, Smartphone, ShieldCheck, Users } from 'lucide-react';

const services = [
  {
    icon: Train,
    title: 'Metro Integration',
    description: 'Seamlessly plan and pay for metro rides across supported cities.'
  },
  {
    icon: Bus,
    title: 'Bus Transit',
    description: 'Real-time bus schedules, tracking, and easy wallet payments.'
  },
  {
    icon: Bike,
    title: 'Bike Sharing',
    description: 'Locate, unlock, and pay for bikes directly in the AnyGo app.'
  },
  {
    icon: Car,
    title: 'Ride Sharing',
    description: 'Book trusted ride-share partners within the same platform.'
  }
];

const features = [
  {
    title: 'One Wallet for All',
    description: 'Pay across metro, buses, bikes, and ride-hailing with a single wallet.',
    icon: Smartphone
  },
  {
    title: 'Safe & Secure',
    description: 'Your payments and rides are protected with enterprise-grade security.',
    icon: ShieldCheck
  },
  {
    title: 'Community Driven',
    description: 'Over 1 million users trust AnyGo for their daily commute.',
    icon: Users
  }
];

export default function ServicePage() {
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AnyGo brings together multiple modes of transport into one powerful platform helping you move smarter, faster, and greener.
          </p>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-primary">Move Smarter?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Download the AnyGo app today and experience seamless urban mobility like never before.
          </p>
          <Separator className="max-w-md mx-auto mb-6" />
          <a
            href="#"
            className="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition"
          >
            Get the App
          </a>
        </motion.section>
      </div>
      <Footer />
    </PageWrapper>
  );
}
