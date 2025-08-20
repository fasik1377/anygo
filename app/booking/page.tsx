'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  DollarSign, 
  Train, 
  Bike, 
  Car, 
  Zap,
  ArrowRight,
  QrCode,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const steps = [
  { id: 1, title: 'Select Trip', description: 'Choose your origin and destination' },
  { id: 2, title: 'Confirmation', description: 'Review trip details and confirm' },
  { id: 3, title: 'QR Ticket', description: 'Get your digital ticket' }
];

const mockRoutes = [
  {
    id: '1',
    mode: 'metro',
    icon: Train,
    duration: '35 min',
    price: 32,
    steps: ['Metro Line 1', 'Change at Central', 'Metro Line 3'],
    distance: '18.5 km'
  },
  {
    id: '2',
    mode: 'bike',
    icon: Bike,
    duration: '28 min',
    price: 15,
    steps: ['Bike pickup', 'Direct route', 'Bike drop'],
    distance: '12.2 km'
  },
  {
    id: '3',
    mode: 'car',
    icon: Car,
    duration: '22 min',
    price: 95,
    steps: ['Car pickup', 'Express highway', 'Drop at destination'],
    distance: '18.5 km'
  },
  {
    id: '4',
    mode: 'e-rickshaw',
    icon: Zap,
    duration: '45 min',
    price: 28,
    steps: ['E-rickshaw pickup', 'City roads', 'Drop at destination'],
    distance: '15.8 km'
  }
];

export default function BookingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [formData, setFormData] = useState({
    origin: '',
    destination: ''
  });

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  const handleSearch = () => {
    if (!formData.origin || !formData.destination) {
      toast.error('Please fill in both origin and destination');
      return;
    }
    setCurrentStep(2);
  };

  const handleSelectRoute = (route: any) => {
    setSelectedRoute(route);
    setCurrentStep(3);
  };

  const handleConfirmBooking = () => {
    toast.success('Trip booked successfully!');
    setCurrentStep(4);
  };

  if (!user) {
    return null;
  }

  return (
    <PageWrapper>
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Book Your Journey</h1>
            <p className="text-muted-foreground">Find the best route for your trip</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-2 ${
                  currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.id 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {currentStep > step.id ? <CheckCircle className="h-4 w-4" /> : step.id}
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-medium">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-border mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Search */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Select Your Trip</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="origin">From</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="origin"
                          placeholder="Enter pickup location"
                          value={formData.origin}
                          onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">To</Label>
                      <div className="relative">
                        <Navigation className="absolute left-3 top-3 h-4 w-4 text-primary" />
                        <Input
                          id="destination"
                          placeholder="Enter drop-off location"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleSearch} size="lg" className="w-full">
                    Search Routes
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Route Selection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Available Routes</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{formData.origin}</span>
                    <ArrowRight className="h-4 w-4" />
                    <span>{formData.destination}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {mockRoutes.map((route, index) => (
                      <motion.div
                        key={route.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card 
                          className="cursor-pointer hover:card-shadow-lg transition-shadow border-2 hover:border-primary/50"
                          onClick={() => handleSelectRoute(route)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                  <route.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2 mb-1">
                                    <Badge variant="outline">
                                      {route.mode.charAt(0).toUpperCase() + route.mode.slice(1)}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground">{route.distance}</span>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                      <Clock className="h-4 w-4" />
                                      <span>{route.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <DollarSign className="h-4 w-4" />
                                      <span className="font-semibold">₹{route.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="h-5 w-5 text-muted-foreground" />
                            </div>
                            
                            <div className="mt-4">
                              <div className="flex items-center space-x-2">
                                {route.steps.map((step, stepIndex) => (
                                  <React.Fragment key={stepIndex}>
                                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                                      {step}
                                    </span>
                                    {stepIndex < route.steps.length - 1 && (
                                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && selectedRoute && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Confirm Your Trip</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Trip Summary */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Route</span>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>{formData.origin}</span>
                        <ArrowRight className="h-4 w-4" />
                        <span>{formData.destination}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Transport Mode</span>
                      <Badge variant="outline">
                        {selectedRoute.mode.charAt(0).toUpperCase() + selectedRoute.mode.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Duration</span>
                      <span className="text-sm">{selectedRoute.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Distance</span>
                      <span className="text-sm">{selectedRoute.distance}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between text-lg font-semibold">
                      <span>Total Fare</span>
                      <span>₹{selectedRoute.price}</span>
                    </div>
                  </div>

                  <Button onClick={handleConfirmBooking} size="lg" className="w-full">
                    Confirm & Pay ₹{selectedRoute.price}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 4: QR Ticket */}
          {currentStep === 4 && selectedRoute && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-600">Booking Confirmed!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* QR Code */}
                  <div className="p-8 bg-secondary rounded-lg">
                    <div className="w-48 h-48 mx-auto bg-white border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                      <QrCode className="h-24 w-24 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Ticket ID: AGO-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Route:</span>
                      <span>{formData.origin} → {formData.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mode:</span>
                      <span>{selectedRoute.mode.charAt(0).toUpperCase() + selectedRoute.mode.slice(1)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fare:</span>
                      <span>₹{selectedRoute.price}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      Download Ticket
                    </Button>
                    <Button variant="outline" className="w-full">
                      Share Ticket
                    </Button>
                    <Button 
                      onClick={() => router.push('/trips')}
                      className="w-full"
                    >
                      View All Trips
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}