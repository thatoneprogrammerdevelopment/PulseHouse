import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import {
  Clock,
  Calendar,
  Users,
  Flame,
  Music,
  Dumbbell,
  Heart,
  Star,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Info,
  ThumbsUp,
  Share2
} from "lucide-react";

interface ClassDetails {
  id: number;
  name: string;
  tagline: string;
  instructor: {
    name: string;
    image: string;
    bio: string;
  };
  image: string;
  date: string;
  time: string;
  duration: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  equipment: string[];
  calorieRange: string;
  playlistVibe: string;
  spotsLeft: number;
  totalSpots: number;
  rating: number;
  totalReviews: number;
  room: string;
}

const mockClass: ClassDetails = {
  id: 1,
  name: "HIIT Cardio Blast",
  tagline: "Maximum effort. Maximum results.",
  instructor: {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Sarah brings explosive energy and motivational coaching to every class. With 6 years of experience, she'll push you to your limits and beyond."
  },
  image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2xhc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjU0ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080",
  date: "Monday, November 11",
  time: "6:00 AM",
  duration: 45,
  difficulty: "Advanced",
  description: "Get ready for an intense, fat-burning workout that combines cardio bursts with strength intervals. This 45-minute class will challenge every muscle group while keeping your heart rate in the optimal zone. Expect jump squats, burpees, mountain climbers, and more—all set to an energizing playlist that'll keep you motivated through every rep.",
  equipment: ["Weights", "Resistance Bands", "Heart Rate Monitor (Optional)"],
  calorieRange: "600-700 cal",
  playlistVibe: "High-Energy EDM & Hip-Hop",
  spotsLeft: 7,
  totalSpots: 25,
  rating: 4.9,
  totalReviews: 342,
  room: "Studio A"
};

const reviews = [
  { name: "Jessica M.", rating: 5, comment: "Sarah is AMAZING! This class kicked my butt in the best way. The playlist was 🔥", date: "2 days ago", helpfulCount: 24 },
  { name: "David K.", rating: 5, comment: "Best HIIT class in Austin. Period. Come ready to sweat!", date: "1 week ago", helpfulCount: 18 },
  { name: "Rachel T.", rating: 5, comment: "I burned 678 calories! Sarah's energy is contagious. Love this class!", date: "2 weeks ago", helpfulCount: 31 },
  { name: "Mike L.", rating: 4, comment: "Tough but worth it. Definitely advanced level—be prepared!", date: "3 weeks ago", helpfulCount: 12 }
];

