// components/dashboard/sidebar/sidebar-data.ts

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Briefcase,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  DollarSign,
  FileText,
  Upload,
  MessageSquare,
  BarChart3,
  Sparkles,
  Palette,
  CreditCard,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    children: [
      {
        title: "Overview",
        path: "/dashboard/overview",
      },
      {
        title: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        title: "Activity Feed",
        path: "/dashboard/activity-feed",
      },
    ],
  },

  {
    title: "Students",
    icon: Users,
    children: [
      {
        title: "All Students",
        path: "/dashboard/students/all",
      },
      {
        title: "Create Student",
        path: "/dashboard/students/create",
      },
    ],
  },
  {
    title: "Parents",
    icon: Users,
    children: [
      {
        title: "All Parents",
        path: "/dashboard/parents/all",
      },
      {
        title: "Create Parent",
        path: "/dashboard/parents/create",
      },
    ],
  },

  {
    title: "Teachers",
    icon: GraduationCap,
    children: [
      {
        title: "All Teachers",
        path: "/dashboard/teachers/all",
      },
      {
        title: "Create Teacher",
        path: "/dashboard/teachers/create",
      },
    ],
  },

  {
    title: "Management Staff",
    icon: Briefcase,
    children: [
      {
        title: "Create Management Staff",
        path: "/dashboard/management-staff/create",
      },
      {
        title: "All Management Staff",
        path: "/dashboard/management-staff/all",
      },
      // {
      //   title: "Roles & Permissions",
      //   path: "/dashboard/management-staff/roles",
      // },
      // {
      //   title: "Staff Attendance",
      //   path: "/dashboard/management-staff/attendance",
      // }
    ],
  },

  {
    title: "Academics",
    icon: BookOpen,
    children: [
      {
        title: "Create Batch",
        path: "/dashboard/academics/batches/create",
      },
      {
        title: "All Batches",
        path: "/dashboard/academics/batches/all",
      },
      {
        title: "Create Subjects",
        path: "/dashboard/academics/subjects/create",
      },
      {
        title: "All Subjects",
        path: "/dashboard/academics/subjects/all",
      },
      {
        title: "Create Topics",
        path: "/dashboard/academics/topics/create",
      },
      {
        title: "All Topics",
        path: "/dashboard/academics/topics/all",
      },
      {
        title: "Create Lectures",
        path: "/dashboard/academics/lectures/create",
      },
      {
        title: "All Lectures",
        path: "/dashboard/academics/lectures/all",
      },
    ],
  },

  {
    title: "Class Scheduling",
    icon: CalendarDays,
    children: [
      {
        title: "Schedule Class",
        path: "/dashboard/class-scheduling/schedule-class",
      },
      {
        title: "View Schedule",
        path: "/dashboard/class-scheduling/view-schedule",
      },
      {
        title: "Manage Rescheduling",
        path: "/dashboard/class-scheduling/manage-rescheduling",
      },
    ],
  },

  {
    title: "Attendance",
    icon: ClipboardCheck,
    children: [
      {
        title: "Take Attendance",
        path: "/dashboard/attendance/take",
      },
      {
        title: "View Attendance Records",
        path: "/dashboard/attendance/records",
      },
      {
        title: "Generate Attendance Reports",
        path: "/dashboard/attendance/reports",
      },
    ],
  },

  {
    title: "Fees & Payments",
    icon: DollarSign,
    children: [
      {
        title: "View Fees Structure",
        path: "/dashboard/fees-payments/view-fees-structure",
      },
      {
        title: "Create Payment",
        path: "/dashboard/fees-payments/create-payment",
      },
      {
        title: "View Payment Records",
        path: "/dashboard/fees-payments/view-payment-records",
      },
    ],
  },

  {
    title: "Tests & Exams",
    icon: FileText,
    children: [
      // {
      //   title: "All Tests",
      //   path: "/dashboard/tests",
      // },
      {
        title: "Create Question Banks",
        path: "/dashboard/tests/question-banks/create",
      },
      {
        title: "Add Question",
        path: "/dashboard/tests/questions",
      },
      {
        title: "All Question Banks",
        path: "/dashboard/tests/question-banks/all",
      },
      {
        title: "Assign Test",
        path: "/dashboard/tests/assign-test",
      },
      // {
      //   title: "Assign Test",
      //   path: "/dashboard/tests/assignments",
      // },
      // {
      //   title: "Results",
      //   path: "/dashboard/tests/results",
      // },
      // {
      //   title: "Rankings",
      //   path: "/dashboard/tests/rankings",
      // },
      // {
      //   title: "Performance Analytics",
      //   path: "/dashboard/tests/analytics",
      // },
    ],
  },

  {
    title: "Study Materials",
    icon: Upload,
    children: [
      {
        title: "Upload Material",
        path: "/dashboard/study-materials/upload",
      },
      {
        title: "View Materials",
        path: "/dashboard/study-materials/view",
      },
      {
        title: "Manage Materials",
        path: "/dashboard/study-materials/manage",
      },
    ],
  },

  {
    title: "Communication",
    icon: MessageSquare,
    children: [
      {
        title: "Announcement",
        path: "/dashboard/communication/announcement",
      },
      {
        title: "View Messages",
        path: "/dashboard/communication/view-messages",
      },
      {
        title: "Manage Notifications",
        path: "/dashboard/communication/manage-notifications",
      },
    ],
  },

  {
    title: "Reports & Analytics",
    icon: BarChart3,
    children: [
      {
        title: "View Reports",
        path: "/dashboard/reports/view",
      },
      {
        title: "Generate Analytics",
        path: "/dashboard/reports/generate-analytics",
      },
    ],
  },

  {
    title: "AI Tools",
    icon: Sparkles,
    children: [
      {
        title: "AI-Powered Analytics",
        path: "/dashboard/ai-tools/analytics",
      },
      {
        title: "AI-Driven Student Support",
        path: "/dashboard/ai-tools/student-support",
      },
    ],
  },

  {
    title: "Branding & Customization",
    icon: Palette,
    path: "/dashboard/branding-customization",
  },

  {
    title: "Subscription & Billing",
    icon: CreditCard,
    path: "/dashboard/subscription-billing",
  },

  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];
