import { cn } from "@/lib/utils";

export default function Menu({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <>
      <svg
        width="21"
        height="18"
        onClick={onClick}
        className={cn("", className)}
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1.125C0 0.515625 0.46875 0 1.125 0H19.875C20.4844 0 21 0.515625 21 1.125C21 1.78125 20.4844 2.25 19.875 2.25H1.125C0.46875 2.25 0 1.78125 0 1.125ZM0 8.625C0 8.01562 0.46875 7.5 1.125 7.5H19.875C20.4844 7.5 21 8.01562 21 8.625C21 9.28125 20.4844 9.75 19.875 9.75H1.125C0.46875 9.75 0 9.28125 0 8.625ZM19.875 17.25H1.125C0.46875 17.25 0 16.7812 0 16.125C0 15.5156 0.46875 15 1.125 15H19.875C20.4844 15 21 15.5156 21 16.125C21 16.7812 20.4844 17.25 19.875 17.25Z"
          fill="#181D27"
        />
      </svg>
    </>
  );
}