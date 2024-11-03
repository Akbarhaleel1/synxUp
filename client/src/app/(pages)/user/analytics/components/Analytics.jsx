'use client'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { MailOpen, DollarSign, TrendingUp } from 'lucide-react'

const ClientProjectAnalytics = () => {
  const paymentData = [
    { name: 'Paid', value: 62 },
    { name: 'Balance', value: 38 }
  ]

  const monthlyData = [
    { month: 'Jan', payments: 3000 },
    { month: 'Feb', payments: 2500 },
    { month: 'Mar', payments: 4000 },
    { month: 'Apr', payments: 2800 },
    { month: 'May', payments: 3200 },
    { month: 'Jun', payments: 3500 },
  ]

  const COLORS = ['#10B981', '#ffffff']

  const MetricBar = ({ title, value, icon: Icon, max = 100, suffix = '%' }) => (
    <div className="rounded-2xl bg-slate-800/50 p-6 backdrop-blur-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-slate-700/50 p-2">
            <Icon className="h-6 w-6 text-gray-300" />
          </div>
          <h3 className="text-2xl font-bold text-white">{value}{suffix}</h3>
        </div>
      </div>
      
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-gray-300">{title}</span>
        <span className="text-gray-400">{value}/{max}{suffix}</span>
      </div>
      
      <div className="relative h-3 w-full rounded-full bg-gray-700">
        <div 
          className="absolute left-0 top-0 h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${(value / max) * 100}%` }}
        >
          <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full border-2 border-emerald-500 bg-slate-800"></div>
        </div>
      </div>
    </div>
  )

  const PaymentCard = () => (
    <div className="rounded-2xl bg-slate-800/50 p-6 backdrop-blur-lg">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-white">Project Payments</h3>
          <p className="text-3xl font-bold text-white">$36,000</p>
        </div>
        <div className="h-16 w-16">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentData}
                innerRadius={25}
                outerRadius={32}
                paddingAngle={2}
                dataKey="value"
              >
                {paymentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
            <span className="text-gray-300">Paid Amount</span>
          </div>
          <span className="font-medium text-white">62%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <span className="text-gray-300">Remaining Balance</span>
          </div>
          <span className="font-medium text-white">38%</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Project Overview</h2>
        <p className="text-gray-400">Track your project expenses and progress</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <MetricBar title="Response Rate" value={58} icon={MailOpen} />
        <PaymentCard />
        <MetricBar title="Return on Investment (ROI)" value={62} icon={TrendingUp} />
      </div>

      <div className="mt-6 grid gap-4 rounded-2xl bg-slate-800/50 p-6 backdrop-blur-lg">
        <h3 className="text-lg font-medium text-white">Payment Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="payments" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid gap-4 rounded-2xl bg-slate-800/50 p-6 backdrop-blur-lg">
        <h3 className="text-lg font-medium text-white">Payment Details</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl bg-slate-700/50 p-4">
            <div className="mb-2 text-sm text-gray-400">Total Project Cost</div>
            <div className="text-2xl font-bold text-white">$36,000</div>
          </div>
          <div className="rounded-xl bg-slate-700/50 p-4">
            <div className="mb-2 text-sm text-gray-400">Amount Paid</div>
            <div className="text-2xl font-bold text-emerald-500">$22,320</div>
          </div>
          <div className="rounded-xl bg-slate-700/50 p-4">
            <div className="mb-2 text-sm text-gray-400">Remaining Balance</div>
            <div className="text-2xl font-bold text-white">$13,680</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientProjectAnalytics
