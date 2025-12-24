import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar, Clock, Users, Heart, Filter } from "lucide-react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

interface ClassSession {
  id: number;
  name: string;
  instructor: string;
  instructorImage: string;
  time: string;
  duration: number;
  spotsLeft: number;
  totalSpots: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  type: string;
  room: string;
  day: string;
}

const mockClasses: ClassSession[] = [
  // Monday
  { id: 1, name: "HIIT Cardio Blast", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "6:00 AM", duration: 45, spotsLeft: 7, totalSpots: 25, difficulty: "Advanced", type: "HIIT", room: "Studio A", day: "Monday" },
  { id: 2, name: "Power Cycle", instructor: "Marcus Rivera", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "7:00 AM", duration: 50, spotsLeft: 3, totalSpots: 30, difficulty: "Intermediate", type: "Cycle", room: "Cycle Studio", day: "Monday" },
  { id: 3, name: "Morning Flow Yoga", instructor: "Emma Thompson", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "8:00 AM", duration: 60, spotsLeft: 12, totalSpots: 20, difficulty: "Beginner", type: "Yoga", room: "Studio B", day: "Monday" },
  { id: 4, name: "Strength & Sculpt", instructor: "Jake Morrison", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "12:00 PM", duration: 45, spotsLeft: 15, totalSpots: 25, difficulty: "Intermediate", type: "Strength", room: "Studio A", day: "Monday" },
  { id: 5, name: "Sunset HIIT", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "6:30 PM", duration: 45, spotsLeft: 5, totalSpots: 25, difficulty: "Advanced", type: "HIIT", room: "Studio A", day: "Monday" },
  { id: 6, name: "Evening Cycle", instructor: "Marcus Rivera", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "7:30 PM", duration: 50, spotsLeft: 8, totalSpots: 30, difficulty: "Intermediate", type: "Cycle", room: "Cycle Studio", day: "Monday" },
  
  // Tuesday
  { id: 7, name: "Early Bird HIIT", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "5:00 AM", duration: 45, spotsLeft: 0, totalSpots: 25, difficulty: "Advanced", type: "HIIT", room: "Studio A", day: "Tuesday" },
  { id: 8, name: "Cycle & Burn", instructor: "Zoe Martinez", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "6:00 AM", duration: 50, spotsLeft: 10, totalSpots: 30, difficulty: "Intermediate", type: "Cycle", room: "Cycle Studio", day: "Tuesday" },
  { id: 9, name: "Vinyasa Flow", instructor: "Emma Thompson", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "9:00 AM", duration: 60, spotsLeft: 8, totalSpots: 20, difficulty: "Intermediate", type: "Yoga", room: "Studio B", day: "Tuesday" },
  { id: 10, name: "Core Power", instructor: "Jake Morrison", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "12:00 PM", duration: 30, spotsLeft: 14, totalSpots: 25, difficulty: "Beginner", type: "Strength", room: "Studio A", day: "Tuesday" },
  { id: 11, name: "Evening HIIT", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "6:00 PM", duration: 45, spotsLeft: 2, totalSpots: 25, difficulty: "Advanced", type: "HIIT", room: "Studio A", day: "Tuesday" },
  
  // Wednesday
  { id: 12, name: "Total Body Blast", instructor: "Jake Morrison", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "6:00 AM", duration: 45, spotsLeft: 11, totalSpots: 25, difficulty: "Intermediate", type: "Strength", room: "Studio A", day: "Wednesday" },
  { id: 13, name: "Rhythm Ride", instructor: "Marcus Rivera", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "7:00 AM", duration: 50, spotsLeft: 5, totalSpots: 30, difficulty: "Intermediate", type: "Cycle", room: "Cycle Studio", day: "Wednesday" },
  { id: 14, name: "Yoga Sculpt", instructor: "Emma Thompson", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "10:00 AM", duration: 60, spotsLeft: 15, totalSpots: 20, difficulty: "Intermediate", type: "Yoga", room: "Studio B", day: "Wednesday" },
  { id: 15, name: "Midday HIIT", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "12:00 PM", duration: 45, spotsLeft: 9, totalSpots: 25, difficulty: "Advanced", type: "HIIT", room: "Studio A", day: "Wednesday" },
  
  // Thursday
  { id: 16, name: "Sunrise Cycle", instructor: "Zoe Martinez", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "5:00 AM", duration: 50, spotsLeft: 12, totalSpots: 30, difficulty: "Beginner", type: "Cycle", room: "Cycle Studio", day: "Thursday" },
  { id: 17, name: "Power Hour HIIT", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "6:00 AM", duration: 60, spotsLeft: 4, totalSpots: 25, difficulty: "Advanced", type: "HIIT", room: "Studio A", day: "Thursday" },
  { id: 18, name: "Gentle Flow", instructor: "Emma Thompson", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "8:00 AM", duration: 60, spotsLeft: 18, totalSpots: 20, difficulty: "Beginner", type: "Yoga", room: "Studio B", day: "Thursday" },
  
  // Friday
  { id: 19, name: "Friday HIIT Party", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "6:00 AM", duration: 45, spotsLeft: 1, totalSpots: 25, difficulty: "Advanced", type: "HIIT", room: "Studio A", day: "Friday" },
  { id: 20, name: "Weekend Warrior Cycle", instructor: "Marcus Rivera", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "7:00 AM", duration: 50, spotsLeft: 6, totalSpots: 30, difficulty: "Intermediate", type: "Cycle", room: "Cycle Studio", day: "Friday" },
  
  // Saturday
  { id: 21, name: "Saturday Sweat", instructor: "Jake Morrison", instructorImage: "https://images.unsplash.com/photo-1734191321941-08c5ff82c3ef?w=100", time: "8:00 AM", duration: 45, spotsLeft: 10, totalSpots: 25, difficulty: "Intermediate", type: "Strength", room: "Studio A", day: "Saturday" },
  { id: 22, name: "Weekend Yoga Flow", instructor: "Emma Thompson", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "9:00 AM", duration: 60, spotsLeft: 13, totalSpots: 20, difficulty: "Beginner", type: "Yoga", room: "Studio B", day: "Saturday" },
  
  // Sunday
  { id: 23, name: "Sunday Reset Yoga", instructor: "Emma Thompson", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "10:00 AM", duration: 60, spotsLeft: 16, totalSpots: 20, difficulty: "Beginner", type: "Yoga", room: "Studio B", day: "Sunday" },
  { id: 24, name: "Sunday Funday HIIT", instructor: "Sarah Chen", instructorImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=100", time: "4:00 PM", duration: 45, spotsLeft: 11, totalSpots: 25, difficulty: "Intermediate", type: "HIIT", room: "Studio A", day: "Sunday" },
];

export function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [filterInstructor, setFilterInstructor] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const instructors = Array.from(new Set(mockClasses.map(c => c.instructor)));

  const filteredClasses = mockClasses.filter(classItem => {
    if (viewMode === "list" && classItem.day !== selectedDay) return false;
    if (filterType !== "all" && classItem.type !== filterType) return false;
    if (filterDifficulty !== "all" && classItem.difficulty !== filterDifficulty) return false;
    if (filterInstructor !== "all" && classItem.instructor !== filterInstructor) return false;
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-[#F9CA24]";
      case "Advanced": return "bg-[#FF6B6B]";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#6C5CE7] to-[#FF6B6B] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl text-white mb-4" style={{ fontWeight: 800 }}>
            Class Schedule
          </h1>
          <p className="text-xl text-white/90">Find your perfect class time</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#2C3E50]" />
              <span className="text-[#2C3E50]" style={{ fontWeight: 700 }}>Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Class Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="HIIT">HIIT Cardio</SelectItem>
                  <SelectItem value="Cycle">Cycle</SelectItem>
                  <SelectItem value="Yoga">Yoga</SelectItem>
                  <SelectItem value="Strength">Strength</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterInstructor} onValueChange={setFilterInstructor}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Instructor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Instructors</SelectItem>
                  {instructors.map(instructor => (
                    <SelectItem key={instructor} value={instructor}>{instructor}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex gap-2 ml-auto">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-[#FF6B6B] hover:bg-[#FF6B6B]/90" : ""}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-[#FF6B6B] hover:bg-[#FF6B6B]/90" : ""}
                >
                  List
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day Selector for List View */}
      {viewMode === "list" && (
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {DAYS.map(day => (
                <Button
                  key={day}
                  variant={selectedDay === day ? "default" : "outline"}
                  onClick={() => setSelectedDay(day)}
                  className={`whitespace-nowrap ${selectedDay === day ? 'bg-[#6C5CE7] hover:bg-[#6C5CE7]/90' : ''}`}
                >
                  {day}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Class Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {viewMode === "grid" ? (
            // Grid View - Weekly Calendar
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-3xl text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                  Weekly Schedule
                </h2>
                <p className="text-[#2C3E50]/70">
                  Showing {filteredClasses.length} classes
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                {DAYS.map(day => {
                  const dayClasses = filteredClasses.filter(c => c.day === day);
                  const isToday = day === "Monday"; // Mock today as Monday
                  
                  return (
                    <div key={day} className={`${isToday ? 'ring-2 ring-[#FF6B6B]' : ''} rounded-lg`}>
                      <div className={`p-3 text-center ${isToday ? 'bg-[#FF6B6B] text-white' : 'bg-white text-[#2C3E50]'} border-b`}>
                        <div className="text-sm uppercase tracking-wide mb-1">{day.slice(0, 3)}</div>
                        {isToday && <Badge className="bg-[#F9CA24] text-[#2C3E50] text-xs">Today</Badge>}
                      </div>
                      <div className="space-y-2 p-2 bg-white/50">
                        {dayClasses.length === 0 ? (
                          <p className="text-center text-[#2C3E50]/50 text-sm py-4">No classes</p>
                        ) : (
                          dayClasses.map(classItem => (
                            <Card key={classItem.id} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#6C5CE7]">
                              <CardContent className="p-3">
                                <div className="text-sm text-[#2C3E50]/70 mb-1">{classItem.time}</div>
                                <div className="text-sm mb-2" style={{ fontWeight: 700 }}>{classItem.name}</div>
                                <div className="flex items-center gap-2 mb-2">
                                  <ImageWithFallback
                                    src={classItem.instructorImage}
                                    alt={classItem.instructor}
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="text-xs text-[#2C3E50]/70">{classItem.instructor}</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                  <Badge className={`${getDifficultyColor(classItem.difficulty)} text-white text-xs`}>
                                    {classItem.difficulty}
                                  </Badge>
                                  <span className={`${classItem.spotsLeft === 0 ? 'text-[#FF6B6B]' : classItem.spotsLeft < 5 ? 'text-[#F9CA24]' : 'text-green-600'}`}>
                                    {classItem.spotsLeft === 0 ? 'Full' : `${classItem.spotsLeft} left`}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // List View - Single Day
            <div>
              <div className="mb-8">
                <h2 className="text-3xl text-[#2C3E50] mb-2" style={{ fontWeight: 700 }}>
                  {selectedDay} Classes
                </h2>
                <p className="text-[#2C3E50]/70">
                  {filteredClasses.length} classes available
                </p>
              </div>

              <div className="space-y-4">
                {filteredClasses.length === 0 ? (
                  <Card className="p-12 text-center">
                    <Calendar className="w-16 h-16 mx-auto mb-4 text-[#2C3E50]/30" />
                    <p className="text-xl text-[#2C3E50]/70">No classes match your filters</p>
                  </Card>
                ) : (
                  filteredClasses.map(classItem => (
                    <Card key={classItem.id} className="group hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FF6B6B]">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Instructor Photo */}
                          <div className="flex-shrink-0">
                            <ImageWithFallback
                              src={classItem.instructorImage}
                              alt={classItem.instructor}
                              className="w-24 h-24 rounded-full object-cover border-4 border-[#6C5CE7]"
                            />
                          </div>

                          {/* Class Details */}
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                              <div>
                                <h3 className="text-2xl text-[#2C3E50] mb-1" style={{ fontWeight: 700 }}>
                                  {classItem.name}
                                </h3>
                                <p className="text-[#2C3E50]/70">with {classItem.instructor}</p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                className="text-[#FF6B6B] hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/10"
                              >
                                <Heart className="w-6 h-6" />
                              </Button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div className="flex items-center gap-2 text-[#2C3E50]/70">
                                <Clock className="w-5 h-5" />
                                <div>
                                  <div className="text-xs">Time</div>
                                  <div className="text-sm" style={{ fontWeight: 600 }}>{classItem.time}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-[#2C3E50]/70">
                                <Calendar className="w-5 h-5" />
                                <div>
                                  <div className="text-xs">Duration</div>
                                  <div className="text-sm" style={{ fontWeight: 600 }}>{classItem.duration} min</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-[#2C3E50]/70">
                                <Users className="w-5 h-5" />
                                <div>
                                  <div className="text-xs">Room</div>
                                  <div className="text-sm" style={{ fontWeight: 600 }}>{classItem.room}</div>
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-[#2C3E50]/70 mb-1">Level</div>
                                <Badge className={`${getDifficultyColor(classItem.difficulty)} text-white`}>
                                  {classItem.difficulty}
                                </Badge>
                              </div>
                            </div>

                            {/* Capacity Bar */}
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-[#2C3E50]/70">
                                  {classItem.spotsLeft === 0 ? 'Class Full - Waitlist Available' : `${classItem.spotsLeft} spots remaining`}
                                </span>
                                <span className="text-[#2C3E50]/70">
                                  {classItem.totalSpots - classItem.spotsLeft}/{classItem.totalSpots} booked
                                </span>
                              </div>
                              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full transition-all ${
                                    classItem.spotsLeft === 0 ? 'bg-[#FF6B6B]' : 
                                    classItem.spotsLeft < 5 ? 'bg-[#F9CA24]' : 
                                    'bg-[#6C5CE7]'
                                  }`}
                                  style={{ width: `${((classItem.totalSpots - classItem.spotsLeft) / classItem.totalSpots) * 100}%` }}
                                />
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                              {classItem.spotsLeft === 0 ? (
                                <Button className="bg-[#F9CA24] hover:bg-[#F9CA24]/90 text-[#2C3E50] flex-grow md:flex-grow-0">
                                  Join Waitlist
                                </Button>
                              ) : (
                                <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white flex-grow md:flex-grow-0">
                                  Book Now
                                </Button>
                              )}
                              <Button variant="outline" className="border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white">
                                Class Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Calendar Sync CTA */}
          <div className="mt-12 bg-gradient-to-r from-[#6C5CE7] to-[#FF6B6B] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>
              Never Miss a Class
            </h3>
            <p className="mb-6 text-white/90">
              Sync your favorite classes to Google Calendar or Apple Calendar
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-white text-[#6C5CE7] hover:bg-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                Sync to Google Calendar
              </Button>
              <Button className="bg-white text-[#6C5CE7] hover:bg-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                Sync to Apple Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
