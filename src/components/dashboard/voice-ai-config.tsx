import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const VoiceAIConfig = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("space-y-6", className)}
      {...props}
    />
  )
})
VoiceAIConfig.displayName = "VoiceAIConfig"

interface VoiceAIConfigSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

const VoiceAIConfigSection = React.forwardRef<
  HTMLDivElement,
  VoiceAIConfigSectionProps
>(({ className, title, ...props }, ref) => {
  return (
    <Card ref={ref} className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent {...props} />
    </Card>
  )
})
VoiceAIConfigSection.displayName = "VoiceAIConfigSection"

interface VoiceAIQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string
  onEdit?: () => void
  onDelete?: () => void
}

const VoiceAIQuestion = React.forwardRef<
  HTMLDivElement,
  VoiceAIQuestionProps
>(({ className, question, onEdit, onDelete, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between rounded-md border p-4", className)}
      {...props}
    >
      <p className="text-sm">{question}</p>
      <div className="flex items-center gap-2">
        {onEdit && (
          <Button variant="ghost" size="sm" onClick={onEdit}>
            Modifier
          </Button>
        )}
        {onDelete && (
          <Button variant="ghost" size="sm" onClick={onDelete}>
            Supprimer
          </Button>
        )}
      </div>
    </div>
  )
})
VoiceAIQuestion.displayName = "VoiceAIQuestion"

const VoiceAIPreview = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-md border p-6 bg-accent/50", className)}
      {...props}
    />
  )
})
VoiceAIPreview.displayName = "VoiceAIPreview"

export {
  VoiceAIConfig,
  VoiceAIConfigSection,
  VoiceAIQuestion,
  VoiceAIPreview
}
