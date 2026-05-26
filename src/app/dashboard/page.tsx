"use client"

import * as React from "react"


export default function Page() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="heading">
          Dashboard Overview
        </h1>

        <p className="caption mt-1">
          Welcome back, Sahil 👋
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-5">

        <div className="card-title bg-white rounded-2xl py-2 px-10 border">
          Total Students
        </div>

        <div className="card-title bg-white rounded-2xl py-2 px-10 border">
          Revenue
        </div>

        <div className="card-title bg-white rounded-2xl py-2 px-10 border">
          Fees Pending
        </div>

        <div className="card-title bg-white rounded-2xl py-2 px-10 border">
          Active Batches
        </div>

      </div>

    </div>
  )
}