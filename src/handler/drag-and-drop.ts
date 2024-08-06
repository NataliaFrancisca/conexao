import { RefObject } from 'react';

const allowDrop = (event: React.DragEvent<HTMLElement>) => {
  event.preventDefault();
};

const handleDrop = (
  event: React.DragEvent<HTMLElement>,
  action: (id: string) => void,
) => {
  event.preventDefault();

  const data = event.dataTransfer.getData('text/plain');
  action(data);
};

const preventDropInsideGroup = (event: React.DragEvent<HTMLElement>) => {
  event.stopPropagation();
};

const handleDragStart = (
  event: React.DragEvent<HTMLElement>,
  id: string,
  ref: RefObject<HTMLElement>,
) => {
  event.dataTransfer.setData('text/plain', id);

  if (ref.current) {
    ref.current.classList.add('__dragging');
  }
};

const handleDragEnd = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.classList.remove('__dragging');
  }
};

export {
  allowDrop,
  handleDrop,
  preventDropInsideGroup,
  handleDragStart,
  handleDragEnd,
};
