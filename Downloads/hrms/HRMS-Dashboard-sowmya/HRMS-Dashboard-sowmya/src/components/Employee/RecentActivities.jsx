import React from "react";
import { Award, User, Building, CheckCircle, Clock, Cake, PartyPopper, Calendar, Gift, Briefcase, Users, Bell } from "lucide-react";

const getActivityIcon = (type) => {
  switch (type) {
    case "achievement":
      return <Award className="w-4 h-4 text-[#4CAF50]" />;
    case "responsibility":
      return <User className="w-4 h-4 text-[#05A7CC]" />;
    case "project":
      return <Building className="w-4 h-4 text-[#ef5226]" />;
    case "training":
      return <CheckCircle className="w-4 h-4 text-[#9C27B0]" />;
    case "birthday":
      return <Cake className="w-4 h-4 text-[#FF9800]" />;
    case "anniversary":
      return <Gift className="w-4 h-4 text-[#9C27B0]" />;
    case "holiday":
      return <Calendar className="w-4 h-4 text-[#2196F3]" />;
    case "work_anniversary":
      return <Briefcase className="w-4 h-4 text-[#673AB7]" />;
    case "new_hire":
      return <Users className="w-4 h-4 text-[#00BCD4]" />;
    case "workplace_update":
      return <Bell className="w-4 h-4 text-[#FF5722]" />;
    case "celebration":
      return <PartyPopper className="w-4 h-4 text-[#E91E63]" />;
    default:
      return <Clock className="w-4 h-4 text-[#666666]" />;
  }
};

export const RecentActivities = ({ activities }) => (
  <div className="neu-card p-8 rounded-3xl">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#333333] mb-2">Announcements</h3>
      {/* <p className="text-[#666666]">Latest achievements and activities</p> */}
    </div>

    <div className="space-y-3 max-h-[430px] overflow-y-auto pr-2">
      {activities.slice(0, 6).map((activity, index) => (
        <div key={index} className="neu-small p-4 rounded-2xl">
          <div className="flex items-start space-x-3">
            <div className="mt-1">{getActivityIcon(activity.type)}</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#333333]">
                {activity.type === 'birthday' 
                  ? `🎂 ${activity.name}'s Birthday!` 
                  : activity.type === 'anniversary'
                  ? `🎉 ${activity.name}'s ${activity.years} Year Anniversary!`
                  : activity.type === 'holiday'
                  ? `🎄 ${activity.name} (${activity.date})`
                  : activity.type === 'work_anniversary'
                  ? `🏆 ${activity.name} - ${activity.years} Years at Company`
                  : activity.type === 'new_hire'
                  ? `👋 Welcome ${activity.name} to ${activity.team}!`
                  : activity.type === 'workplace_update'
                  ? `📢 ${activity.title}`
                  : activity.type === 'celebration'
                  ? `🎊 ${activity.event}`
                  : activity.activity}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-[#666666]">
                  {new Date(activity.date).toLocaleDateString()}
                </p>
                {(activity.type === 'birthday' || activity.type === 'anniversary' || activity.type === 'work_anniversary') && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.type === 'birthday' ? 'bg-amber-100 text-amber-800' :
                    activity.type === 'anniversary' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {activity.department || activity.team}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* <button className="w-full neu-button p-3 rounded-2xl mt-4 hover:text-[#05A7CC] transition-colors">
      View All Activities
    </button> */}
  </div>
);
