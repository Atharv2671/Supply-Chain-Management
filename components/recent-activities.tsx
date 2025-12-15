import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Clock, Package, TruckIcon } from "lucide-react"

export default function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest updates from your supply chain operations.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-100 p-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Shipment SHP-1003 delivered successfully</p>
              <p className="text-xs text-muted-foreground">Today at 10:25 AM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-100 p-2">
              <TruckIcon className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">New shipment SHP-1006 created</p>
              <p className="text-xs text-muted-foreground">Today at 9:15 AM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-yellow-100 p-2">
              <Clock className="h-4 w-4 text-yellow-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Shipment SHP-1005 delayed due to weather</p>
              <p className="text-xs text-muted-foreground">Yesterday at 4:30 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-red-100 p-2">
              <AlertCircle className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Low stock alert for Laptop Stand (PRD-003)</p>
              <p className="text-xs text-muted-foreground">Yesterday at 2:45 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-100 p-2">
              <Package className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Inventory updated for Wireless Headphones</p>
              <p className="text-xs text-muted-foreground">Yesterday at 11:30 AM</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

