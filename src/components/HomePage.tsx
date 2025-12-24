import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Users, 
  Calendar, 
  Award, 
  Heart, 
  Zap, 
  Flame, 
  Dumbbell,
  Droplet,
  Coffee,
  Star,
  MapPin,
  Clock,
  Mail,
  Phone,
  Instagram,
  Apple,
  Smartphone
} from "lucide-react";

// Mock data for upcoming classes
const upcomingClasses = [
  {
    id: 1,
    name: "HIIT Cardio Blast",
    instructor: "Sarah Chen",
    time: "6:00 AM",
    duration: "45 min",
    spotsLeft: 7,
    totalSpots: 25,
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2xhc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjU0ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Power Cycle",
    instructor: "Marcus Rivera",
    time: "7:00 AM",
    duration: "50 min",
    spotsLeft: 3,
    totalSpots: 30,
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1760031670160-4da44e9596d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwc3BpbiUyMGNsYXNzfGVufDF8fHx8MTc2MjUzOTU2MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Morning Flow Yoga",
    instructor: "Emma Thompson",
    time: "8:00 AM",
    duration: "60 min",
    spotsLeft: 12,
    totalSpots: 20,
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1616940779493-6958fbd615fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvfGVufDF8fHx8MTc2MjU0NTI0MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Strength & Sculpt",
    instructor: "Jake Morrison",
    time: "12:00 PM",
    duration: "45 min",
    spotsLeft: 15,
    totalSpots: 25,
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2MjUyNjMzMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Sunset HIIT",
    instructor: "Sarah Chen",
    time: "6:30 PM",
    duration: "45 min",
    spotsLeft: 5,
    totalSpots: 25,
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1758274525958-4a7e209a1e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBlbmVyZ3l8ZW58MXx8fHwxNzYyNjMzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    name: "Evening Cycle",
    instructor: "Marcus Rivera",
    time: "7:30 PM",
    duration: "50 min",
    spotsLeft: 8,
    totalSpots: 30,
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1760031670160-4da44e9596d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwc3BpbiUyMGNsYXNzfGVufDF8fHx8MTc2MjUzOTU2MXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const classTypes = [
  {
    name: "HIIT Cardio",
    vibe: "High-Energy • Intense",
    calories: "600-700 cal",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2xhc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjU0ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Zap
  },
  {
    name: "Cycle",
    vibe: "Rhythmic • Powerful",
    calories: "500-650 cal",
    image: "https://images.unsplash.com/photo-1760031670160-4da44e9596d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwc3BpbiUyMGNsYXNzfGVufDF8fHx8MTc2MjUzOTU2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Flame
  },
  {
    name: "Yoga Flow",
    vibe: "Mindful • Balanced",
    calories: "200-350 cal",
    image: "https://images.unsplash.com/photo-1616940779493-6958fbd615fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvfGVufDF8fHx8MTc2MjU0NTI0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Heart
  },
  {
    name: "Strength",
    vibe: "Focused • Empowering",
    calories: "400-550 cal",
    image: "https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2MjUyNjMzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Dumbbell
  }
];

const transformations = [
  {
    name: "Jessica M.",
    duration: "6 months",
    quote: "PulseHouse changed my life! I've lost 40 pounds and gained so much confidence. The community here is incredible.",
    achievement: "Lost 40 lbs",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "David K.",
    duration: "4 months",
    quote: "From never working out to completing my first marathon. The instructors at PulseHouse pushed me beyond my limits.",
    achievement: "Marathon Finisher",
    image: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI2MzM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Rachel T.",
    duration: "8 months",
    quote: "I came for the workouts, stayed for the family. PulseHouse isn't just a gym, it's a lifestyle.",
    achievement: "100 Class Club",
    image: "https://images.unsplash.com/photo-1761619187897-a38e2fb9b230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzYyNTg5ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const amenities = [
  { icon: Droplet, title: "Luxury Showers", description: "Premium toiletries included" },
  { icon: Coffee, title: "Smoothie Bar", description: "Post-workout fuel" },
  { icon: Star, title: "Towel Service", description: "Fresh towels provided" },
  { icon: Dumbbell, title: "Premium Equipment", description: "State-of-the-art gear" },
  { icon: MapPin, title: "Free Parking", description: "Convenient access" },
  { icon: Award, title: "Elite Instructors", description: "Certified professionals" }
];

const instagramPosts = [
  "https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2xhc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjU0ODgyMnww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1760031670160-4da44e9596d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwc3BpbiUyMGNsYXNzfGVufDF8fHx8MTc2MjUzOTU2MXww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1616940779493-6958fbd615fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvfGVufDF8fHx8MTc2MjU0NTI0MXww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2MjUyNjMzMXww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaW5zdHJ1Y3RvciUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjYzMzU2OXww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1758274525958-4a7e209a1e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBlbmVyZ3l8ZW58MXx8fHwxNzYyNjMzNTcwfDA&ixlib=rb-4.1.0&q=80&w=400"
];

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section with Video Background Simulation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 via-[#6C5CE7]/20 to-[#F9CA24]/20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaW5zdHJ1Y3RvciUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjYzMzU2OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero fitness class"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/80 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Feel Your Pulse.
            <br />
            <span className="text-[#FF6B6B]">Find Your Power.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Austin's Premier Boutique Fitness Studio
          </p>
          <Button 
            className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-12 py-6 text-lg h-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform"
          >
            Book Your First Class FREE
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#6C5CE7] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 mb-3" />
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 800 }}>850+</div>
              <div className="text-lg text-white/90">Active Members</div>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 mb-3" />
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 800 }}>60+</div>
              <div className="text-lg text-white/90">Weekly Classes</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 mb-3" />
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 800 }}>12</div>
              <div className="text-lg text-white/90">Elite Instructors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Classes Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl text-[#2C3E50] mb-3" style={{ fontWeight: 800 }}>
                Upcoming Classes
              </h2>
              <p className="text-lg text-[#2C3E50]/70">Reserve your spot now</p>
            </div>
            <Button variant="outline" className="hidden md:flex border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white">
              View Full Schedule
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses.map((classItem) => (
              <Card key={classItem.id} className="group overflow-hidden hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-[#FF6B6B]">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-[#F9CA24] text-[#2C3E50] border-0">
                      {classItem.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                    {classItem.name}
                  </h3>
                  <p className="text-[#2C3E50]/70 mb-3">with {classItem.instructor}</p>
                  <div className="flex items-center gap-4 text-sm text-[#2C3E50]/70 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {classItem.time}
                    </span>
                    <span>{classItem.duration}</span>
                  </div>
                  
                  {/* Capacity Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#2C3E50]/70">
                        {classItem.spotsLeft} spots left
                      </span>
                      <span className="text-[#2C3E50]/70">
                        {classItem.spotsLeft}/{classItem.totalSpots}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${classItem.spotsLeft < 5 ? 'bg-[#FF6B6B]' : 'bg-[#6C5CE7]'}`}
                        style={{ width: `${(classItem.spotsLeft / classItem.totalSpots) * 100}%` }}
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white">
                    Quick Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Your Vibe - Class Types */}
      <section className="py-20 bg-gradient-to-br from-[#6C5CE7]/10 to-[#FF6B6B]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#2C3E50] mb-4" style={{ fontWeight: 800 }}>
              What's Your Vibe?
            </h2>
            <p className="text-lg text-[#2C3E50]/70">Choose your workout style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer"
                >
                  <ImageWithFallback
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-[#2C3E50]/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <Icon className="w-10 h-10 mb-3 text-[#F9CA24]" />
                    <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>{type.name}</h3>
                    <p className="text-white/80 mb-2">{type.vibe}</p>
                    <p className="text-sm text-[#F9CA24]">{type.calories}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#2C3E50] mb-4" style={{ fontWeight: 800 }}>
              Transformation Stories
            </h2>
            <p className="text-lg text-[#2C3E50]/70">Real members, real results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((story, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-[#FF6B6B] transition-colors">
                <div className="relative h-80">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#F9CA24] text-[#2C3E50] border-0">
                      {story.achievement}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 fill-[#F9CA24] text-[#F9CA24]" />
                    <Star className="w-5 h-5 fill-[#F9CA24] text-[#F9CA24]" />
                    <Star className="w-5 h-5 fill-[#F9CA24] text-[#F9CA24]" />
                    <Star className="w-5 h-5 fill-[#F9CA24] text-[#F9CA24]" />
                    <Star className="w-5 h-5 fill-[#F9CA24] text-[#F9CA24]" />
                  </div>
                  <p className="text-[#2C3E50]/80 mb-4 italic">"{story.quote}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#2C3E50]" style={{ fontWeight: 700 }}>{story.name}</p>
                      <p className="text-sm text-[#2C3E50]/60">{story.duration} member</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Amenities */}
      <section className="py-20 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
              World-Class Amenities
            </h2>
            <p className="text-lg text-white/80">Everything you need for the perfect workout</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-[#FF6B6B] rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1" style={{ fontWeight: 700 }}>{amenity.title}</h3>
                    <p className="text-white/70">{amenity.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gradient-to-br from-[#6C5CE7] to-[#FF6B6B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>
                Take PulseHouse Everywhere
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Book classes, track your progress, and stay connected with our mobile app. Available on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#6C5CE7] hover:bg-white/90 h-14 px-8">
                  <Apple className="w-6 h-6 mr-2" />
                  App Store
                </Button>
                <Button className="bg-white text-[#6C5CE7] hover:bg-white/90 h-14 px-8">
                  <Smartphone className="w-6 h-6 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1671970922029-0430d2ae122c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI1OTA5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mobile app preview"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-[#F9CA24] rounded-full blur-3xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-8 h-8 text-[#FF6B6B]" />
              <h2 className="text-4xl md:text-5xl text-[#2C3E50]" style={{ fontWeight: 800 }}>
                #PulseHouseFam
              </h2>
            </div>
            <p className="text-lg text-[#2C3E50]/70">Join our community on Instagram</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <ImageWithFallback
                  src={post}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-8">
              <Instagram className="w-5 h-5 mr-2" />
              Follow @PulseHouseFitness
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl mb-4" style={{ fontWeight: 800 }}>PulseHouse</h3>
              <p className="text-white/70 mb-6">
                Feel Your Pulse. Find Your Power.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4" style={{ fontWeight: 700 }}>Contact</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>1234 Fitness Ave<br />Austin, TX 78701</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <p>(512) 555-PULSE</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <p>hello@pulsehouse.fit</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4" style={{ fontWeight: 700 }}>Hours</h4>
              <div className="space-y-2 text-white/70">
                <p>Monday - Friday: 5am - 9pm</p>
                <p>Saturday: 7am - 7pm</p>
                <p>Sunday: 8am - 6pm</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2025 PulseHouse Fitness Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
