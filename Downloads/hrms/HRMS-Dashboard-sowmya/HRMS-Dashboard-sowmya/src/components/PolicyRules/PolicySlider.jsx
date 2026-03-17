import React from "react";

export const PolicySlider = ({
  label,
  description,
  value,
  unit,
  min,
  max,
  onChange
}) => {
  return (
    <div className="neu-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
        <div className="flex-1">
          <div className="font-semibold text-[#333333] text-sm sm:text-base mb-1">{label}</div>
          {description && <div className="text-[#666666] text-xs sm:text-sm">{description}</div>}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="font-bold text-[#CA2030] text-base sm:text-lg">{value}</span>
          {unit && <span className="text-[#666666] text-xs sm:text-sm">{unit}</span>}
        </div>
      </div>

      <div className="neu-card-inset rounded-lg p-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-[#CA2030] to-[#d4471f] rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      <div className="flex justify-between text-[10px] sm:text-xs text-[#666666] mt-2">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};
