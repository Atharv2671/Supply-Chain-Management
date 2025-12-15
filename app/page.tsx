import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, BoxIcon, ClipboardList, Package, TruckIcon, WarehouseIcon } from "lucide-react"
import InventoryOverview from "@/components/inventory-overview"
import LogisticsOverview from "@/components/logistics-overview"
import RecentActivities from "@/components/recent-activities"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BoxIcon className="h-6 w-6" />
          <span>SupplyChain Pro</span>
        </Link>
        <nav className="ml-auto flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/inventory">Inventory</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/logistics">Logistics</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/reports">Reports</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/settings">Settings</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex gap-4">
              <Button>
                <Package className="mr-2 h-4 w-4" />
                Add Product
              </Button>
              <Button variant="outline">
                <TruckIcon className="mr-2 h-4 w-4" />
                Create Shipment
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <BoxIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">+12 added today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
                <TruckIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">3 arriving today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Warehouses</CardTitle>
                <WarehouseIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Across 4 regions</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="inventory">
            <TabsList>
              <TabsTrigger value="inventory">
                <ClipboardList className="mr-2 h-4 w-4" />
                Inventory
              </TabsTrigger>
              <TabsTrigger value="logistics">
                <TruckIcon className="mr-2 h-4 w-4" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inventory" className="border-none p-0 pt-4">
              <InventoryOverview />
            </TabsContent>
            <TabsContent value="logistics" className="border-none p-0 pt-4">
              <LogisticsOverview />
            </TabsContent>
            <TabsContent value="analytics" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Supply Chain Analytics</CardTitle>
                  <CardDescription>View performance metrics and trends across your supply chain.</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Analytics charts and graphs will appear here
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <RecentActivities />
        </div>
      </main>
    </div>
  )
}

