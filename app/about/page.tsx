'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { Users, Target, Heart, Zap, Award, Globe } from 'lucide-react';
import { Footer } from '@/components/ui/footer';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    bio: 'Former transportation executive with 15 years of experience in urban mobility.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    bio: 'Tech innovator passionate about solving complex transportation challenges.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    bio: 'Operations expert focused on seamless user experiences and operational efficiency.',
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Design',
    image:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    bio: 'Design leader creating intuitive and beautiful mobility experiences.',
  },
];

const values = [
  {
    icon: Users,
    title: 'User-Centric',
    description:
      'Every decision we make puts our users first, ensuring the best possible mobility experience.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'We continuously innovate to bring cutting-edge transportation solutions to urban areas.',
  },
  {
    icon: Heart,
    title: 'Sustainability',
    description:
      'Committed to reducing carbon footprint through smart and shared mobility options.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description:
      'Making urban transportation accessible and affordable for everyone, everywhere.',
  },
];

const stats = [
  { label: 'Active Users', value: '500K+' },
  { label: 'Cities Served', value: '25+' },
  { label: 'Trips Completed', value: '10M+' },
  { label: 'Partner Operators', value: '1000+' },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container py-16 space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10 rounded-3xl" />
          <Badge variant="secondary" className="mb-4">
            About AnyGo
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Revolutionizing Urban Mobility
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are on a mission to make city transportation seamless, affordable,
            and sustainable. AnyGo connects you to every transport mode in your
            city through one unified platform.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 dark:bg-card/50 backdrop-blur-md rounded-2xl p-6 text-center shadow-sm 
                  hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To transform urban transportation by creating a unified platform
              that connects all mobility options - from metros and buses to bikes
              and ride-shares. We believe that getting around the city should be
              as simple as tapping your phone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our technology integrates with existing transportation
              infrastructure to provide real-time information, seamless booking,
              and unified payments across all modes of transport.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[Users, Zap, Heart, Globe].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 dark:bg-card/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and help us build better
              transportation experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-white/70 dark:bg-card/60 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-md">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals working together to revolutionize urban
              transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden bg-white/80 dark:bg-card/70 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden rounded-t-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary text-md mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-md">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
{/* Partner Logos Section */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center space-y-8"
>
  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
    Trusted by Leading Partners
  </h2>

  <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
    {[
      'Metro Corp',
      'City Bikes',
      'Eco Rides',
      'Urban Transit',
      'Green Wheels',
      'Swift Cars',
    ].map((partner, index) => (
      <motion.div
        key={partner}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
        className="group px-6 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center"
      >
        <span className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
          {partner}
        </span>
      </motion.div>
    ))}
  </div>
</motion.section>


        <Footer />
      </div>
    </PageWrapper>
  );
}
