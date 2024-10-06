import {
  Children,
  cloneElement,
  type HTMLAttributes,
  isValidElement,
} from "react";
import { FaArrowRight } from "react-icons/fa";

export function Ul({ children, ...props }: HTMLAttributes<HTMLUListElement>) {
  const childrenWithContext = Children.toArray(children).map(async (el) =>
    // @ts-expect-error -- Expecting only <Li> as children
    isValidElement(el) ? cloneElement(el, { listType: "ul" }) : el,
  ) as React.ReactNode;

  return (
    <ul className="my-6 ml-6 list-none [&>li]:mt-2" {...props}>
      {childrenWithContext}
    </ul>
  );
}

export function Ol({ children, ...props }: HTMLAttributes<HTMLOListElement>) {
  const childrenWithContext = Children.toArray(children).map(async (el) =>
    // @ts-expect-error -- Expecting only <Li> as children
    isValidElement(el) ? cloneElement(el, { listType: "ol" }) : el,
  ) as React.ReactNode;

  return (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {childrenWithContext}
    </ol>
  );
}

export function Li({
  children,
  listType,
  ...props
}: HTMLAttributes<HTMLLIElement> & { listType: "ol" | "ul" }) {
  return (
    <li
      className={`relative pl-2 leading-7 ${listType === "ol" ? "marker:font-bold marker:text-accent group-[.BLUE]:marker:text-blue group-[.RED]:marker:text-red group-[.TEAL]:marker:text-teal group-[.YELLOW]:marker:text-yellow" : ""}`}
      {...props}
    >
      {children}
      {listType === "ul" && (
        <FaArrowRight className="absolute -left-5 top-[0.4rem] text-accent group-[.BLUE]:text-blue group-[.RED]:text-red group-[.TEAL]:text-teal group-[.YELLOW]:text-yellow" />
      )}
    </li>
  );
}
