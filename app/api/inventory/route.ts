import { NextResponse } from "next/server"

// Mock data - in a real application, this would come from a database
const inventoryData = [
  {
    productId: "PRD-001",
    name: "Wireless Headphones",
    category: "Electronics",
    warehouse: "East Coast",
    quantity: 245,
    status: "In Stock",
    lastUpdated: "2025-04-02",
  },
  {
    productId: "PRD-002",
    name: "Smart Watch",
    category: "Electronics",
    warehouse: "West Coast",
    quantity: 78,
    status: "In Stock",
    lastUpdated: "2025-04-01",
  },
  {
    productId: "PRD-003",
    name: "Laptop Stand",
    category: "Office Supplies",
    warehouse: "Central",
    quantity: 12,
    status: "Low Stock",
    lastUpdated: "2025-03-30",
  },
  {
    productId: "PRD-004",
    name: "Wireless Keyboard",
    category: "Electronics",
    warehouse: "East Coast",
    quantity: 0,
    status: "Out of Stock",
    lastUpdated: "2025-03-28",
  },
  {
    productId: "PRD-005",
    name: "Office Chair",
    category: "Furniture",
    warehouse: "West Coast",
    quantity: 34,
    status: "In Stock",
    lastUpdated: "2025-03-25",
  },
]

export async function GET() {
  // In a real application, you would fetch this data from a database
  return NextResponse.json(inventoryData)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.category || !data.warehouse || data.quantity === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would insert this data into a database
    // and generate a proper product ID
    const newProduct = {
      productId: `PRD-${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
      name: data.name,
      category: data.category,
      warehouse: data.warehouse,
      quantity: data.quantity,
      status: data.quantity > 20 ? "In Stock" : data.quantity > 0 ? "Low Stock" : "Out of Stock",
      lastUpdated: new Date().toISOString().split("T")[0],
    }

    // In a real application, you would add this to the database
    // inventoryData.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}

