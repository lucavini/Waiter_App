/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';
import debug from '~Shared/Lib/Debug';
import eventEmitter from '~Shared/Lib/EventEmitter';

function useRequest<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const loadRequest = useCallback(
    async (callbackRequest: () => Promise<any>, hasEmitter = false) => {
      setLoading(true);
      setError(null);

      try {
        const response = await callbackRequest();
        setData(response);
        debug.data(callbackRequest.name, response);

        hasEmitter
          ? eventEmitter.dispatch('success', callbackRequest.name, {
            title: 'sucesso',
            message: 'requisição carregada com sucesso',
          })
          : null;

      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          debug.error(callbackRequest.name, err);
        }

        hasEmitter
          ? eventEmitter.dispatch('error', callbackRequest.name, {
            title: 'error',
            message: 'ocorreu um erro ao carregar a requisição',
          })
          : null;

      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { data, loadRequest, loading, error };
}

export default useRequest;
