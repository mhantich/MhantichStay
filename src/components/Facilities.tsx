
import { Card, CardContent } from '@/components/ui/card';
import { Building, Compass,  Train } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: <Building className="w-8 h-8 text-amber-700" />,
      title: "City Views",
      description: "Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis."
    },
    {
      icon: <Compass className="w-8 h-8 text-amber-700" />,
      title: "South Facing",
      description: "Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis."
    },
    {
      icon: <Building className="w-8 h-8 text-amber-700" />,
      title: "Swimming Pool",
      description: "Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis."
    },
    {
      icon: <Train className="w-8 h-8 text-amber-700" />,
      title: "Subway Nearby",
      description: "Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-8">Hotel Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {facility.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Facilities;