import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import bnpLogo from "@/assets/bnp-logo.png";

const BNPHeader = () => {
  return (
    <header className="bg-background border-b">
      {/* Top Bar */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={bnpLogo} 
                alt="BNP Paribas Wealth Management" 
                className="h-14"
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-sm font-medium">
                  INTERNATIONAL
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>International</DropdownMenuItem>
                <DropdownMenuItem>United States</DropdownMenuItem>
                <DropdownMenuItem>Europe</DropdownMenuItem>
                <DropdownMenuItem>Asia Pacific</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-sm font-medium">
                  EN
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter Text"
                className="pl-10 w-80 bg-background"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-stretch">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-14 px-6 rounded-none border-b-4 border-transparent hover:border-primary text-sm font-medium uppercase">
                  YOUR GOALS
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Investment Planning</DropdownMenuItem>
                <DropdownMenuItem>Retirement Planning</DropdownMenuItem>
                <DropdownMenuItem>Estate Planning</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-14 px-6 rounded-none border-b-4 border-transparent hover:border-primary text-sm font-medium uppercase">
                  ABOUT YOU
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Individual Investors</DropdownMenuItem>
                <DropdownMenuItem>Family Offices</DropdownMenuItem>
                <DropdownMenuItem>Institutions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-14 px-6 rounded-none border-b-4 border-transparent hover:border-primary text-sm font-medium uppercase">
                  INSIGHTS
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Market Insights</DropdownMenuItem>
                <DropdownMenuItem>Investment Themes</DropdownMenuItem>
                <DropdownMenuItem>Research Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-14 px-6 rounded-none border-b-4 border-transparent hover:border-primary text-sm font-medium uppercase">
                  CONTACT
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Find an Advisor</DropdownMenuItem>
                <DropdownMenuItem>Office Locations</DropdownMenuItem>
                <DropdownMenuItem>Get in Touch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/simulator">
              <Button variant="ghost" className="h-14 px-6 rounded-none border-b-4 border-transparent hover:border-primary text-sm font-medium uppercase bg-primary/5">
                AI SIMULATOR
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BNPHeader;
