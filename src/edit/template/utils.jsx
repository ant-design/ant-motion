export function dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}

export function getEditID(editId) {
  const ids = editId.split('-');
  const id = ids[0];
  const bIds = ids[0].split('_');
  let childId = ids[1] || '';
  childId = childId ? `_${childId}` : '';
  childId = `${bIds[0]}${bIds[1]}${childId}`;
  return { id, childId };
}

export function createChildrenObject(object, keys) {
  const obj = object;
  let t = {};
  keys.forEach((key, i) => {
    if (i) {
      t[key] = t[key] || {};
      t = t[key];
    } else {
      obj[key] = obj[key] || {};
      t = obj[key];
    }
  });
  return t;
}

export function getChildrenObject(object, keys) {
  const obj = object;
  let t;
  keys.forEach((key, i) => {
    if (i) {
      t = t[key] || {};
    } else {
      t = obj[key] || {};
    }
  });
  return t;
}
