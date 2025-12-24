import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Instagram, Award, Music, Heart, Calendar } from "lucide-react";

interface Instructor {
  id: number;
  name: string;
  image: string;
  specialty: string[];
  playlistVibe: string;
  yearsTeaching: number;
  bio: string;
  certifications: string[];
  funFacts: string[];
  quote: string;
  instagram: string;
  favoriteSong: string;
  philosophy: string;
  upcomingClasses: { day: string; time: string; class: string }[];
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["HIIT Cardio", "Bootcamp"],
    playlistVibe: "High-Energy EDM & Hip-Hop",
    yearsTeaching: 6,
    bio: "Sarah brings explosive energy and motivational coaching to every class. A former college athlete, she discovered her passion for group fitness after graduating and hasn't looked back.",
    certifications: ["ACE Certified Personal Trainer", "NASM Group Fitness Instructor", "CPR/AED Certified"],
    funFacts: ["Completed 5 marathons", "Coffee addict (3 cups minimum)", "Rescue dog mom to 2 pups"],
    quote: "Your only limit is you. Let's break through it together!",
    instagram: "@sarahfitchen",
    favoriteSong: "Till I Collapse - Eminem",
    philosophy: "I believe fitness should be challenging but fun. Every workout is an opportunity to prove to yourself what you're capable of.",
    upcomingClasses: [
      { day: "Monday", time: "6:00 AM", class: "HIIT Cardio Blast" },
      { day: "Monday", time: "6:30 PM", class: "Sunset HIIT" },
      { day: "Tuesday", time: "6:00 PM", class: "Evening HIIT" }
    ]
  },
  {
    id: 2,
    name: "Marcus Rivera",
    image: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI2MzM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Cycle", "Rhythm Ride"],
    playlistVibe: "Rock Anthems & Power Pop",
    yearsTeaching: 4,
    bio: "Marcus is known for his rhythm-based cycling classes that feel more like a dance party on a bike. His infectious energy keeps riders coming back for more.",
    certifications: ["Spinning Certified", "ACE Group Fitness", "Precision Nutrition Level 1"],
    funFacts: ["Former DJ", "Competes in triathlons", "Can recite every line from The Office"],
    quote: "Ride to the beat. Feel the rhythm. Find your power.",
    instagram: "@marcusrides",
    favoriteSong: "Eye of the Tiger - Survivor",
    philosophy: "Cycling isn't just cardio—it's a mental breakthrough. When you sync movement with music, magic happens.",
    upcomingClasses: [
      { day: "Monday", time: "7:00 AM", class: "Power Cycle" },
      { day: "Monday", time: "7:30 PM", class: "Evening Cycle" },
      { day: "Wednesday", time: "7:00 AM", class: "Rhythm Ride" }
    ]
  },
  {
    id: 3,
    name: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Yoga Flow", "Yoga Sculpt"],
    playlistVibe: "Chill Indie & Acoustic Vibes",
    yearsTeaching: 8,
    bio: "Emma's yoga practice began as a way to manage stress during her corporate career. Now she helps others find that same peace and strength through mindful movement.",
    certifications: ["RYT-500 Yoga Alliance", "Yin Yoga Certified", "Meditation Teacher Training"],
    funFacts: ["Lived in Bali for a year", "Plant-based chef", "Speaks 3 languages"],
    quote: "Yoga isn't about touching your toes. It's about what you learn on the way down.",
    instagram: "@emma_flows",
    favoriteSong: "Breathe Me - Sia",
    philosophy: "True strength comes from balancing effort with ease. In yoga and in life, we learn to find that sweet spot.",
    upcomingClasses: [
      { day: "Monday", time: "8:00 AM", class: "Morning Flow Yoga" },
      { day: "Tuesday", time: "9:00 AM", class: "Vinyasa Flow" },
      { day: "Saturday", time: "9:00 AM", class: "Weekend Yoga Flow" }
    ]
  },
  {
    id: 4,
    name: "Jake Morrison",
    image: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI2MzM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Strength Training", "Core Power"],
    playlistVibe: "Motivational Hip-Hop & Trap",
    yearsTeaching: 5,
    bio: "Jake's military background brings discipline and structure to his strength classes. He's passionate about helping people build not just muscle, but confidence.",
    certifications: ["NSCA-CPT", "Functional Movement Screen", "TRX Suspension Training"],
    funFacts: ["Former Marine", "Powerlifting competitor", "Can do 50 pull-ups straight"],
    quote: "Strong body, strong mind, unstoppable life.",
    instagram: "@jake_gets_strong",
    favoriteSong: "Lose Yourself - Eminem",
    philosophy: "Strength training is the foundation of everything. It teaches you discipline, patience, and what you're truly made of.",
    upcomingClasses: [
      { day: "Monday", time: "12:00 PM", class: "Strength & Sculpt" },
      { day: "Wednesday", time: "6:00 AM", class: "Total Body Blast" },
      { day: "Saturday", time: "8:00 AM", class: "Saturday Sweat" }
    ]
  },
  {
    id: 5,
    name: "Zoe Martinez",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Cycle", "HIIT"],
    playlistVibe: "Latin Beats & Reggaeton",
    yearsTeaching: 3,
    bio: "Zoe brings fiery passion and Latin flavor to her classes. Her unique blend of cycling and HIIT keeps members on their toes and coming back for more.",
    certifications: ["Spinning Certified", "HIIT Specialist", "Sports Nutrition Coach"],
    funFacts: ["Salsa dancer", "Fluent in Spanish", "Marathon runner"],
    quote: "Work hard, sweat harder, smile hardest!",
    instagram: "@zoe_cycles",
    favoriteSong: "Gasolina - Daddy Yankee",
    philosophy: "Fitness should make you feel alive! I bring the party to every workout because when you're having fun, you work harder.",
    upcomingClasses: [
      { day: "Tuesday", time: "6:00 AM", class: "Cycle & Burn" },
      { day: "Thursday", time: "5:00 AM", class: "Sunrise Cycle" },
      { day: "Friday", time: "7:00 AM", class: "Weekend Warrior Cycle" }
    ]
  },
  {
    id: 6,
    name: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI2MzM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["HIIT", "Bootcamp"],
    playlistVibe: "Classic Rock & Alternative",
    yearsTeaching: 7,
    bio: "Alex's classes are known for their creativity and constant evolution. No two workouts are ever the same, keeping members challenged and engaged.",
    certifications: ["NASM-CPT", "Bootcamp Instructor", "Mobility Specialist"],
    funFacts: ["Rock climber", "Played college football", "Homebrews beer"],
    quote: "Change your mindset, change your body, change your life.",
    instagram: "@alex_trains",
    favoriteSong: "Thunderstruck - AC/DC",
    philosophy: "Variety is the spice of fitness. I keep things fresh so your body—and mind—never get bored.",
    upcomingClasses: []
  },
  {
    id: 7,
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Yoga", "Pilates"],
    playlistVibe: "World Music & Ambient",
    yearsTeaching: 9,
    bio: "Priya combines traditional yoga philosophy with modern fitness science. Her classes are a perfect blend of mindfulness and movement.",
    certifications: ["E-RYT 500", "Pilates Mat Certified", "Ayurveda Wellness Coach"],
    funFacts: ["Studied in India", "Certified sound healer", "Vegan cookbook author"],
    quote: "The body achieves what the mind believes.",
    instagram: "@priya_namaste",
    favoriteSong: "Om Namah Shivaya - Krishna Das",
    philosophy: "Yoga is a journey inward. Every pose, every breath is an opportunity to connect with your true self.",
    upcomingClasses: []
  },
  {
    id: 8,
    name: "Chris Anderson",
    image: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI2MzM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Strength", "Functional Training"],
    playlistVibe: "Electronic & House",
    yearsTeaching: 4,
    bio: "Chris focuses on functional movements that translate to real-life strength. His athletic background in basketball informs his dynamic training style.",
    certifications: ["CSCS", "FMS Certified", "USA Weightlifting Level 1"],
    funFacts: ["Former pro basketball player", "Coached high school sports", "Makes his own protein bars"],
    quote: "Train movements, not muscles.",
    instagram: "@chris_functional",
    favoriteSong: "One - Swedish House Mafia",
    philosophy: "Functional fitness prepares you for life. Every exercise should have a purpose beyond aesthetics.",
    upcomingClasses: []
  },
  {
    id: 9,
    name: "Lisa Wang",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Barre", "Pilates"],
    playlistVibe: "Pop & Top 40",
    yearsTeaching: 5,
    bio: "Lisa's background in classical ballet brings grace and precision to her barre and Pilates classes. Expect to shake, sweat, and transform.",
    certifications: ["Barre Above Certified", "STOTT Pilates", "Pre/Post Natal Specialist"],
    funFacts: ["Professional ballerina for 10 years", "Twin mom", "Makes jewelry"],
    quote: "Grace, strength, and a whole lot of shake!",
    instagram: "@lisa_barre",
    favoriteSong: "Levitating - Dua Lipa",
    philosophy: "Small movements create big changes. Precision and control are where true strength is built.",
    upcomingClasses: []
  },
  {
    id: 10,
    name: "Tyler Brooks",
    image: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI2MzM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Boxing", "HIIT"],
    playlistVibe: "Aggressive Rap & Metal",
    yearsTeaching: 6,
    bio: "Tyler's boxing classes are high-energy stress relievers. Expect combinations, cardio, and a full-body burn that leaves you feeling empowered.",
    certifications: ["USA Boxing Coach", "HIIT Certified", "Krav Maga Level 2"],
    funFacts: ["Golden Gloves boxer", "Loves spicy food challenges", "Has 15 tattoos"],
    quote: "Fight for it. You're worth it.",
    instagram: "@tyler_knockout",
    favoriteSong: "Remember the Name - Fort Minor",
    philosophy: "Boxing teaches you to face your fears head-on. Every punch is a statement: I am strong, I am capable.",
    upcomingClasses: []
  },
  {
    id: 11,
    name: "Maya Johnson",
    image: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjYwNjQwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Dance Cardio", "Zumba"],
    playlistVibe: "Dance Pop & Afrobeats",
    yearsTeaching: 4,
    bio: "Maya turns every class into a dance party. Her infectious smile and choreography make cardio feel like pure joy.",
    certifications: ["Zumba Certified", "Dance Fitness Specialist", "Group Fitness Certified"],
    funFacts: ["Backup dancer for music videos", "Teaches kids dance", "Can twerk for 10 minutes straight"],
    quote: "Dance like nobody's watching, sweat like everybody is!",
    instagram: "@maya_dances",
    favoriteSong: "Uptown Funk - Bruno Mars",
    philosophy: "Dance is the most fun way to get fit. When you're smiling and moving, you forget you're working out!",
    upcomingClasses: []
  },
  {
    id: 12,
    name: "Ryan Foster",
    image: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI2MzM1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: ["Rowing", "Endurance"],
    playlistVibe: "Techno & Trance",
    yearsTeaching: 3,
    bio: "Ryan's rowing classes combine cardio and strength for a total-body workout. His calm demeanor and technical expertise help members master the machine.",
    certifications: ["Concept2 Certified", "Endurance Coach", "Sports Performance Specialist"],
    funFacts: ["College rowing champion", "Ultramarathon runner", "Meditates daily"],
    quote: "Embrace the grind. The best view comes after the hardest climb.",
    instagram: "@ryan_rows",
    favoriteSong: "Strobe - deadmau5",
    philosophy: "Endurance is mental. Once you master your mind, your body will follow anywhere.",
    upcomingClasses: []
  }
];

