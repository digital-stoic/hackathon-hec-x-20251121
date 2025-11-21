import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Users, Coins } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Portfolio = () => {
  const [investedCoins, setInvestedCoins] = useState(500);
  const totalCoins = 1250;
  const availableCoins = totalCoins - investedCoins;

  const investments = [
    { name: "Actions Tech", amount: 200, performance: 12.5, color: "text-primary" },
    { name: "ETF Monde", amount: 150, performance: -3.2, color: "text-destructive" },
    { name: "Crypto", amount: 100, performance: 25.8, color: "text-primary" },
    { name: "Obligations", amount: 50, performance: 4.1, color: "text-primary" }
  ];

  const performanceData = [
    { date: "Sem 1", coins: 1000 },
    { date: "Sem 2", coins: 1050 },
    { date: "Sem 3", coins: 1100 },
    { date: "Sem 4", coins: 1080 },
    { date: "Sem 5", coins: 1150 },
    { date: "Sem 6", coins: 1200 },
    { date: "Sem 7", coins: 1180 },
    { date: "Sem 8", coins: 1250 }
  ];

  const globalRanking = [
    { rank: 1, name: "Marie D.", coins: 5850, trend: "up" },
    { rank: 2, name: "Thomas L.", coins: 5720, trend: "up" },
    { rank: 3, name: "Sophie M.", coins: 5650, trend: "down" },
    { rank: 42, name: "Toi", coins: 1250, trend: "up", isUser: true },
    { rank: 4, name: "Lucas B.", coins: 5480, trend: "up" }
  ];

  const friendsRanking = [
    { rank: 1, name: "Alex M.", coins: 1850 },
    { rank: 2, name: "Toi", coins: 1250, isUser: true },
    { rank: 3, name: "Julie K.", coins: 980 },
    { rank: 4, name: "Marc P.", coins: 750 }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" className="font-semibold">
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Retour</span>
            </Button>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-primary/10 border border-primary/30">
              <Coins className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm sm:text-base text-foreground">{totalCoins}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">
            Mon Portfolio
          </h1>
          <p className="text-muted-foreground">Suis tes investissements et ta progression</p>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="p-4 sm:p-6 border-border bg-card hover:shadow-premium transition-all duration-300">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-2 text-muted-foreground">Disponibles</div>
              <div className="text-2xl sm:text-4xl font-bold text-foreground">{availableCoins}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Coins</div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 hover:shadow-premium transition-all duration-300">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-2 text-primary">Investis</div>
              <div className="text-2xl sm:text-4xl font-bold text-foreground">{investedCoins}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Coins</div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-accent/50 bg-gradient-to-br from-accent/10 to-primary/10 hover:shadow-premium transition-all duration-300">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-2 text-accent">Performance</div>
              <div className="text-2xl sm:text-4xl font-bold text-primary">+8.5%</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Total</div>
            </div>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="p-4 sm:p-6 mb-6 sm:mb-8 border-border bg-card">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Évolution de tes Coins</h2>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="coins" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Investissements */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-border bg-card">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Mes Investissements</h2>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md">
                  Investir
                </Button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {investments.map((inv, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition-all hover:shadow-md duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm sm:text-base text-foreground">{inv.name}</span>
                      <div className="flex items-center gap-1 sm:gap-2">
                        {inv.performance > 0 ? (
                          <TrendingUp className="w-4 h-4 text-primary" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        )}
                        <span className={`font-semibold text-sm sm:text-base ${inv.color}`}>
                          {inv.performance > 0 ? '+' : ''}{inv.performance}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-muted-foreground">Investi: {inv.amount} coins</span>
                      <span className="text-xs sm:text-sm font-semibold text-primary">
                        Valeur: {Math.round(inv.amount * (1 + inv.performance / 100))} coins
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-primary/10 border border-primary/30">
                <p className="text-xs sm:text-sm text-foreground font-medium text-center">
                  Diversifie tes investissements pour réduire les risques
                </p>
              </div>
            </Card>

            {/* Performance History */}
            <Card className="p-4 sm:p-6 border-border bg-card">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Performances Passées</h2>
              
              <div className="space-y-3">
                {[
                  { period: "Aujourd'hui", gain: 15, percentage: 1.2, color: "from-primary/20 to-primary/10" },
                  { period: "Cette semaine", gain: 85, percentage: 7.1, color: "from-secondary/20 to-secondary/10" },
                  { period: "Ce mois", gain: 105, percentage: 8.5, color: "from-accent/20 to-accent/10" },
                  { period: "Total", gain: 150, percentage: 12.0, color: "from-primary/30 to-secondary/20" }
                ].map((perf, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${perf.color} border border-border hover:shadow-md transition-all duration-300`}>
                    <span className="font-semibold text-sm sm:text-base text-foreground">{perf.period}</span>
                    <div className="text-right">
                      <div className="font-semibold text-foreground text-sm sm:text-base">+{perf.gain} coins</div>
                      <div className="text-xs text-muted-foreground">+{perf.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Rankings */}
          <div className="space-y-4 sm:space-y-6">
            {/* Global Ranking */}
            <Card className="p-4 sm:p-6 border-border bg-card">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Classement Général</h2>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {globalRanking.map((player) => (
                  <div 
                    key={player.rank}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                      player.isUser 
                        ? 'bg-primary/10 border-primary/50 shadow-premium' 
                        : 'bg-muted border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-semibold text-base sm:text-lg ${
                        player.rank <= 3 ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-background text-foreground'
                      }`}>
                        #{player.rank}
                      </div>
                      <span className={`font-semibold text-sm sm:text-base ${player.isUser ? 'text-primary' : 'text-foreground'}`}>
                        {player.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm sm:text-base text-foreground">{player.coins}</span>
                      {player.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-primary" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Friends Ranking */}
            <Card className="p-4 sm:p-6 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Classement Amis</h2>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {friendsRanking.map((friend) => (
                  <div 
                    key={friend.rank}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                      friend.isUser 
                        ? 'bg-card border-primary shadow-md' 
                        : 'bg-card/50 border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                        {friend.name.charAt(0)}
                      </div>
                      <div>
                        <div className={`font-semibold text-sm sm:text-base ${friend.isUser ? 'text-primary' : 'text-foreground'}`}>
                          {friend.name}
                        </div>
                        <div className="text-xs text-muted-foreground">#{friend.rank}</div>
                      </div>
                    </div>
                    <span className="font-semibold text-sm sm:text-base text-foreground">{friend.coins}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 sm:mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                <Users className="w-4 h-4 mr-2" />
                Inviter des amis
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
