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
import path from "path";

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
      }
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
      }
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
      {
        title: "Assign Subjects",
        path: "/dashboard/teachers/assign-subjects",
      },
      {
        title: "Assign Batches",
        path: "/dashboard/teachers/assign-batches",
      }
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
        title: "Assign Roles",
        path: "/dashboard/management-staff/assign-roles",
      },
      {
        title: "Assign Departments",
        path: "/dashboard/management-staff/assign-departments",
      }
    ],
  },

  {
    title: "Batches",
    icon: BookOpen,
    children: [
      {
        title: "All Batches",
        path: "/dashboard/batches/all",
      },
      {
        title: "Create Batch",
        path: "/dashboard/batches/create",
      }
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
      }
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
      }
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
      }
    ],
  },

  {
    title: "Tests & Exams",
    icon: FileText,
    children: [
      {
        title: "Create Test/Exam",
        path: "/dashboard/tests-exams/create",
      },
      {
        title: "View Test/Exam Records",
        path: "/dashboard/tests-exams/records",
      },
      {
        title: "Generate Report Cards",
        path: "/dashboard/tests-exams/report-cards",
      }
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
      }
    ],
  },

  {
    title: "Communication",
    icon: MessageSquare,
    children: [
      {
        title: "Send Announcement",
        path: "/dashboard/communication/send-announcement",
      },
      {
        title: "View Messages",
        path: "/dashboard/communication/view-messages",
      },
      {
        title: "Manage Notifications",
        path: "/dashboard/communication/manage-notifications",
      }
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
      }
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
      }
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
