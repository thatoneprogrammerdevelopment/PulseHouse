import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Check,
  X,
  Star,
  Users,
  Gift,
  Zap,
  Crown,
  Mail,
  Building2,
  Pause,
  GraduationCap,
  Shield
} from "lucide-react";

interface PlanFeature {
  included: boolean;
  text: string;
}

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  popular?: boolean;
  features: PlanFeature[];
  icon: any;
  color: string;
}

const plans: MembershipPlan[] = [
  {
    id: "drop-in",
    name: "Drop-In",
    price: 28,
    period: "per class",
    description: "Try before you commit",
    icon: Zap,
    color: "bg-gray-500",
    features: [
      { included: true, text: "Single class access" },
      { included: true, text: "All class types available" },
      { included: true, text: "Premium equipment use" },
      { included: false, text: "Priority booking" },
      { included: false, text: "Guest privileges" },
      { included: false, text: "Smoothie bar discount" },
      { included: false, text: "Retail discount" },
      { included: false, text: "Private training sessions" }
    ]
  },
  {
    id: "starter",
    name: "Starter",
    price: 119,
    period: "per month",
    description: "8 classes/month • Rolls over 2 classes",
    icon: Star,
    color: "bg-[#6C5CE7]",
    features: [
      { included: true, text: "8 classes per month" },
      { included: true, text: "Roll over 2 unused classes" },
      { included: true, text: "All class types" },
      { included: true, text: "Book 7 days in advance" },
      { included: false, text: "Priority booking" },
      { included: false, text: "Guest privileges" },
      { included: false, text: "Smoothie bar discount" },
      { included: false, text: "Private training sessions" }
    ]
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: 189,
    period: "per month",
    description: "Unlimited classes • Best value",
    popular: true,
    icon: Users,
    color: "bg-[#FF6B6B]",
    features: [
      { included: true, text: "Unlimited classes" },
      { included: true, text: "Book 14 days in advance" },
      { included: true, text: "Bring a friend 2x/month" },
      { included: true, text: "15% smoothie bar discount" },
      { included: true, text: "All class types" },
      { included: true, text: "Complimentary towel service" },
      { included: false, text: "Priority booking" },
      { included: false, text: "Private training sessions" }
    ]
  },
  {
    id: "vip",
    name: "VIP",
    price: 249,
    period: "per month",
    description: "Everything + VIP perks",
    icon: Crown,
    color: "bg-[#F9CA24]",
    features: [
      { included: true, text: "Everything in Unlimited" },
      { included: true, text: "Priority booking (21 days)" },
      { included: true, text: "1 free guest pass/month" },
      { included: true, text: "20% retail & smoothie discount" },
      { included: true, text: "Quarterly private training" },
      { included: true, text: "VIP locker access" },
      { included: true, text: "Birthday month free class pack" },
      { included: true, text: "Exclusive member events" }
    ]
  }
];

const classPacks = [
  { classes: 10, price: 240, savings: "Save $40" },
  { classes: 20, price: 450, savings: "Save $110" },
  { classes: 30, price: 630, savings: "Save $210" }
];

