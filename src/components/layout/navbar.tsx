import * as React from "react"
import { cn } from "@/lib/utils"

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background px-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
})
Navbar.displayName = "Navbar"

const NavbarBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
})
NavbarBrand.displayName = "NavbarBrand"

const NavbarItems = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-6", className)}
      {...props}
    />
  )
})
NavbarItems.displayName = "NavbarItems"

const NavbarItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      {...props}
    />
  )
})
NavbarItem.displayName = "NavbarItem"

const NavbarActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
})
NavbarActions.displayName = "NavbarActions"

export { Navbar, NavbarBrand, NavbarItems, NavbarItem, NavbarActions }
