import { Review } from "./Review.interface"

// key for storage all reviews on books
export enum LocalStorageKey {
  APP_STATE = 'APP_STATE',
}

// Define a wrapper for multiple review
export type ReviewListType = Review[]

export interface AppState {
  reviewList: ReviewListType
}

// Define a blank/empty state for reviews
export const BlankAppState: AppState = {
  reviewList: [],
}

// try to load local state if none it will load our BlankState to 1st time
export function LoadingAppStateFromLocalStorage(BlankAppState: AppState): AppState {
  const stringifiedJSON: string | null = window.localStorage.getItem(
    LocalStorageKey.APP_STATE
  )
  if (typeof stringifiedJSON === 'string') {
    const Loaded: AppState = JSON.parse(stringifiedJSON)
    return Loaded
  }

  return BlankAppState
}