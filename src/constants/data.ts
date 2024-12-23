import Cloud from "@/components/ui/svgs/cloud";
import Code from "@/components/ui/svgs/code";
import Docs from "@/components/ui/svgs/docs";
import Home from "@/components/ui/svgs/home";
import Settings from "@/components/ui/svgs/settings";

export const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
];

export const navigationItems = [
  { icon: Home, label: "Repositories", href: "/dashboard/repositories" },
  { icon: Code, label: "AI Code Review", href: "/dashboard/code-review" },
  { icon: Cloud, label: "Cloud Security", href: "/dashboard/cloud-security" },
  { icon: Docs, label: "How to Use", href: "/dashboard/how-to-use" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];
