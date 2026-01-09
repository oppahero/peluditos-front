export interface PaginatedResponse<T> {
  data: {
    items: T[];
    total: number;
    page: number;
    limit: number;
    lastPage: number;
  };
  success: boolean;
}
