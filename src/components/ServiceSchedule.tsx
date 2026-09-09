import type { Service } from "@/lib/types";

interface ServiceScheduleProps {
  services: Service[];
  dark?: boolean;
}

export function ServiceSchedule({ services }: ServiceScheduleProps) {
  return (
    <div className="schedule" role="list" aria-label="Weekly service schedule">
      {services.map((service) => (
        <div className="schedule-row" role="listitem" key={service.slug}>
          <span className="schedule-day">{service.day}</span>
          <span className="schedule-name">{service.name}</span>
          <span className="schedule-time">{service.time}</span>
        </div>
      ))}
    </div>
  );
}
