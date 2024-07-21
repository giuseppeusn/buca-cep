export type ResponseType<T> = {
  data: {
    status: boolean;
    message: string;
    result: T;
  };
};
