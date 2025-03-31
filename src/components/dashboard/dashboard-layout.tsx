import * as React from "react"
import { cn } from "@/lib/utils"

const Dashboard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex min-h-screen bg-background", className)}
      {...props}
    />
  )
})
Dashboard.displayName = "Dashboard"

const DashboardSidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background pt-16",
        className
      )}
      {...props}
    />
  )
})
DashboardSidebar.displayName = "DashboardSidebar"

const DashboardSidebarNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1 p-4", className)}
      {...props}
    />
  )
})
DashboardSidebarNav.displayName = "DashboardSidebarNav"

const DashboardSidebarNavItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }
>(({ className, active, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
})
DashboardSidebarNavItem.displayName = "DashboardSidebarNavItem"

const DashboardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 pt-16 pl-64", className)}
      {...props}
    />
  )
})
DashboardContent.displayName = "DashboardContent"

const DashboardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-6 py-4 border-b", className)}
      {...props}
    />
  )
})
DashboardHeader.displayName = "DashboardHeader"

const DashboardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn("text-2xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
})
DashboardTitle.displayName = "DashboardTitle"

const DashboardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
DashboardDescription.displayName = "DashboardDescription"

const DashboardMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("p-6", className)}
      {...props}
    />
  )
})
DashboardMain.displayName = "DashboardMain"

export {
  Dashboard,
  DashboardSidebar,
  DashboardSidebarNav,
  DashboardSidebarNavItem,
  DashboardContent,
  DashboardHeader,
  DashboardTitle,
  DashboardDescription,
  DashboardMain
}
