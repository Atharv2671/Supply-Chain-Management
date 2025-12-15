import { NextResponse } from "next/server"

// Mock data - in a real application, this would come from a database
const shipmentsData = [
  {
    shipmentId: "SHP-1001",
    origin: "East Coast",
    destination: "Central",
    carrier: "FastFreight",
    departure: "2025-04-02",
    eta: "2025-04-05",
    status: "In Transit",
  },
  {
    shipmentId: "SHP-1002",
    origin: "West Coast",
    destination: "East Coast",
    carrier: "ExpressLogistics",
    departure: "2025-04-01",
    eta: "2025-04-06",
    status: "In Transit",
  },
  {
    shipmentId: "SHP-1003",
    origin: "Central",
    destination: "West Coast",
    carrier: "FastFreight",
    departure: "2025-04-03",
    eta: "2025-04-04",
    status: "Delivered",
  },
  {
    shipmentId: "SHP-1004",
    origin: "East Coast",
    destination: "International",
    carrier: "GlobalShip",
    departure: "2025-04-01",
    eta: "2025-04-10",
    status: "Customs",
  },
  {
    shipmentId: "SHP-1005",
    origin: "West Coast",
    destination: "Central",
    carrier: "ExpressLogistics",
    departure: "2025-04-03",
    eta: "2025-04-05",
    status: "Delayed",
  },
]

export async function GET() {
  // In a real application, you would fetch this data from a database
  return NextResponse.json(shipmentsData)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.origin || !data.destination || !data.carrier || !data.departure || !data.eta) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would insert this data into a database
    // and generate a proper shipment ID
    const newShipment = {
      shipmentId: `SHP-${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(4, "0")}`,
      origin: data.origin,
      destination: data.destination,
      carrier: data.carrier,
      departure: data.departure,
      eta: data.eta,
      status: "Pending",
    }

    // In a real application, you would add this to the database
    // shipmentsData.push(newShipment)

    return NextResponse.json(newShipment, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create shipment" }, { status: 500 })
  }
}