export function Instructors() {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7] to-[#FF6B6B]" />
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaW5zdHJ1Y3RvciUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjYzMzU2OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Instructors hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-4" style={{ fontWeight: 800 }}>
            Meet Your Motivators
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            12 elite instructors committed to your transformation
          </p>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {instructors.map(instructor => (
              <Card 
                key={instructor.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#FF6B6B]"
                onClick={() => setSelectedInstructor(instructor)}
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>
                      {instructor.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {instructor.specialty.map((spec, idx) => (
                        <Badge key={idx} className="bg-[#FF6B6B] text-white border-0 text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90 mb-2">
                      <Music className="w-4 h-4" />
                      <span>{instructor.playlistVibe}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <Award className="w-4 h-4" />
                      <span>{instructor.yearsTeaching} years teaching</span>
                    </div>
                  </div>

                  {/* Click to expand hint */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                    Click for details
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Detail Modal */}
      <Dialog open={selectedInstructor !== null} onOpenChange={() => setSelectedInstructor(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedInstructor && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-3xl text-[#2C3E50]" style={{ fontWeight: 800 }}>
                  {selectedInstructor.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* Left Column - Image and Quick Stats */}
                <div>
                  <div className="relative h-96 rounded-xl overflow-hidden mb-6">
                    <ImageWithFallback
                      src={selectedInstructor.image}
                      alt={selectedInstructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-[#2C3E50]/70 mb-1">Specialty</div>
                        <div className="flex flex-wrap gap-1">
                          {selectedInstructor.specialty.map((spec, idx) => (
                            <Badge key={idx} className="bg-[#6C5CE7] text-white">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Music className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-[#2C3E50]/70 mb-1">Playlist Vibe</div>
                        <div className="text-[#2C3E50]">{selectedInstructor.playlistVibe}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Music className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-[#2C3E50]/70 mb-1">Favorite Song</div>
                        <div className="text-[#2C3E50]">{selectedInstructor.favoriteSong}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Instagram className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-[#2C3E50]/70 mb-1">Instagram</div>
                        <div className="text-[#6C5CE7]">{selectedInstructor.instagram}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>About</h4>
                    <p className="text-[#2C3E50]/80">{selectedInstructor.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-lg text-[#2C3E50] mb-3" style={{ fontWeight: 700 }}>Certifications</h4>
                    <ul className="space-y-2">
                      {selectedInstructor.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#FF6B6B] mt-2 flex-shrink-0" />
                          <span className="text-[#2C3E50]/80">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg text-[#2C3E50] mb-3" style={{ fontWeight: 700 }}>Fun Facts</h4>
                    <ul className="space-y-2">
                      {selectedInstructor.funFacts.map((fact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-[#F9CA24] mt-0.5 flex-shrink-0" />
                          <span className="text-[#2C3E50]/80">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#6C5CE7]/10 rounded-xl p-4">
                    <h4 className="text-lg text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                      "Why I Love PulseHouse"
                    </h4>
                    <p className="text-[#2C3E50]/80 italic">"{selectedInstructor.quote}"</p>
                  </div>

                  <div className="bg-[#FF6B6B]/10 rounded-xl p-4">
                    <h4 className="text-lg text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                      Teaching Philosophy
                    </h4>
                    <p className="text-[#2C3E50]/80">{selectedInstructor.philosophy}</p>
                  </div>

                  {selectedInstructor.upcomingClasses.length > 0 && (
                    <div>
                      <h4 className="text-lg text-[#2C3E50] mb-3" style={{ fontWeight: 700 }}>
                        Upcoming Classes
                      </h4>
                      <div className="space-y-2">
                        {selectedInstructor.upcomingClasses.map((classInfo, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#2C3E50]/10">
                            <Calendar className="w-5 h-5 text-[#6C5CE7]" />
                            <div className="flex-grow">
                              <div className="text-[#2C3E50]" style={{ fontWeight: 600 }}>
                                {classInfo.class}
                              </div>
                              <div className="text-sm text-[#2C3E50]/70">
                                {classInfo.day} at {classInfo.time}
                              </div>
                            </div>
                            <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white">
                              Book
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-grow bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow on Instagram
                </Button>
                <Button variant="outline" className="flex-grow border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white">
                  View All Classes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2C3E50] to-[#6C5CE7]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>
            Ready to Find Your Instructor?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Try different instructors to find your perfect match. Your first class is FREE!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-8 py-6 text-lg h-auto">
              Book Your Free Class
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#6C5CE7] px-8 py-6 text-lg h-auto">
              View Class Schedule
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
