/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, P> (objA: T, objB: P): T & P {
  return { ...objA, ...objB };
}

export {}