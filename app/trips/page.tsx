'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { 
  MapPin, 
  Clock, 
  CreditCard, 
  Repeat, 
  Train, 
  Bike, 
  Car, 
  Zap,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const getTransportIcon = (mode: string) => {
  switch (mode) {
    case 'metro': return Train;
    case 'bike': return Bike;
    case 'car': return Car;
    case 'e-rickshaw': return Zap;
    default: return MapPin;
  }
};

const mockUpcomingTrips = [
  {
    id: '1',
    origin: 'Connaught Place',
    destination: 'Gurgaon Cyber City',
    mode: 'metro',
    date: '2024-01-16',
    time: '09:00',
    duration: '45 min',
    price: 32,
    status: 'confirmed'
  },
  {
    id: '2',
    origin: 'Home',
    destination: 'Office Complex',
    mode: 'bike',
    date: '2024-01-16',
    time: '18:30',
    duration: '20 min',
    price: 15,
    status: 'confirmed'
  }
];

const mockPastTrips = [
  {
    id: '3',
    origin: 'Rajiv Gandhi Airport',
    destination: 'Hotel Grand',
    mode: 'car',
    date: '2024-01-15',
    time: '14:30',
    duration: '35 min',
    price: 125,
    paymentMethod: 'Wallet',
    status: 'completed'
  },
  {
    id: '4',
    origin: 'Metro Station',
    destination: 'Shopping Mall',
    mode: 'e-rickshaw',
    date: '2024-01-14',
    time: '16:15',
    duration: '12 min',
    price: 25,
    paymentMethod: 'UPI',
    status: 'completed'
  },
  {
    id: '5',
    origin: 'University',
    destination: 'Library',
    mode: 'bike',
    date: '2024-01-13',
    time: '10:00',
    duration: '8 min',
    price: 10,
    paymentMethod: 'Wallet',
    status: 'completed'
  }
];

export default function TripsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const TripCard = ({ trip, isUpcoming = false }: { trip: any; isUpcoming?: boolean }) => {
    const TransportIcon = getTransportIcon(trip.mode);

    return (
      <Card className="hover:card-shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TransportIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <Badge variant="outline" className="text-xs mb-1">
                  {trip.mode.charAt(0).toUpperCase() + trip.mode.slice(1)}
                </Badge>
                <p className="font-semibold text-sm">Trip #{trip.id}</p>
              </div>
            </div>
            <Badge 
              variant={trip.status === 'completed' ? 'default' : 'secondary'}
              className={trip.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/20' : ''}
            >
              {trip.status}
            </Badge>
          </div>

          {/* Route */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">{trip.origin}</span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-muted border-2 border-primary"></div>
                <span className="text-sm font-medium">{trip.destination}</span>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{trip.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{trip.time}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{trip.duration}</span>
              </div>
            </div>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="font-semibold">₹{trip.price}</span>
              </div>
              {!isUpcoming && trip.paymentMethod && (
                <span className="text-xs text-muted-foreground">
                  via {trip.paymentMethod}
                </span>
              )}
            </div>
            
            <Button variant="outline" size="sm">
              <Repeat className="mr-2 h-4 w-4" />
              Repeat Trip
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  const EmptyState = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center py-12">
      <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
        <MapPin className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">{description}</p>
      <Button asChild>
        <a href="/booking">Book Your First Trip</a>
      </Button>
    </div>
  );

  return (
    <PageWrapper>
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">My Trips</h1>
              <p className="text-muted-foreground">Manage your upcoming and past journeys</p>
            </div>
            <Button asChild>
              <a href="/booking">Book New Trip</a>
            </Button>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Trips</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {mockUpcomingTrips.length > 0 ? (
                <div className="grid gap-6">
                  {mockUpcomingTrips.map((trip, index) => (
                    <motion.div
                      key={trip.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TripCard trip={trip} isUpcoming={true} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No upcoming trips"
                  description="You don't have any trips planned. Book your next journey to get started!"
                />
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              {mockPastTrips.length > 0 ? (
                <div className="grid gap-6">
                  {mockPastTrips.map((trip, index) => (
                    <motion.div
                      key={trip.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TripCard trip={trip} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No past trips"
                  description="Your trip history will appear here once you complete your first journey."
                />
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </PageWrapper>
  );
}