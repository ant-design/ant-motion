const colorLookup = {
  aqua: 1,
  lime: 1,
  silver: 1,
  black: 1,
  maroon: 1,
  teal: 1,
  blue: 1,
  navy: 1,
  white: 1,
  fuchsia: 1,
  olive: 1,
  yellow: 1,
  orange: 1,
  gray: 1,
  purple: 1,
  green: 1,
  red: 1,
  pink: 1,
  cyan: 1,
  transparent: 1,
};

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
      t = t[key] = t[key] || {};
    } else {
      t = obj[key] = obj[key] || {};
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

export function isColorFuc(v) {
  return /^rgb\(|rgba\(|hex\(/.test(v) ||
    /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(v) ||
    v in colorLookup;
}
