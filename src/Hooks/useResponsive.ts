import { useReducer, useEffect } from 'react';

type State = {
  width: number;
  aspectRatio: number;
};

type Action =
  | { type: 'SET_WIDTH'; payload: number }
  | { type: 'SET_ASPECT_RATIO'; payload: number };

const initialState: State = {
  width: window.innerWidth,
  aspectRatio: 150,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_WIDTH':
      return { ...state, width: action.payload };
    case 'SET_ASPECT_RATIO':
      return { ...state, aspectRatio: action.payload };
    default:
      return state;
  }
};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const useResponsive = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const updateWidthAndAspectRatio = () => {
      const width = window.innerWidth;

      dispatch({ type: 'SET_WIDTH', payload: width });

      let aspectRatio;
      if (width >= breakpoints.xxl) {
        aspectRatio = 150;
      } else if (width >= breakpoints.xl) {
        aspectRatio = 150;
      } else if (width >= breakpoints.lg) {
        aspectRatio = 150;
      } else if (width >= breakpoints.md) {
        aspectRatio = 75;
      } else if (width >= breakpoints.sm) {
        aspectRatio = 100;
      } else {
        aspectRatio = 150;
      }

      dispatch({ type: 'SET_ASPECT_RATIO', payload: aspectRatio });
    };

    updateWidthAndAspectRatio();
    window.addEventListener('resize', updateWidthAndAspectRatio);

    return () => {
      window.removeEventListener('resize', updateWidthAndAspectRatio);
    };
  }, []);  // <-- Make sure to include an empty dependency array here.

  return state;
};

export default useResponsive;  // <-- Make sure you're exporting it so you can use it in other components
