'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Train, 
  Bike, 
  Car, 
  Zap,
  ArrowRight,
  Navigation,
  TrendingUp,
  Star
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

const mockRoutes = [
  {
    id: '1',
    name: 'Downtown Express',
    origin: 'Central Station',
    destination: 'Business District',
    mode: 'metro',
    duration: '25 min',
    price: 35,
    distance: '18.2 km',
    stops: ['Central Station', 'City Hall', 'Trade Center', 'Business District'],
    frequency: '3-5 min',
    rating: 4.8,
    popularity: 'high'
  },
  {
    id: '2',
    name: 'University Circle',
    origin: 'University Campus',
    destination: 'Student Housing',
    mode: 'bike',
    duration: '15 min',
    price: 12,
    distance: '5.4 km',
    stops: ['University Campus', 'Library Square', 'Food Court', 'Student Housing'],
    frequency: 'On demand',
    rating: 4.6,
    popularity: 'medium'
  },
  {
    id: '3',
    name: 'Airport Connector',
    origin: 'City Center',
    destination: 'International Airport',
    mode: 'car',
    duration: '45 min',
    price: 150,
    distance: '35.8 km',
    stops: ['City Center', 'Highway Junction', 'Airport Terminal 1', 'International Airport'],
    frequency: '10-15 min',
    rating: 4.9,
    popularity: 'high'
  },
  {
    id: '4',
    name: 'Local Explorer',
    origin: 'Market Square',
    destination: 'Heritage Quarter',
    mode: 'e-rickshaw',
    duration: '20 min',
    price: 28,
    distance: '8.7 km',
    stops: ['Market Square', 'Old Town', 'Museum District', 'Heritage Quarter'],
    frequency: '5-8 min',
    rating: 4.4,
    popularity: 'medium'
  },
  {
    id: '5',
    name: 'Tech Hub Shuttle',
    origin: 'Residential Area',
    destination: 'Tech Park',
    mode: 'car',
    duration: '30 min',
    price: 85,
    distance: '22.1 km',
    stops: ['Residential Area', 'Commercial Complex', 'IT Corridor', 'Tech Park'],
    frequency: '8-12 min',
    rating: 4.7,
    popularity: 'high'
  },
  {
    id: '6',
    name: 'Green Route',
    origin: 'Eco Park',
    destination: 'Riverside',
    mode: 'bike',
    duration: '18 min',
    price: 8,
    distance: '6.2 km',
    stops: ['Eco Park', 'Nature Trail', 'Bridge View', 'Riverside'],
    frequency: 'On demand',
    rating: 4.5,
    popularity: 'low'
  }
];

export default function RoutesPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedRoute, setSelectedRoute] = useState(mockRoutes[0]);
  const [filterMode, setFilterMode] = useState('all');

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  const filteredRoutes = filterMode === 'all' 
    ? mockRoutes 
    : mockRoutes.filter(route => route.mode === filterMode);

  if (!user) {
    return null;
  }

  const RouteCard = ({ route }: { route: any }) => {
    const TransportIcon = getTransportIcon(route.mode);
    const isSelected = selectedRoute.id === route.id;

    return (
      <Card 
        className={`cursor-pointer transition-all hover:card-shadow-lg ${
          isSelected ? 'border-primary card-shadow-lg' : ''
        }`}
        onClick={() => setSelectedRoute(route)}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TransportIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{route.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {route.mode.charAt(0).toUpperCase() + route.mode.slice(1)}
                </Badge>
              </div>
            </div>
            {route.popularity === 'high' && (
              <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/20">
                <TrendingUp className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>

          <div className="flex items-center space-x-2 mb-3 text-xs">
            <span>{route.origin}</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
            <span>{route.destination}</span>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{route.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-3 w-3" />
                <span>₹{route.price}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span>{route.rating}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Route Details</h1>
              <p className="text-muted-foreground">Explore available routes and plan your journey</p>
            </div>
            <Button asChild>
              <a href="/booking">Book Journey</a>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Route List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Available Routes</CardTitle>
                  
                  {/* Filter Tabs */}
                  <Tabs value={filterMode} onValueChange={setFilterMode} className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
                      <TabsTrigger value="metro" className="text-xs">Metro</TabsTrigger>
                      <TabsTrigger value="bike" className="text-xs">Bike</TabsTrigger>
                      <TabsTrigger value="car" className="text-xs">Car</TabsTrigger>
                      <TabsTrigger value="e-rickshaw" className="text-xs">E-Rick</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredRoutes.map((route, index) => (
                    <motion.div
                      key={route.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <RouteCard route={route} />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Route Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Route Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {React.createElement(getTransportIcon(selectedRoute.mode), {
                          className: "h-5 w-5 text-primary"
                        })}
                      </div>
                      <span>{selectedRoute.name}</span>
                    </CardTitle>
                    <Badge variant="outline">
                      {selectedRoute.mode.charAt(0).toUpperCase() + selectedRoute.mode.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Route Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Origin</span>
                        <span className="font-medium">{selectedRoute.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Destination</span>
                        <span className="font-medium">{selectedRoute.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Distance</span>
                        <span className="font-medium">{selectedRoute.distance}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{selectedRoute.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fare</span>
                        <span className="font-medium text-primary">₹{selectedRoute.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Frequency</span>
                        <span className="font-medium">{selectedRoute.frequency}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{selectedRoute.rating}</span>
                      <span className="text-muted-foreground text-sm">(Based on user reviews)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Journey Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Navigation className="h-5 w-5" />
                    <span>Journey Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedRoute.stops.map((stop, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${
                            index === 0 
                              ? 'bg-primary' 
                              : index === selectedRoute.stops.length - 1 
                              ? 'bg-primary border-2 border-white dark:border-background' 
                              : 'bg-muted border-2 border-primary'
                          }`} />
                          {index < selectedRoute.stops.length - 1 && (
                            <div className="w-0.5 h-8 bg-border mt-2" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{stop}</p>
                          <p className="text-xs text-muted-foreground">
                            {index === 0 && 'Starting point'}
                            {index === selectedRoute.stops.length - 1 && 'Final destination'}
                            {index > 0 && index < selectedRoute.stops.length - 1 && 'Stop'}
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {index === 0 && '0 min'}
                          {index === selectedRoute.stops.length - 1 && selectedRoute.duration}
                          {index > 0 && index < selectedRoute.stops.length - 1 && `${Math.floor((index / (selectedRoute.stops.length - 1)) * parseInt(selectedRoute.duration))} min`}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Route Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground text-sm">
                        Route visualization with real-time updates
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Button */}
              <Button size="lg" className="w-full" asChild>
                <a href="/booking">
                  Book This Route
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}