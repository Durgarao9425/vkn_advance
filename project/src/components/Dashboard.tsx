import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sample data - in a real app, this would come from your backend
  const financialData = {
    totalIncome: 450000,
    totalExpenses: 275000,
    netBalance: 175000,
    monthlyGrowth: 12.5,
    activeClients: 24,
    pendingConsultations: 8,
    completedProjects: 156,
    clientSatisfaction: 98
  };

  const monthlyData = [
    { month: 'Jan', income: 35000, expenses: 20000 },
    { month: 'Feb', income: 42000, expenses: 23000 },
    { month: 'Mar', income: 38000, expenses: 21000 },
    { month: 'Apr', income: 45000, expenses: 25000 },
    { month: 'May', income: 52000, expenses: 28000 },
    { month: 'Jun', income: 48000, expenses: 26000 }
  ];

  const recentBookings = [
    { name: 'Rajesh Kumar', service: 'Strategic Planning', date: '2024-01-15', status: 'Confirmed' },
    { name: 'Priya Sharma', service: 'Financial Consulting', date: '2024-01-16', status: 'Pending' },
    { name: 'Amit Patel', service: 'HR Consulting', date: '2024-01-17', status: 'Confirmed' },
    { name: 'Sneha Reddy', service: 'Risk Management', date: '2024-01-18', status: 'Confirmed' },
    { name: 'Vikram Singh', service: 'Digital Transformation', date: '2024-01-19', status: 'Pending' }
  ];

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }: {
    title: string;
    value: string | number;
    icon: any;
    trend?: 'up' | 'down';
    trendValue?: number;
    color: string;
  }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 text-sm ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            <span>{trendValue}%</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Analytics Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get real-time insights into your business performance with our comprehensive analytics dashboard.
          </p>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center space-x-2 mx-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            <span>{isVisible ? 'Hide Dashboard' : 'View Dashboard'}</span>
          </button>
        </div>

        {isVisible && (
          <div className="space-y-8 animate-fade-in">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Income (YTD)"
                value={formatCurrency(financialData.totalIncome)}
                icon={DollarSign}
                trend="up"
                trendValue={financialData.monthlyGrowth}
                color="bg-green-600"
              />
              <StatCard
                title="Total Expenses (YTD)"
                value={formatCurrency(financialData.totalExpenses)}
                icon={TrendingUp}
                trend="down"
                trendValue={8.3}
                color="bg-red-600"
              />
              <StatCard
                title="Net Balance"
                value={formatCurrency(financialData.netBalance)}
                icon={BarChart3}
                trend="up"
                trendValue={15.7}
                color="bg-blue-600"
              />
              <StatCard
                title="Active Clients"
                value={financialData.activeClients}
                icon={Users}
                trend="up"
                trendValue={20.0}
                color="bg-purple-600"
              />
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Revenue Overview</h3>
                <div className="space-y-4">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium w-12">{data.month}</span>
                      <div className="flex-1 mx-4">
                        <div className="flex space-x-2 h-8">
                          <div 
                            className="bg-blue-600 rounded flex items-center justify-center text-white text-xs font-medium"
                            style={{ width: `${(data.income / 60000) * 100}%`, minWidth: '60px' }}
                          >
                            ₹{(data.income / 1000).toFixed(0)}K
                          </div>
                          <div 
                            className="bg-red-400 rounded flex items-center justify-center text-white text-xs font-medium"
                            style={{ width: `${(data.expenses / 60000) * 100}%`, minWidth: '50px' }}
                          >
                            ₹{(data.expenses / 1000).toFixed(0)}K
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-6 mt-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span>Income</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span>Expenses</span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Performance Indicators</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Client Satisfaction</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-green-600 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${financialData.clientSatisfaction}%` }}
                        ></div>
                      </div>
                      <span className="text-lg font-bold text-green-600">{financialData.clientSatisfaction}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Project Completion Rate</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full w-11/12 transition-all duration-1000"></div>
                      </div>
                      <span className="text-lg font-bold text-blue-600">94%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Revenue Growth</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-600 h-3 rounded-full w-3/4 transition-all duration-1000"></div>
                      </div>
                      <span className="text-lg font-bold text-purple-600">75%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{financialData.completedProjects}</div>
                      <div className="text-sm text-gray-600">Completed Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{financialData.pendingConsultations}</div>
                      <div className="text-sm text-gray-600">Pending Consultations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-blue-600" />
                Recent Bookings
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Client Name</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Service</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Date</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{booking.name}</td>
                        <td className="py-3 px-4 text-gray-600">{booking.service}</td>
                        <td className="py-3 px-4 text-gray-600">{booking.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'Confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;