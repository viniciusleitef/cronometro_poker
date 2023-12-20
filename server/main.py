from fastapi import FastAPI, HTTPException, status
import models.model as model
from schemas.user import UserSchema
from database import engine, SessionLocal
from controller.user import create_user_db, get_user_by_name_db, update_user_by_id, delete_user_by_id

model.Base.metadata.create_all(bind=engine)

db = SessionLocal()

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/user/{user_name}")
async def get_user_by_name(user_name:str):
    return get_user_by_name_db(user_name, db)

@app.post("/post_user", response_model=UserSchema, status_code=status.HTTP_201_CREATED)
async def root(user: UserSchema):
    return create_user_db(user, db)

@app.put('/user/update/{user_id}', response_model=UserSchema, status_code=status.HTTP_200_OK)
async def update_client(user_id: int, user_data: UserSchema):
    user = update_user_by_id(user_id, user_data, db)
    return user

@app.delete('/user/delete/{user_id}', response_model=UserSchema, status_code=status.HTTP_200_OK)
def delete_client(user_id: int):
    user = delete_user_by_id(user_id, db)
    return user