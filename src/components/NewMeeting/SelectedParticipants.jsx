import React from "react";
import { X, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const SelectedParticipants = ({ participants, removeParticipant }) => {
  return (
    <div className="space-y-3">
      {participants.map((participant) => (
        <div key={participant.id} className="neu-small p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-[#05A7CC] text-white">
                  {participant.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <div className="font-medium text-[#333333]">
                  {participant.name}
                </div>
                <div className="text-sm text-[#666666]">{participant.role}</div>
              </div>
            </div>

            <button
              onClick={() => removeParticipant(participant.id)}
              className="neu-button p-2 rounded-xl text-[#EF5226] hover:text-[#d4471f]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      {participants.length === 0 && (
        <div className="neu-card-inset p-6 rounded-2xl text-center">
          <Users className="w-12 h-12 text-[#666666] mx-auto mb-3" />
          <p className="text-[#666666]">No participants added yet</p>
        </div>
      )}
    </div>
  );
};
