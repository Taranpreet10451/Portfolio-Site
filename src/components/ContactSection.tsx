import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useContactInfo } from '@/hooks/useContactInfo';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { contactInfo, loading } = useContactInfo();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_jem5n9g', // Replace with your EmailJS Service ID
        'template_a4ykspp', // Replace with your EmailJS Template ID
        values,
        '46QVuMS5g51qxPjia' // Replace with your EmailJS Public Key
      );
      
      // Success toast
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error!',
        description: 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <Card className="shadow-md h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
         <div className="flex items-start gap-4">
  <Mail className="w-5 h-5 text-portfolio-primary mt-1" />
  <div>
    <p className="font-medium">Email</p>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=taranpreetkaur1641@gmail.com"
      className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary break-all"
    >
      {loading ? "Loading..." : contactInfo?.email || "taranpreetkaur1641@gmail.com"}
    </a>
  </div>
</div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-portfolio-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {loading ? "Loading..." : contactInfo?.phone || "+91 93898 86109"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Linkedin className="w-5 h-5 text-portfolio-primary mt-1" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href={loading ? "#" : contactInfo?.linkedin || "https://linkedin.com/in/taranpreet-kaur-0b3941251"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary"
                    >
                      {loading ? "Loading..." : "linkedin.com/in/taranpreet-kaur-0b3941251"}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Github className="w-5 h-5 text-portfolio-primary mt-1" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href={loading ? "#" : contactInfo?.github || "https://github.com/Taranpreet10451"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary"
                    >
                      {loading ? "Loading..." : "github.com/Taranpreet10451"}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="button-primary w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;