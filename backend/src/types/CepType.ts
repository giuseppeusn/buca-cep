export type CepType = {
  code: string;
  address: string;
  district: string;
  city: string;
  state: string;
};

export type CepApiType = {
  status: number;
  ok: boolean;
  code: string;
  state: string;
  city: string;
  district: string;
  address: string;
  message?: string;
  statusText: string;
};
