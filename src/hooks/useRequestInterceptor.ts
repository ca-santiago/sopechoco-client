export interface InterceptorEvents<U> {
  ServerError: () => void;
  Error: () => void;
  BadRequest: (messages: string[]) => void;
  OK: (props: U) => void;
  Conflict: () => void;
  Forbidden: () => void;
  Unauthorized: () => void;
  NotFound: () => void;
}

export function useRequestInterceptor<T, U>(
  fn: (props: T) => Promise<Response>,
  events: Partial<InterceptorEvents<U>>,
) {
  return async function (...props: Parameters<typeof fn>) {
    try {
      const res: Response = await fn(...props);
      console.log('res ============================');
      console.log(res.status);
      console.log('res ============================');
      switch (res.status) {
        case 200: {
          events.OK?.(await res.json());
          break;
        }
        case 201:
          events.OK?.(await res.json());
          break;
        case 401:
          events.Unauthorized?.();
          break;
        case 403:
          events.Forbidden?.();
          break;
        case 404:
          events.NotFound?.();
          break;
        case 409:
          events.Conflict?.();
          break;
        default:
          events.Error?.();
          break;
      }
    } catch (err) {
      console.log(err);
      events.ServerError?.();
    }
  };
}
