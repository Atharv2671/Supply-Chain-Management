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
