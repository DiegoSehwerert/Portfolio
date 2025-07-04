interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  isLast?: boolean;
}

export const TimelineItem = ({
  title,
  description,
  date,
  isLast,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary rounded-full border-2 border-background z-10" />
      {!isLast && (
        <div className="absolute left-1.5 top-6 w-1 h-full bg-muted z-0" />
      )}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </div>
  );
};
