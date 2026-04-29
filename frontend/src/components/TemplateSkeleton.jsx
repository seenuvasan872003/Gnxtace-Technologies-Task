import { motion } from 'framer-motion';

const SkeletonCard = () => (
  <div className="glass-card rounded-[2.5rem] overflow-hidden border border-white/5 animate-pulse">
    <div className="aspect-[16/10] bg-white/5" />
    <div className="p-8 space-y-4">
      <div className="flex justify-between items-center">
        <div className="h-4 bg-white/10 rounded w-1/4" />
        <div className="h-8 w-8 bg-white/10 rounded-full" />
      </div>
      <div className="h-8 bg-white/10 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-white/10 rounded w-full" />
        <div className="h-4 bg-white/10 rounded w-5/6" />
      </div>
      <div className="flex space-x-3 pt-4">
        <div className="h-12 bg-white/5 rounded-xl flex-1" />
        <div className="h-12 bg-white/5 rounded-xl flex-1" />
      </div>
    </div>
  </div>
);

const TemplateSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default TemplateSkeleton;
