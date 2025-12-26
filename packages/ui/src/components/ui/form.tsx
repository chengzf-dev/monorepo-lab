import * as React from "react"
import { Form as RadixForm } from "radix-ui"
import { cn } from "../../lib/utils"

const Form = RadixForm.Root

const FormField = React.forwardRef<
  React.ElementRef<typeof RadixForm.Field>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Field>
>(({ className, ...props }, ref) => (
  <RadixForm.Field
    ref={ref}
    className={cn("space-y-2", className)}
    {...props}
  />
))
FormField.displayName = "FormField"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof RadixForm.Label>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Label>
>(({ className, ...props }, ref) => (
  <RadixForm.Label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof RadixForm.Control>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Control>
>(({ ...props }, ref) => (
  <RadixForm.Control ref={ref} {...props} />
))
FormControl.displayName = "FormControl"

const FormMessage = React.forwardRef<
  React.ElementRef<typeof RadixForm.Message>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Message>
>(({ className, ...props }, ref) => (
  <RadixForm.Message
    ref={ref}
    className={cn("text-[0.8rem] font-medium text-red-500", className)}
    {...props}
  />
))
FormMessage.displayName = "FormMessage"

const FormSubmit = React.forwardRef<
  React.ElementRef<typeof RadixForm.Submit>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Submit>
>(({ className, ...props }, ref) => (
  <RadixForm.Submit
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
FormSubmit.displayName = "FormSubmit"

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormSubmit
}
