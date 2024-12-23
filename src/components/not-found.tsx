import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-secondary">
      <div className="max-w-md w-full bg-background mx-4">
        <div className="rounded-lg border border-border bg-accent p-6 text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">404</h1>
          <p className="text-foreground/80">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
