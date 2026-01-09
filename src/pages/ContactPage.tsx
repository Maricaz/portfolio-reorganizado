import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { submitContact } from '@/services/database'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Linkedin, Github, Mail } from 'lucide-react'
import { useSEO } from '@/hooks/use-seo'

const formSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message is too short'),
})

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  useSEO({
    title: t.contact.title,
    description: 'Get in touch for opportunities or collaborations',
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    const { error } = await submitContact({
      ...values,
      subject: 'Contact Form Submission',
    })
    setIsSubmitting(false)

    if (error) {
      toast({ variant: 'destructive', title: t.contact.error })
    } else {
      toast({ title: t.contact.success, className: 'bg-green-500 text-white' })
      form.reset()
    }
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-2"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-2"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-2"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Card className="shadow-lg border-t-4 border-t-primary animate-slide-up">
        <CardHeader>
          <CardTitle>{t.contact.title}</CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.name}</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.email}</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.message}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hello..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : t.contact.send}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
