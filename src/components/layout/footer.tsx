import * as React from "react"
import { cn } from "@/lib/utils"

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "border-t bg-background py-8 px-6",
        className
      )}
      {...props}
    />
  )
})
Footer.displayName = "Footer"

const FooterSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("grid grid-cols-1 md:grid-cols-4 gap-8", className)}
      {...props}
    />
  )
})
FooterSection.displayName = "FooterSection"

const FooterColumn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
})
FooterColumn.displayName = "FooterColumn"

const FooterTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
})
FooterTitle.displayName = "FooterTitle"

const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "text-sm text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
      {...props}
    />
  )
})
FooterLink.displayName = "FooterLink"

const FooterCopyright = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground mt-8", className)}
      {...props}
    />
  )
})
FooterCopyright.displayName = "FooterCopyright"

export { Footer, FooterSection, FooterColumn, FooterTitle, FooterLink, FooterCopyright }
