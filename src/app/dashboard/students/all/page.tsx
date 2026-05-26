// app/student/all/page.tsx
"use client";

import { useState } from "react";
import StatsCard from "@/components/dashboard/cards/StatsCard";
import TableToolbar from "@/components/dashboard/table/TableToolbar";
import DataTable from "@/components/dashboard/table/DataTable";

const columns = [
  { key: "id", title: "Student ID", width: "120px" },
  { key: "name", title: "Name", width: "150px" },
  { key: "email", title: "Email", width: "260px" },
  { key: "phone", title: "Phone", width: "170px" },
  { key: "batch", title: "Batch", width: "150px" },
  { key: "fees", title: "Fees", width: "120px" },
  { key: "attendance", title: "Attendance", width: "140px" },
  {
    key: "actions",
    title: "Action",
    width: "80px",
  },
];

const students = [
  {
    id: "STU001",
    name: "Rahul Kumar",
    email: "rahul.kumar@email.com",
    phone: "+91 9876511111",
    batch: "JEE 2026 A",
    fees: "₹15,000",
    attendance: "87.5%",
  },
  {
    id: "STU002",
    name: "Meena Iyer",
    email: "meena.iyer@coaching.com",
    phone: "+91 9876522222",
    batch: "Neet 2026 A",
    fees: "₹12,000",
    attendance: "92.0%",
  },
  {
    id: "STU003",
    name: "Suresh Kumar",
    email: "suresh.kumar@coaching.com",
    phone: "+91 9876533333",
    batch: "JEE 2026 A",
    fees: "₹15,000",
    attendance: "85.0%",
  },
  {
    id: "STU004",
    name: "Priya",
    email: "priya.nair@coaching.com",
    phone: "+91 9876544444",
    batch: "JEE 2026 A",
    fees: "₹15,000",
    attendance: "87.5%",
  },
  {
    id: "STU005",
    name: "Anil Sharma",
    email: "anil.sharma@coaching.com",
    phone: "+91 9876555555",
    batch: "JEE 2026 A",
    fees: "₹15,000",
    attendance: "87.5%",
  },
  {
    id: "STU006",
    name: "Anita",
    email: "anita.desai@coaching.com",
    phone: "+91 9876555555",
    batch: "Neet 2026 A",
    fees: "₹15,000",
    attendance: "87.5%",
  },
  {
    id: "STU007",
    name: "Ananya",
    email: "ananya.sen@coaching.com",
    phone: "+91 9876555555",
    batch: "JEE 2026 A",
    fees: "₹15,000",
    attendance: "87.5%",
  },
  {
    id: "STU008",
    name: "Meena Gupta",
    email: "meena.gupta@coaching.com",
    phone: "+91 9876555555",
    batch: "Neet 2026 A",
    fees: "₹12,000",
    attendance: "87.5%",
  },
  {
    id: "STU0010",
    name: "Ankur Verma",
    email: "ankur.verma@coaching.com",
    phone: "+91 9876555555",
    batch: "Neet 2026 A",
    fees: "₹12,000",
    attendance: "87.5%",
  },
  {
    id: "STU0011",
    name: "Nikhil Reddy",
    email: "nikhil.reddy@coaching.com",
    phone: "+91 9876555555",
    batch: "Neet 2026 A",
    fees: "₹12,000",
    attendance: "87.5%",
  },
  {
    id: "STU0012",
    name: "Priya Singh",
    email: "priya.singh@coaching.com",
    phone: "+91 9876555555",
    batch: "Neet 2026 A",
    fees: "₹12,000",
    attendance: "87.5%",
  },
  {
    id: "STU0013",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@coaching.com",
    phone: "+91 9876555555",
    batch: "Neet 2026 A",
    fees: "₹12,000",
    attendance: "87.5%",
  },
];

export default function AllStudentsPage() {
  return (
    <div className="p-4 md:p-6">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="heading text-2xl md:text-3xl font-semibold text-[#101828]">
            All Students
          </h1>
          <p className="body-text mt-1 text-sm md:text-base text-[#667085]">
            Manage student records and their academic progress
          </p>
        </div>

        <button className="btn bg-[#6FA073] text-white rounded-xl border-none hover:bg-[#5d8a61] transition-all duration-200 px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base whitespace-nowrap">
          + Add Student
        </button>
      </div>

      {/* Stats Cards Grid - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
        <StatsCard
          title="Total Students"
          value="892"
          subtitle="+65 this month"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Active Students"
          value="892"
          subtitle="94.7% retention"
        />

        <StatsCard
          title="Avg Attendance"
          value="87.5%"
          subtitle="+3.2% vs last month"
        />

        <StatsCard
          title="Fees Collected"
          value="78.4%"
          subtitle="₹2.45L pending"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#EAECF0] rounded-[20px] p-4 md:p-6 overflow-hidden">
        <TableToolbar />
        <div className="mt-5">
          <DataTable
            columns={columns}
            data={students}
            rowsPerPage={5}
            editFields={[
              {
                key: "name",
                label: "Student Name",
              },
              {
                key: "phone",
                label: "Phone Number",
              },
              {
                key: "studentClass",
                label: "Class",
              },
              {
                key: "course",
                label: "Course",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
