from pydantic import BaseModel

class InventoryCreate(BaseModel):
    item_name: str
    quantity: int
    supplier: str

class InventoryResponse(InventoryCreate):
    id: int

    class Config:
        from_attributes = True
class OrderCreate(BaseModel):
    item_name: str
    quantity: int

class OrderResponse(OrderCreate):
    id: int

    class Config:
        from_attributes = True
