export default function makeACopy(obj) {
  if(obj === null || typeof obj !== 'object') return obj;

  if(Array.isArray(obj)) {
    return obj.map(value => makeACopy(value));
  }

  if(obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if(obj instanceof Object) {
    const newObj = {};
    for(const key of Object.keys(obj)) {
      newObj[key] = makeACopy(obj[key]);
    }
    return newObj;
  }

  return obj;
}