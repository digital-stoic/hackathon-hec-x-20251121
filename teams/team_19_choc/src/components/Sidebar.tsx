import { NavLink } from "@/components/NavLink";
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  Building2, 
  TrendingUp, 
  Shield, 
  ArrowLeftRight,
  Users,
  FileText,
  Landmark
} from "lucide-react";
import bnpLogo from "@/assets/bnp-logo.png";

const navigation = [
  { name: "Dashboard 360°", href: "/dashboard", icon: LayoutDashboard },
  { name: "Wealth Diagnostic", href: "/diagnostic", icon: ClipboardCheck },
  { name: "Legal & Tax Structure", href: "/structuration", icon: Building2 },
  { name: "Investment & Diversification", href: "/investissement", icon: TrendingUp },
  { name: "Bank Aggregator", href: "/bank-aggregator", icon: Landmark },
  { name: "Executive Protection", href: "/protection", icon: Shield },
  { name: "Succession & Exit", href: "/transmission", icon: ArrowLeftRight },
  { name: "Entrepreneur Community", href: "/communaute", icon: Users },
  { name: "Documents & Reports", href: "/documents", icon: FileText },
];

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-sidebar-border">
        <img src={bnpLogo} alt="BNP Paribas" className="h-10 w-auto mb-2" />
        <h1 className="text-lg font-semibold text-foreground">Entrepreneurs</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
            activeClassName="bg-gradient-primary text-white shadow-premium"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-gradient-accent p-4 rounded-lg">
          <p className="text-xs font-medium text-accent-foreground mb-2">Need advice?</p>
          <button className="w-full bg-background/20 hover:bg-background/30 text-accent-foreground text-xs font-medium py-2 px-3 rounded transition-colors">
            Contact your advisor
          </button>
        </div>
      </div>
    </aside>
  );
};