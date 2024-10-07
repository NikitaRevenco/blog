// INFO: Classes that style items inside of admonitions are placed within tailwind.config

import {
  Flame,
  Info,
  Lightbulb,
  PartyPopper,
  TriangleAlert,
} from "lucide-react";

import { H4 } from "./heading";

const alertTypes = ["note", "tip", "warning", "danger", "fun fact"] as const;

export const isValidAdmonitionType = (str: string): str is AlertType =>
  alertTypes.includes(str);

export type AlertType = (typeof alertTypes)[number];

export function Admonition({
  alertType,
  title,
  children,
}: {
  alertType: AlertType;
  title: string;
  children: React.ReactNode;
}) {
  const data =
    alertType === "note"
      ? ({
          icon: Info,
          className: "border-l-blue bg-blue/5 BLUE",
          iconClassName: "text-blue",
        } as const)
      : alertType === "warning"
        ? ({
            icon: TriangleAlert,
            className: "border-l-yellow bg-yellow/5 YELLOW",
            iconClassName: "text-yellow",
          } as const)
        : alertType === "tip"
          ? ({
              icon: Lightbulb,
              className: "border-l-teal bg-teal/5 TEAL",
              iconClassName: "text-teal",
            } as const)
          : alertType === "fun fact"
            ? ({
                icon: PartyPopper,
                className: "border-l-pink bg-pink/5 PINK",
                iconClassName: "text-pink",
              } as const)
            : ({
                icon: Flame,
                className: "border-l-red bg-red/5 RED",
                iconClassName: "text-red",
              } as const);

  const icon = (
    <span className={`flex gap-x-2 ${data.iconClassName}`}>
      <span className="font-bold uppercase">{alertType}</span>
      <data.icon strokeWidth={2.4} />
    </span>
  );

  return (
    <aside
      className={`group relative block overflow-x-auto border-l-4 bleed max-sm:text-sm ${data.className}`}
    >
      {title !== "" && (
        <span className="align-center -mb-2 mt-0 flex justify-between">
          {title !== "" && (
            <H4 className="mt-0">
              {title}
            </H4>
          )}
          {icon}
        </span>
      )}
      {children}
      {title === "" && (
        <span
          className={`absolute right-4 top-4 md:right-8 md:top-8 ${data.iconClassName}`}
        >
          {icon}
        </span>
      )}
    </aside>
  );
}
