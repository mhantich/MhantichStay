import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Users } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Check-in Date */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start text-left font-normal',
                !checkIn && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, 'PPP') : <span>Check-in Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
              disabled={(date) =>
                date < new Date() || (checkOut ? date > checkOut : false)
              }
            />
          </PopoverContent>
        </Popover>

        {/* Check-out Date */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start text-left font-normal',
                !checkOut && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkOut ? format(checkOut, 'PPP') : <span>Check-out Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              disabled={(date) =>
                date < new Date() || (checkIn ? date < checkIn : false)
              }
            />
          </PopoverContent>
        </Popover>

        {/* Guest Selection */}
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="w-full">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Number of Guests" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Guest</SelectItem>
            <SelectItem value="2">2 Guests</SelectItem>
            <SelectItem value="3">3 Guests</SelectItem>
            <SelectItem value="4">4 Guests</SelectItem>
            <SelectItem value="5">5 Guests</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-6">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
          Search Availability
        </Button>
      </div>
    </div>
  );
}