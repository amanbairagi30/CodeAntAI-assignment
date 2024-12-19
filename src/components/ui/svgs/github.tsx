import { cn } from "@/lib/utils";

export default function Pie({ className }: { className?: string }) {
  return (
    <>
      <svg
        className={cn("w-4 h-4", className)}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4336 12.755H12.6555V2.84301C12.6555 2.72105 12.5571 2.62127 12.4368 2.62127H11.7258C10.2911 2.61978 8.87012 2.90549 7.54453 3.46201C6.21895 4.01853 5.01482 4.83489 4.00122 5.86427C3.00327 6.87275 2.2083 8.06834 1.6606 9.38445C1.09185 10.7509 0.802002 12.2006 0.802002 13.6974C0.802002 15.1941 1.09185 16.641 1.6606 18.0075C2.21021 19.3241 2.99771 20.5104 4.00122 21.5277C5.00474 22.5449 6.17231 23.3432 7.47388 23.9003C8.81957 24.4791 10.2668 24.776 11.7286 24.7735C13.1633 24.7749 14.5843 24.4892 15.9099 23.9327C17.2354 23.3762 18.4396 22.5598 19.4532 21.5305C20.4567 20.5132 21.2442 19.3297 21.7938 18.0103C22.3647 16.6462 22.6577 15.1792 22.6551 13.6974V12.9767C22.6524 12.8547 22.554 12.755 22.4336 12.755ZM24.8372 11.2166L24.7661 10.435C24.5336 7.88491 23.418 5.47899 21.6188 3.66346C19.8213 1.84285 17.4525 0.716302 14.9223 0.47867L14.1485 0.406604C14.02 0.395516 13.9106 0.495301 13.9106 0.625575V11.261C13.9106 11.3829 14.009 11.4827 14.1293 11.4827L24.6184 11.455C24.7469 11.4522 24.8481 11.3441 24.8372 11.2166Z"
          fill="#9D90FA"
        />
      </svg>
    </>
  );
}