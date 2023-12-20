from sqlalchemy.orm import Session
from schemas.user import UserSchema
from models.model import User
from fastapi import HTTPException

def get_user_by_name_db(user_name, db):
    user = db.query(User).filter(User.name==user_name).all()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def create_user_db(user:UserSchema, db:Session):
    db_user=db.query(User).filter(User.email==user.email).first()
    if db_user is not None:
        raise HTTPException(status_code=400,detail="User already exists")
    
    new_user=User(
        name=user.name,
        email=user.email,
        password=user.password
    )
    new_user.saldo = 0.0
    db.add(new_user)
    db.commit()
    return new_user 

def update_user_by_id(user_id, user_data, db):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    for field, value in user_data.dict().items():
        setattr(user, field, value)

    db.commit()
    db.refresh(user)
    return user

def delete_user_by_id(user_id: int, db: Session):
    
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()
    return user