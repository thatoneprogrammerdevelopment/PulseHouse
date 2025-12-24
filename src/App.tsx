import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { ClassSchedule } from "./components/ClassSchedule";
import { Instructors } from "./components/Instructors";
import { MembershipPlans } from "./components/MembershipPlans";
import { BookingInterface } from "./components/BookingInterface";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { 
  Menu, 
  X, 
  Home, 
  Calendar, 
  Users, 
  CreditCard, 
  BookOpen,
  Phone,
  User
} from "lucide-react";

type Page = "home" | "schedule" | "instructors" | "membership" | "booking";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home" as Page, label: "Home", icon: Home },
    { id: "schedule" as Page, label: "Schedule", icon: Calendar },
    { id: "instructors" as Page, label: "Instructors", icon: Users },
    { id: "membership" as Page, label: "Membership", icon: CreditCard },
    { id: "booking" as Page, label: "Book Class", icon: BookOpen }
  ];

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "schedule":
        return <ClassSchedule />;
      case "instructors":
        return <Instructors />;
      case "membership":
        return <MembershipPlans />;
      case "booking":
        return <BookingInterface />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation("home")}
              className="flex items-center gap-2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#6C5CE7] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <div>
                <div className="text-2xl text-[#2C3E50] tracking-tight" style={{ fontWeight: 800 }}>
                  PulseHouse
                </div>
                <div className="text-xs text-[#2C3E50]/60 tracking-wide">FITNESS STUDIO</div>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigation(item.id)}
                  className={`px-4 ${
                    currentPage === item.id
                      ? "text-[#FF6B6B] bg-[#FF6B6B]/10"
                      : "text-[#2C3E50] hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/5"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="outline" 
                className="border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                (512) 555-PULSE
              </Button>
              <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl text-[#2C3E50]" style={{ fontWeight: 800 }}>
                      Menu
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  <nav className="flex-grow">
                    <div className="space-y-2">
                      {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Button
                            key={item.id}
                            variant="ghost"
                            onClick={() => handleNavigation(item.id)}
                            className={`w-full justify-start text-lg ${
                              currentPage === item.id
                                ? "text-[#FF6B6B] bg-[#FF6B6B]/10"
                                : "text-[#2C3E50]"
                            }`}
                          >
                            <Icon className="w-5 h-5 mr-3" />
                            {item.label}
                          </Button>
                        );
                      })}
                    </div>

                    <div className="mt-8 pt-8 border-t space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        (512) 555-PULSE
                      </Button>
                      <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white">
                        <User className="w-4 h-4 mr-2" />
                        Sign In
                      </Button>
                    </div>
                  </nav>

                  <div className="mt-auto pt-8 border-t text-center">
                    <div className="text-sm text-[#2C3E50]/60">
                      1234 Fitness Ave, Austin, TX 78701
                    </div>
                    <div className="text-sm text-[#2C3E50]/60 mt-1">
                      Mon-Fri: 5am-9pm
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? "bg-[#FF6B6B]/10 text-[#FF6B6B]"
                    : "text-[#2C3E50]/60 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Page Content */}
      <main className="pb-20 lg:pb-0">
        {renderPage()}
      </main>

      {/* Quick Action Button (Mobile) */}
      <button
        onClick={() => handleNavigation("booking")}
        className="lg:hidden fixed bottom-20 right-4 z-40 w-14 h-14 bg-gradient-to-br from-[#FF6B6B] to-[#6C5CE7] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <BookOpen className="w-6 h-6" />
      </button>
    </div>
  );
}
