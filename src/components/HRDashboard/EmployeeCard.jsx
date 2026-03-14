import { Eye, Edit, Trash2, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-[#4CAF50] text-white";
    case "inactive":
      return "bg-[#EF5226] text-white";
    case "on-leave":
      return "bg-[#FFC107] text-white";
    default:
      return "bg-[#666666] text-white";
  }
};

const EmployeeCard = ({ employee }) => {
  return (
    <div className="neu-small p-6 rounded-2xl hover:scale-105 transition-transform duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Avatar */}
          <div className="neu-small rounded-2xl p-2">
            <Avatar className="w-16 h-16">
              <AvatarImage src={employee.avatar} />
              <AvatarFallback className="bg-[#05A7CC] text-white text-lg">
                {employee.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Employee Info */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold text-[#333333]">{employee.name}</h3>
              <div
                className={`neu-small px-3 py-1 rounded-xl text-xs font-medium ${getStatusColor(
                  employee.status
                )}`}
              >
                {employee.status.replace("-", " ").toUpperCase()}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-[#666666]">ID:</span>
                <span className="font-medium text-[#333333]">{employee.employeeId}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#666666]">Position:</span>
                <span className="font-medium text-[#333333]">{employee.position}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#666666]">Department:</span>
                <span className="font-medium text-[#333333]">{employee.department}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#666666]" />
                <span className="text-[#333333]">{employee.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#666666]" />
                <span className="text-[#333333]">{employee.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#666666]" />
                <span className="text-[#333333]">{employee.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button className="neu-button p-3 rounded-2xl text-[#05A7CC] hover:text-[#048ba8] transition-colors">
            <Eye className="w-5 h-5" />
          </button>
          <button className="neu-button p-3 rounded-2xl text-[#666666] hover:text-[#333333] transition-colors">
            <Edit className="w-5 h-5" />
          </button>
          <button className="neu-button p-3 rounded-2xl text-[#EF5226] hover:text-[#d4471f] transition-colors">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