const similarClasses = [
  { name: "Sunset HIIT", instructor: "Sarah Chen", time: "6:30 PM", day: "Monday", image: "https://images.unsplash.com/photo-1758274525958-4a7e209a1e0c?w=400" },
  { name: "Total Body Blast", instructor: "Jake Morrison", time: "6:00 AM", day: "Wednesday", image: "https://images.unsplash.com/photo-1669807164466-10a6584a067e?w=400" },
  { name: "Power Hour HIIT", instructor: "Sarah Chen", time: "6:00 AM", day: "Thursday", image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400" }
];

const spots = Array.from({ length: 25 }, (_, i) => ({
  number: i + 1,
  available: i >= 18 // Last 7 spots are available
}));

export function BookingInterface() {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("unlimited");
  const [specialNotes, setSpecialNotes] = useState("");

  const handleReserve = () => {
    setShowCheckout(false);
    setShowConfirmation(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-[#F9CA24]";
      case "Advanced": return "bg-[#FF6B6B]";
      default: return "bg-gray-500";
    }
  };

  const getDifficultyDescription = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "New to fitness";
      case "Intermediate": return "Regular exerciser";
      case "Advanced": return "Bring your A-game";
      default: return "";
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Image */}
      <section className="relative h-96">
        <ImageWithFallback
          src={mockClass.image}
          alt={mockClass.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-[#2C3E50]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Badge className={`${getDifficultyColor(mockClass.difficulty)} text-white mb-3`}>
              {mockClass.difficulty}
            </Badge>
            <h1 className="text-5xl md:text-6xl text-white mb-3" style={{ fontWeight: 800 }}>
              {mockClass.name}
            </h1>
            <p className="text-xl text-white/90">{mockClass.tagline}</p>
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-[#FF6B6B]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#2C3E50]/70">Date</div>
                        <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#6C5CE7]/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#6C5CE7]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#2C3E50]/70">Time</div>
                        <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#F9CA24]/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#F9CA24]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#2C3E50]/70">Duration</div>
                        <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.duration} min</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-[#2C3E50]/70">Room</div>
                        <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.room}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instructor Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2C3E50]">Your Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-6">
                    <ImageWithFallback
                      src={mockClass.instructor.image}
                      alt={mockClass.instructor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#6C5CE7]"
                    />
                    <div className="flex-grow">
                      <h3 className="text-2xl text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                        {mockClass.instructor.name}
                      </h3>
                      <p className="text-[#2C3E50]/80">{mockClass.instructor.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2C3E50]">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-[#2C3E50]/80 leading-relaxed">{mockClass.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Flame className="w-6 h-6 text-[#FF6B6B] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-[#2C3E50]/70 mb-1">Calorie Burn</div>
                        <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.calorieRange}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Music className="w-6 h-6 text-[#6C5CE7] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-[#2C3E50]/70 mb-1">Playlist Vibe</div>
                        <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.playlistVibe}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-[#F9CA24] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-[#2C3E50]/70 mb-1">Difficulty</div>
                        <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>
                          {mockClass.difficulty} - {getDifficultyDescription(mockClass.difficulty)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg text-[#2C3E50] mb-3" style={{ fontWeight: 700 }}>
                      Equipment Needed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {mockClass.equipment.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#6C5CE7] text-[#6C5CE7]">
                          <Dumbbell className="w-4 h-4 mr-1" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Bring */}
              <Card className="bg-[#F9CA24]/10 border-[#F9CA24]">
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <Info className="w-6 h-6 text-[#2C3E50] flex-shrink-0" />
                    <div>
                      <h4 className="text-lg text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                        What to Bring
                      </h4>
                      <ul className="space-y-1 text-[#2C3E50]/80">
                        <li>• Water bottle (stay hydrated!)</li>
                        <li>• Athletic shoes</li>
                        <li>• Positive attitude and energy</li>
                        <li>• Towel (complimentary for members)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cancellation Policy */}
              <Card className="bg-[#FF6B6B]/10 border-[#FF6B6B]">
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-[#FF6B6B] flex-shrink-0" />
                    <div>
                      <h4 className="text-lg text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                        Cancellation Policy
                      </h4>
                      <p className="text-[#2C3E50]/80 mb-3">
                        Cancel up to 4 hours before class starts to avoid losing your class credit. 
                        Running late? We'll hold your spot for 5 minutes after class begins.
                      </p>
                      <p className="text-sm text-[#2C3E50]/70">
                        Late cancellations or no-shows will result in loss of class credit.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Spot Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2C3E50]">Select Your Spot (Optional)</CardTitle>
                  <p className="text-sm text-[#2C3E50]/70 mt-2">
                    Choose your preferred spot in the studio or we'll assign one for you
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-center py-3 bg-gray-100 rounded-lg mb-4">
                      <div className="text-sm text-[#2C3E50]/70">FRONT (Mirrors & Instructor)</div>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {spots.map(spot => (
                        <button
                          key={spot.number}
                          onClick={() => spot.available && setSelectedSpot(spot.number)}
                          disabled={!spot.available}
                          className={`
                            aspect-square rounded-lg border-2 flex items-center justify-center text-sm transition-all
                            ${spot.available 
                              ? selectedSpot === spot.number
                                ? 'bg-[#FF6B6B] border-[#FF6B6B] text-white shadow-lg scale-105'
                                : 'bg-white border-gray-300 hover:border-[#6C5CE7] hover:shadow-md'
                              : 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed'
                            }
                          `}
                        >
                          {spot.number}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-6 mt-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded" />
                        <span className="text-[#2C3E50]/70">Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-200 border-2 border-gray-300 rounded" />
                        <span className="text-[#2C3E50]/70">Taken</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#FF6B6B] border-2 border-[#FF6B6B] rounded" />
                        <span className="text-[#2C3E50]/70">Selected</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-[#2C3E50]">Reviews</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} className="w-5 h-5 fill-[#F9CA24] text-[#F9CA24]" />
                        ))}
                      </div>
                      <span className="text-[#2C3E50]" style={{ fontWeight: 700 }}>
                        {mockClass.rating} ({mockClass.totalReviews} reviews)
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review, idx) => (
                    <div key={idx}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#2C3E50]" style={{ fontWeight: 700 }}>{review.name}</span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map(star => (
                                <Star 
                                  key={star} 
                                  className={`w-4 h-4 ${star <= review.rating ? 'fill-[#F9CA24] text-[#F9CA24]' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-[#2C3E50]/80 mb-2">{review.comment}</p>
                          <div className="flex items-center gap-4 text-sm text-[#2C3E50]/60">
                            <span>{review.date}</span>
                            <button className="flex items-center gap-1 hover:text-[#6C5CE7]">
                              <ThumbsUp className="w-4 h-4" />
                              Helpful ({review.helpfulCount})
                            </button>
                          </div>
                        </div>
                      </div>
                      {idx < reviews.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Similar Classes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2C3E50]">Similar Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {similarClasses.map((classItem, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                          <ImageWithFallback
                            src={classItem.image}
                            alt={classItem.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-[#2C3E50] mb-1" style={{ fontWeight: 700 }}>
                          {classItem.name}
                        </h4>
                        <p className="text-sm text-[#2C3E50]/70">{classItem.instructor}</p>
                        <p className="text-sm text-[#2C3E50]/70">{classItem.day} • {classItem.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 border-2 border-[#6C5CE7]">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#2C3E50]/70">Spots Remaining</span>
                      <span className="text-2xl text-[#FF6B6B]" style={{ fontWeight: 800 }}>
                        {mockClass.spotsLeft}/{mockClass.totalSpots}
                      </span>
                    </div>
                    <Progress value={(mockClass.spotsLeft / mockClass.totalSpots) * 100} className="h-3" />
                    {mockClass.spotsLeft < 5 && (
                      <p className="text-sm text-[#FF6B6B] mt-2">⚡ Almost full! Book now to secure your spot</p>
                    )}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[#2C3E50]/70">Date</span>
                      <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#2C3E50]/70">Time</span>
                      <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#2C3E50]/70">Duration</span>
                      <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.duration} min</span>
                    </div>
                    {selectedSpot && (
                      <div className="flex justify-between">
                        <span className="text-[#2C3E50]/70">Spot</span>
                        <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>#{selectedSpot}</span>
                      </div>
                    )}
                  </div>

                  <Button 
                    className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white py-6 text-lg mb-3"
                    onClick={() => setShowCheckout(true)}
                  >
                    Reserve Your Spot
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Add to Favorites
                  </Button>

                  <Separator className="my-6" />

                  <div className="space-y-3 text-sm text-[#2C3E50]/70">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Free cancellation up to 4 hours before</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Running late? We hold spots for 5 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Premium equipment provided</span>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-[#6C5CE7]"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share with Friends
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-[#2C3E50]">Complete Your Booking</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Class Summary */}
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h4 className="text-lg text-[#2C3E50] mb-3" style={{ fontWeight: 700 }}>
                  Class Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#2C3E50]/70">Class</span>
                    <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2C3E50]/70">Instructor</span>
                    <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.instructor.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2C3E50]/70">Date & Time</span>
                    <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.date} at {mockClass.time}</span>
                  </div>
                  {selectedSpot && (
                    <div className="flex justify-between">
                      <span className="text-[#2C3E50]/70">Spot</span>
                      <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>#{selectedSpot}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <div>
              <Label htmlFor="payment-method" className="text-base mb-3 block">
                How would you like to pay?
              </Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger id="payment-method">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unlimited">Use Unlimited Membership</SelectItem>
                  <SelectItem value="class-pack">Use Class Pack (9 remaining)</SelectItem>
                  <SelectItem value="drop-in">Drop-In ($28)</SelectItem>
                  <SelectItem value="guest-pass">Guest Pass</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Guest Pass Option */}
            <Card className="bg-[#6C5CE7]/10 border-[#6C5CE7]">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#6C5CE7] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#2C3E50] mb-1" style={{ fontWeight: 700 }}>
                      Bring a Friend?
                    </h4>
                    <p className="text-sm text-[#2C3E50]/70">
                      Unlimited members can bring a guest 2x per month. You have 2 guest passes available.
                    </p>
                    <Button variant="link" className="text-[#6C5CE7] p-0 h-auto mt-2">
                      Add a guest to this booking
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Notes */}
            <div>
              <Label htmlFor="notes" className="text-base mb-3 block">
                Special Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                placeholder="Any injuries, first time taking this class, equipment preferences, etc."
                rows={3}
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowCheckout(false)}
              >
                Back to Class
              </Button>
              <Button
                className="flex-1 bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white"
                onClick={handleReserve}
              >
                Confirm Reservation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-lg">
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl text-[#2C3E50] mb-3" style={{ fontWeight: 800 }}>
              You're All Set!
            </h2>
            <p className="text-lg text-[#2C3E50]/70 mb-6">
              Your spot in {mockClass.name} is reserved
            </p>

            <Card className="bg-gray-50 mb-6">
              <CardContent className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#2C3E50]/70">Class</span>
                    <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2C3E50]/70">Date & Time</span>
                    <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.date} at {mockClass.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2C3E50]/70">Location</span>
                    <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>{mockClass.room}</span>
                  </div>
                  {selectedSpot && (
                    <div className="flex justify-between">
                      <span className="text-[#2C3E50]/70">Your Spot</span>
                      <span className="text-[#2C3E50]" style={{ fontWeight: 600 }}>#{selectedSpot}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3 mb-6">
              <Button className="w-full bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white">
                <Calendar className="w-5 h-5 mr-2" />
                Add to Calendar
              </Button>
              <Button variant="outline" className="w-full">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>

            <p className="text-sm text-[#2C3E50]/60">
              A confirmation email has been sent to your inbox
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
