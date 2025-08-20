'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { 
  Wallet, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  History, 
  TrendingUp,
  Zap
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const mockTransactions = [
  {
    id: '1',
    type: 'payment',
    description: 'Metro Ride - Line 1',
    amount: -25,
    date: '2024-01-15',
    time: '09:30',
    status: 'completed'
  },
  {
    id: '2',
    type: 'topup',
    description: 'Wallet Top-up',
    amount: 500,
    date: '2024-01-14',
    time: '18:45',
    status: 'completed'
  },
  {
    id: '3',
    type: 'payment',
    description: 'Bike Sharing - 30min',
    amount: -15,
    date: '2024-01-14',
    time: '14:20',
    status: 'completed'
  },
  {
    id: '4',
    type: 'payment',
    description: 'E-Rickshaw Ride',
    amount: -40,
    date: '2024-01-13',
    time: '19:15',
    status: 'completed'
  },
  {
    id: '5',
    type: 'payment',
    description: 'Car Pool - Downtown',
    amount: -85,
    date: '2024-01-12',
    time: '08:00',
    status: 'completed'
  }
];

export default function WalletPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [balance] = useState(1250.75);

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

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
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">My Wallet</h1>
              <p className="text-muted-foreground">Manage your balance and transactions</p>
            </div>
            <Wallet className="h-8 w-8 text-primary" />
          </div>

          {/* Balance Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white card-shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-6 w-6" />
                    <span className="font-medium">AnyGo Wallet</span>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Active
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/80 text-sm">Current Balance</p>
                  <p className="text-4xl font-bold">₹{balance.toFixed(2)}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Button 
                    variant="secondary" 
                    className="bg-white/20 hover:bg-white/30 text-white border-white/20"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Funds
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-transparent hover:bg-white/10 text-white border-white/20"
                  >
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Withdraw
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">This Month</p>
                      <p className="text-2xl font-bold">₹165</p>
                      <p className="text-xs text-muted-foreground">Spent on rides</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Avg. per Ride</p>
                      <p className="text-2xl font-bold">₹33</p>
                      <p className="text-xs text-muted-foreground">5 rides this month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                      <History className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Last Added</p>
                      <p className="text-2xl font-bold">₹500</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="h-5 w-5" />
                  <span>Recent Transactions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTransactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          transaction.type === 'payment' 
                            ? 'bg-red-100 dark:bg-red-900/20' 
                            : 'bg-green-100 dark:bg-green-900/20'
                        }`}>
                          {transaction.type === 'payment' ? (
                            <ArrowDownLeft className={`h-4 w-4 ${
                              transaction.type === 'payment' ? 'text-red-600' : 'text-green-600'
                            }`} />
                          ) : (
                            <ArrowUpRight className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.date} at {transaction.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <Button variant="outline" className="w-full">
                  <History className="mr-2 h-4 w-4" />
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}