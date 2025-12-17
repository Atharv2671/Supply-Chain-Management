from sqlalchemy import Column, Integer, String
from database import Base

class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)
    item_name = Column(String, index=True)
    quantity = Column(Integer)
    supplier = Column(String)


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    item_name = Column(String)
    quantity = Column(Integer)
