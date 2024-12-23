import { cn } from "@/lib/utils";

export default function Code({ className }: { className?: string }) {
  return (
    <>
      <svg
        className={cn("", className)}
        viewBox="0 0 23 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.5547 1.09441L9.49219 17.4069C9.35156 17.8288 8.89453 18.0749 8.4375 17.9343C8.01562 17.7936 7.76953 17.3366 7.91016 16.8796L12.9727 0.567069C13.1133 0.145194 13.5703 -0.1009 14.0273 0.039725C14.4492 0.18035 14.6953 0.637381 14.5547 1.09441ZM17.7188 4.15301L22.2188 8.37176C22.3945 8.51238 22.5 8.75848 22.5 8.96941C22.5 9.21551 22.3945 9.42644 22.2188 9.60223L17.7188 13.821C17.3672 14.1374 16.8398 14.1374 16.5234 13.7858C16.207 13.4343 16.207 12.9069 16.5586 12.5905L20.3906 8.96941L16.5586 5.38347C16.207 5.06707 16.207 4.53972 16.5234 4.18816C16.8398 3.8366 17.3672 3.8366 17.7188 4.15301ZM5.90625 5.38347L2.07422 8.96941L5.90625 12.5905C6.25781 12.9069 6.25781 13.4343 5.94141 13.7858C5.625 14.1374 5.09766 14.1374 4.74609 13.821L0.246094 9.60223C0.0703125 9.42644 0 9.21551 0 8.96941C0 8.75848 0.0703125 8.51238 0.246094 8.37176L4.74609 4.15301C5.09766 3.8366 5.625 3.8366 5.94141 4.18816C6.25781 4.53972 6.25781 5.06707 5.90625 5.38347Z" />
      </svg>
    </>
  );
}
