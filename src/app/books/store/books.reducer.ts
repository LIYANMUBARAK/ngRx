
import { createReducer } from "@ngrx/store"
import { Book } from "./book"

export const initialState :ReadonlyArray<Book>=[{
    "id":1,
    "title":"testing name 1",
    "cost": 2499}] 

export const bookReducer = createReducer(
    initialState
)
