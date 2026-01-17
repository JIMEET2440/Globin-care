"""
Quick Start Guide for Database Setup
"""

# SETUP INSTRUCTIONS

# 1. Create .env file in backend directory
# Copy .env.example to .env and update with your MySQL credentials:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=globin_care

# 2. Install required packages
# pip install mysql-connector-python sqlalchemy pymysql python-dotenv pydantic[email]

# 3. Test connection
# python database.py

# 4. Create tables
# python -c "from database import create_tables; create_tables()"

# 5. Run FastAPI server
# uvicorn main:app --reload

## FILE STRUCTURE:
## 
## config.py           - Database configuration and settings
## database.py         - Connection setup and SQLAlchemy engine
## models.py           - ORM models (table definitions)
## schemas.py          - Pydantic schemas for request/response validation
## .env.example        - Environment variables template
## .env                - Actual environment variables (create from example)

## USAGE IN FASTAPI:

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import get_db, create_tables
from models import Customer
from schemas import CustomerCreate, CustomerResponse

app = FastAPI()

# Create tables on startup
@app.on_event("startup")
def startup():
    create_tables()

# Example endpoint
@app.post("/customers/", response_model=CustomerResponse)
def create_customer(customer: CustomerCreate, db: Session = Depends(get_db)):
    db_customer = Customer(**customer.dict())
    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)
    return db_customer

@app.get("/customers/{customer_id}", response_model=CustomerResponse)
def get_customer(customer_id: int, db: Session = Depends(get_db)):
    return db.query(Customer).filter(Customer.id == customer_id).first()
