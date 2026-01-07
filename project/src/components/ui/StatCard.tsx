import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  description?: string;
  color?: 'blue' | 'amber' | 'teal' | 'indigo';
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  description,
  color = 'blue',
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    teal: 'bg-teal-50 text-teal-700 border-teal-200',
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  };

  const iconColorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    amber: 'bg-amber-100 text-amber-600',
    teal: 'bg-teal-100 text-teal-600',
    indigo: 'bg-indigo-100 text-indigo-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg border p-4 ${colorClasses[color]}`}
    >
      <div className="flex items-start">
        <div
          className={`p-2 rounded-full mr-4 ${iconColorClasses[color]}`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <h4 className="text-2xl font-bold mt-1">{value}</h4>
          {description && (
            <p className="text-sm mt-1 opacity-80">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;