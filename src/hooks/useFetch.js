import { useEffect, useState } from 'react';

/**
 * @typedef Result
 * @type {Object}
 * @property {RequestStatus} status
 * @property {any} [data]
 * @property {Error} [error]
 */

/**
 * @enum {string}
 */
const RequestStatus = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  DONE: 'DONE',
};

/**
 * @returns {Result}
 */
function initState() {
  return { status: RequestStatus.LOADING };
}

/**
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 * @returns {Result}
 */
function useFetch(input, init) {
  const [state, setState] = useState(initState());

  useEffect(() => {
    setState(initState());

    const controller = new AbortController();

    function handleError(error) {
      setState({ status: RequestStatus.ERROR, error });
    }

    fetch(input, { ...init, signal: controller.signal })
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          response
            .json()
            .then((data) => {
              setState({ status: RequestStatus.DONE, data });
            })
            .catch(handleError);
        } else {
          handleError(new Error(`${response.status}: ${response.statusText}`));
        }
      })
      .catch(handleError);

    return () => {
      controller.abort();
    };
  }, [input, init]);

  return state;
}

useFetch.Status = RequestStatus;

export { useFetch };