export function MembershipPlans() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#6C5CE7] to-[#F9CA24]" />
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1671970922029-0430d2ae122c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI1OTA5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Membership hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6" style={{ fontWeight: 800 }}>
            Find Your Perfect Plan
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Flexible memberships designed for your lifestyle
          </p>
          
          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-white">
              <Check className="w-5 h-5" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Check className="w-5 h-5" />
              <span>Pause anytime</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Check className="w-5 h-5" />
              <span>Cancel online</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Check className="w-5 h-5" />
              <span>First class FREE</span>
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Offer Banner */}
      <section className="bg-[#F9CA24] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Gift className="w-8 h-8 text-[#2C3E50]" />
              <div>
                <div className="text-2xl text-[#2C3E50]" style={{ fontWeight: 800 }}>
                  New Member Special: $49 for 2 Weeks Unlimited
                </div>
                <div className="text-[#2C3E50]/70">Try unlimited classes for just $49. Limited time offer!</div>
              </div>
            </div>
            <Button className="bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-white px-8 whitespace-nowrap">
              Claim Offer
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(plan => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.id}
                  className={`relative overflow-hidden ${plan.popular ? 'ring-4 ring-[#FF6B6B] shadow-2xl scale-105' : ''} hover:shadow-xl transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#FF6B6B] text-white px-4 py-1 text-sm rounded-bl-lg" style={{ fontWeight: 700 }}>
                      MOST POPULAR
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`${plan.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#2C3E50] mb-2">{plan.name}</CardTitle>
                    <div className="text-4xl text-[#2C3E50] mb-1" style={{ fontWeight: 800 }}>
                      ${plan.price}
                    </div>
                    <div className="text-[#2C3E50]/70 text-sm">{plan.period}</div>
                    <p className="text-[#2C3E50]/70 text-sm mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-[#2C3E50]' : 'text-[#2C3E50]/40'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${plan.popular ? 'bg-[#FF6B6B] hover:bg-[#FF6B6B]/90' : 'bg-[#6C5CE7] hover:bg-[#6C5CE7]/90'} text-white`}
                    >
                      {plan.id === 'drop-in' ? 'Buy Single Class' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class Packs */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#2C3E50] mb-4" style={{ fontWeight: 800 }}>
              Class Packs
            </h2>
            <p className="text-lg text-[#2C3E50]/70">
              Save more when you buy in bulk. Never expires!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classPacks.map(pack => (
              <Card key={pack.classes} className="hover:shadow-xl transition-shadow border-2 hover:border-[#6C5CE7]">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl text-[#2C3E50] mb-2" style={{ fontWeight: 800 }}>
                    {pack.classes}
                  </div>
                  <div className="text-[#2C3E50]/70 mb-4">Classes</div>
                  <div className="text-3xl text-[#6C5CE7] mb-2" style={{ fontWeight: 700 }}>
                    ${pack.price}
                  </div>
                  <Badge className="bg-green-500 text-white mb-6">
                    {pack.savings}
                  </Badge>
                  <div className="text-sm text-[#2C3E50]/70 mb-4">
                    ${(pack.price / pack.classes).toFixed(2)} per class
                  </div>
                  <Button className="w-full bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white">
                    Purchase Pack
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#2C3E50] mb-4" style={{ fontWeight: 800 }}>
              Compare Plans
            </h2>
            <p className="text-lg text-[#2C3E50]/70">
              Side-by-side comparison of all membership benefits
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[#2C3E50] text-white">
                  <th className="p-4 text-left">Features</th>
                  {plans.map(plan => (
                    <th key={plan.id} className="p-4 text-center">
                      <div className="mb-2">{plan.name}</div>
                      <div className="text-2xl" style={{ fontWeight: 800 }}>${plan.price}</div>
                      <div className="text-xs text-white/70">{plan.period}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 text-[#2C3E50]" style={{ fontWeight: 600 }}>Monthly Classes</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">1</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">8</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">Unlimited</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">Unlimited</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 text-[#2C3E50]" style={{ fontWeight: 600 }}>Advanced Booking</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">Same day</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">7 days</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">14 days</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">21 days</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-[#2C3E50]" style={{ fontWeight: 600 }}>Guest Privileges</td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center text-[#2C3E50]/70">2x/month</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">1x/month free</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 text-[#2C3E50]" style={{ fontWeight: 600 }}>Smoothie Discount</td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center text-[#2C3E50]/70">15%</td>
                  <td className="p-4 text-center text-[#2C3E50]/70">20%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-[#2C3E50]" style={{ fontWeight: 600 }}>Retail Discount</td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center text-[#2C3E50]/70">20%</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 text-[#2C3E50]" style={{ fontWeight: 600 }}>Private Training</td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#6C5CE7]/20 hover:border-[#6C5CE7] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#6C5CE7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pause className="w-8 h-8 text-[#6C5CE7]" />
                </div>
                <h3 className="text-xl text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                  Pause Anytime
                </h3>
                <p className="text-[#2C3E50]/70">
                  Life happens! Pause your membership for up to 3 months per year, no questions asked.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F9CA24]/20 hover:border-[#F9CA24] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F9CA24]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-[#F9CA24]" />
                </div>
                <h3 className="text-xl text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                  Student Discount
                </h3>
                <p className="text-[#2C3E50]/70">
                  Students and military save 15% on all monthly memberships with valid ID.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF6B6B]/20 hover:border-[#FF6B6B] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                  No Commitment
                </h3>
                <p className="text-[#2C3E50]/70">
                  Month-to-month billing. Cancel online anytime with no cancellation fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Wellness */}
      <section className="py-20 bg-gradient-to-br from-[#2C3E50] to-[#6C5CE7]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-8 h-8" />
                <h2 className="text-4xl" style={{ fontWeight: 800 }}>
                  Corporate Wellness
                </h2>
              </div>
              <p className="text-xl mb-6 text-white/90">
                Boost employee health, morale, and productivity with PulseHouse corporate memberships.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Discounted group rates for 10+ employees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Flexible billing options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>On-site wellness workshops available</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#2C3E50]">Request Corporate Info</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                  <div>
                    <Label htmlFor="contact-name">Contact Name</Label>
                    <Input id="contact-name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Input id="employees" type="number" placeholder="50" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your wellness goals..." rows={3} />
                  </div>
                  <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Information
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ / Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl text-[#2C3E50] mb-6" style={{ fontWeight: 800 }}>
            Still Have Questions?
          </h2>
          <p className="text-xl text-[#2C3E50]/70 mb-8">
            Our team is here to help you find the perfect membership for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-8 py-6 text-lg h-auto">
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white px-8 py-6 text-lg h-auto">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
