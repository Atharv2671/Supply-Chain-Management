from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

import models, schemas
from database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Supply Chain Backend")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"message": "Supply Chain Backend Running"}

@app.post("/inventory", response_model=schemas.InventoryResponse)
def add_inventory(item: schemas.InventoryCreate, db: Session = Depends(get_db)):
    db_item = models.Inventory(
        item_name=item.item_name,
        quantity=item.quantity,
        supplier=item.supplier
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@app.get("/inventory")
def get_inventory(db: Session = Depends(get_db)):
    return db.query(models.Inventory).all()
@app.post("/orders", response_model=schemas.OrderResponse)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):

    inventory_item = db.query(models.Inventory).filter(
        models.Inventory.item_name == order.item_name
    ).first()

    if not inventory_item:
        return {"error": "Item not found in inventory"}

    if inventory_item.quantity < order.quantity:
        return {"error": "Insufficient stock"}

    inventory_item.quantity -= order.quantity

    new_order = models.Order(
        item_name=order.item_name,
        quantity=order.quantity
    )

    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    return new_order
