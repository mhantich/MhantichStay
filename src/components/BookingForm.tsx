import { format } from "date-fns";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

export function BookingForm() {
  const formMethods = useForm();

  return (
    <Form {...formMethods}>
      <form onSubmit={formMethods.handleSubmit((data) => console.log(data))} 
            className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Check-in Date Field */}
          <FormField
            name="checkIn"
            render={({ field }) => (
              <FormItem className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-amber-700" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Check In</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="ghost"
                            className={cn(
                              "h-auto p-0 font-normal hover:bg-transparent",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "dd/MM/yyyy")
                            ) : (
                              <span className="text-gray-500">dd/mm/yyyy</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Check-out Date Field */}
          <FormField
            name="checkOut"
            render={({ field }) => (
              <FormItem className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-amber-700" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Check Out</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="ghost"
                            className={cn(
                              "h-auto p-0 font-normal hover:bg-transparent",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "dd/MM/yyyy")
                            ) : (
                              <span className="text-gray-500">dd/mm/yyyy</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Guests Field */}
          <FormField
            name="guests"
            render={({ field }) => (
              <FormItem className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-amber-700" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Guests</span>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-0 p-0 h-auto hover:bg-transparent focus:ring-0">
                          <SelectValue placeholder="4 Guest(s)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* Book Now Button */}
          <Button 
            type="submit" 
            className="m-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold"
          >
            Book Now
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default BookingForm;