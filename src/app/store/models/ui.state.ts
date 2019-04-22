export interface UiState {
  loading: boolean;
}
export interface AppUiState {
  ui: UiState;
}
export const appStateUi: AppUiState = {
  ui: {
    loading: false
  }
};
