'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/ui/page-wrapper';
import {Footer} from '@/components/ui/footer';
import { 
  MapPin, 
  Search, 
  Clock, 
  DollarSign, 
  Train, 
  Bike, 
  Car, 
  Zap,
  Users,
  Star,
  Download,
  Smartphone
} from 'lucide-react';
import Link from 'next/link';

const transportModes = [
  { icon: Train, name: 'Metro', color: 'bg-blue-100 text-blue-600' },
  { icon: Bike, name: 'Bike', color: 'bg-green-100 text-green-600' },
  { icon: Car, name: 'Car', color: 'bg-orange-100 text-orange-600' },
  { icon: Zap, name: 'E-Rickshaw', color: 'bg-purple-100 text-purple-600' },
];

const benefits = [
  { 
    icon: Clock, 
    title: 'Save Time', 
    description: 'Find the fastest routes across multiple transport modes'
  },
  { 
    icon: DollarSign, 
    title: 'Affordable Rides', 
    description: 'Compare prices and choose the most economical option'
  },
  { 
    icon: Users, 
    title: 'Multiple Transport Options', 
    description: 'Metro, bikes, cars, and e-rickshaws all in one app'
  },
];

export default function HomePage() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <PageWrapper>{/* Hero Section */}
<section
  className="relative py-20 lg:py-32 overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/background_image.jpg')",
  }}
>
  {/* White transparent overlay */}
  <div className="absolute inset-0 bg-white/55" />

  {/* Gradient overlay for better contrast */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />

  <div className="container relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            🚀 Seamless City Mobility
          </Badge>
          <div className="inline-block px-6 py-4 rounded-2xl bg-black/20 backdrop-blur-sm">
  <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
    Your Journey, <span className="text-primary">One Platform</span>
  </h1>
</div>


          {/* Made text white */}
          <p className="text-xl text-white max-w-lg">
            Book rides across metro, bikes, cars, and e-rickshaws. Easy, affordable,
            and time-convenient urban transportation.
          </p>
        </div>

        {/* Trip Search Bar */}
        {/* Made card transparent */}
        <Card className="p-6 bg-black/20 border border-black/20 backdrop-blur-sm shadow-lg">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="pl-10 bg-white/70 text-white placeholder-white/85"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-primary" />
                <Input
                  placeholder="Drop-off location"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10 bg-white/70 text-white placeholder-white/85"
                />
              </div>
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
              <Search className="mr-2 h-5 w-5" />
              Find Your Ride
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Hero Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      ><div className="relative bg-black/20 rounded-3xl p-8 lg:p-12 border backdrop-blur-sm border-black/20">
  <div className="grid grid-cols-2 gap-4 mb-6">
    {transportModes.map((mode, index) => (
      <motion.div
        key={mode.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.1 }}
        className="bg-white/40 rounded-lg p-4 shadow text-center text-white 
                   transition-all duration-300 transform hover:scale-105 hover:bg-white/60 hover:shadow-xl cursor-pointer"
      >
        <div
          className={`w-12 h-12 rounded-lg ${mode.color} flex items-center justify-center mx-auto mb-2 transition-colors duration-300`}
        >
          <mode.icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-medium">{mode.name}</span>
      </motion.div>
    ))}
  </div>

  <div className="text-center">
    <div className="inline-flex items-center space-x-2 bg-primary/90 px-4 py-2 rounded-full text-white">
      <Users className="h-5 w-5 text-primary" />
      <span className="text-sm font-medium">10k+ Happy Users</span>
    </div>
  </div>
</div>

      </motion.div>
    </div>
  </div>
</section>


      {/* Benefits Section */}
<section className="py-20 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    {/* Decorative floating shapes */}
    <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-3xl top-10 left-20 animate-pulse" />
    <div className="absolute w-40 h-40 bg-secondary/30 rounded-full blur-2xl bottom-10 right-10 animate-bounce" />
  </div>

  <div className="container relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Easy, Affordable & Time-Convenient
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Experience the future of urban mobility with our comprehensive platform
      </p>
    </motion.div>

    {/* Benefits grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          <Card className="group relative p-8 text-center h-full card-shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
            <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {benefit.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {benefit.description}
            </p>

            {/* Interactive underline animation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-1 bg-primary transition-all duration-500 rounded-full"></div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* App Download Section */}
<section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/30 via-white/80 dark:via-gray-900 to-secondary/20 dark:to-gray-800">
  {/* Decorative background shapes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-40 h-40 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl top-10 left-20 animate-pulse" />
    <div className="absolute w-32 h-32 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-2xl bottom-10 right-10 animate-bounce" />
  </div>

  <div className="container relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Icon + Heading */}
      <div className="mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20"
        >
          <Smartphone className="h-10 w-10 text-primary dark:text-primary/80" />
        </motion.div>

        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground dark:text-white">
          Download Our App
        </h2>
        <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
          Available on <span className="font-semibold text-primary dark:text-primary/80">Google Play</span> 
          and <span className="font-semibold text-primary dark:text-primary/80">App Store</span>.  
          Start your journey with <span className="font-semibold text-primary dark:text-primary/80">seamless urban mobility</span> today.
        </p>
      </div>

      {/* Download buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button
          size="lg"
          className="flex items-center space-x-2 bg-primary text-white hover:bg-primary/90 dark:bg-primary/80 dark:hover:bg-primary/70 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          <Download className="h-5 w-5" />
          <span>Google Play</span>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="flex items-center space-x-2 hover:bg-secondary/70 dark:hover:bg-secondary/50 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          <Download className="h-5 w-5" />
          <span>App Store</span>
        </Button>
      </div>

      {/* Ratings */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center space-x-2 text-sm text-muted-foreground dark:text-gray-300"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary dark:text-primary/80" />
        ))}
        <span className="ml-2">4.8 rating from 50k+ reviews</span>
      </motion.div>
    </motion.div>
  </div>
</section>

      <Footer />
    </PageWrapper>
  );
}