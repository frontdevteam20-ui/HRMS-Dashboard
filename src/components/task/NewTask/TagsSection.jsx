import React from 'react';
import { Plus, X, Tag } from 'lucide-react';

export const TagsSection = ({ formData, newTag, setNewTag, handleAddTag, handleRemoveTag, predefinedTags, setFormData }) => {
  return (
    <div className="neu-card p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-[#333333] mb-6 flex items-center">
        <Tag size={20} className="mr-2 text-[#4CAF50]" />
        Tags
      </h2>
      
      <div className="space-y-4">
        {/* Add New Tag */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add a tag..."
            className="flex-1 neu-input p-3 rounded-xl text-[#333333] placeholder-[#666666] focus:ring-2 focus:ring-[#CA2030] transition-all"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="neu-primary px-4 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Predefined Tags */}
        <div>
          <p className="text-sm text-[#666666] mb-2">Quick add:</p>
          <div className="flex flex-wrap gap-2">
            {predefinedTags.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => !formData.tags.includes(tag) && setFormData(prev => ({
                  ...prev,
                  tags: [...prev.tags, tag]
                }))}
                disabled={formData.tags.includes(tag)}
                className={`px-3 py-1 rounded-lg text-sm transition-all ${
                  formData.tags.includes(tag)
                    ? 'bg-[#E8EBEF] text-[#999] cursor-not-allowed'
                    : 'neu-button hover:text-[#CA2030]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tags */}
        {formData.tags.length > 0 && (
          <div>
            <p className="text-sm text-[#666666] mb-2">Selected tags:</p>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-lg bg-[#CA2030] text-white text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 hover:text-red-200 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
