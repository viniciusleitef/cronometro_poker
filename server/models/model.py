from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from database import Base

class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    name = Column(String(55), nullable=False)
    email = Column(String(55), nullable=False ,unique=True)
    password = Column(String(55), nullable= False)
    saldo = Column(Float, nullable=False)

class Rank(Base):
    __tablename__ = 'rank'

    id = Column(Integer, primary_key=True)
    VT3 = Column(Integer)
    VT6First = Column(Integer)
    VT6Second = Column(Integer)
