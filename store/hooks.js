import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (...args) => savedCallback.current?.(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;
