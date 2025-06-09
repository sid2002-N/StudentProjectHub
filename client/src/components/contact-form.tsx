import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CalendarIcon, CheckIcon, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  course: z.string().optional(),
  deadline: z.date().optional(),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  urgent: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      course: "",
      projectType: "",
      description: "",
      urgent: false,
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset();
      toast({
        title: "Request Submitted",
        description: "Thank you for your project request. I'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 backdrop-blur-md bg-zinc-900/25 p-8 rounded-lg border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 font-cyber text-sm">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 focus:border-[hsl(174,100%,50%)] rounded-md text-white focus:ring-1 focus:ring-[hsl(174,100%,50%)] focus:outline-none" 
                    {...field} 
                  />
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
                <FormLabel className="text-gray-300 font-cyber text-sm">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your@email.com" 
                    type="email"
                    className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 focus:border-[hsl(174,100%,50%)] rounded-md text-white focus:ring-1 focus:ring-[hsl(174,100%,50%)] focus:outline-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 font-cyber text-sm">Course/Subject</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g. Data Science, Web Development" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 focus:border-[hsl(174,100%,50%)] rounded-md text-white focus:ring-1 focus:ring-[hsl(174,100%,50%)] focus:outline-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-gray-300 font-cyber text-sm">Project Deadline</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 focus:border-[hsl(174,100%,50%)] rounded-md text-white hover:text-white focus:ring-1 focus:ring-[hsl(174,100%,50%)] focus:outline-none justify-start text-left font-normal"
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span className="text-gray-500">Select a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zinc-800 border border-gray-700" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="bg-zinc-800 text-white"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 font-cyber text-sm">Project Type</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 focus:border-[hsl(174,100%,50%)] rounded-md text-white focus:ring-1 focus:ring-[hsl(174,100%,50%)] focus:outline-none">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-zinc-800 border border-gray-700">
                  <SelectItem value="mini">Mini Project/Assignment</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="fullstack">Full Stack Web Development</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="data">Data Analysis</SelectItem>
                  <SelectItem value="automation">Automation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 font-cyber text-sm">Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your project requirements in detail..." 
                  className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 focus:border-[hsl(174,100%,50%)] rounded-md text-white focus:ring-1 focus:ring-[hsl(174,100%,50%)] focus:outline-none min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="urgent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-[hsl(174,100%,50%)] data-[state=checked]:text-white border-gray-700"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-gray-300 text-sm font-normal">
                  This is an urgent request (additional fee may apply)
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-[hsl(174,100%,50%)]/20 text-[hsl(174,100%,50%)] hover:bg-[hsl(174,100%,50%)]/30 font-cyber uppercase tracking-wider transition duration-300 rounded"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </Button>
      </form>
    </Form>
  );
}
