import { createReducer, on } from '@ngrx/store';

import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;
export const counterReduucer = createReducer()