/**
 * Created by jljsj on 16/2/22.
 */

export function load(vars) {
  function noop() {
  }
  const _onUpdate = vars.onUpdate || noop;
  const _onComplete = vars.onComplete || noop;
  let loadNum = 0;
  const data = vars.data;

  function getLoad() {
    const src = data[loadNum].src;
    const img = new Image();
    img.onload = img.onerror = function () {
      _onUpdate(loadNum);
      loadNum++;
      if (loadNum >= data.length) {
        _onComplete();
      } else {
        getLoad();
      }
    };
    img.src = src;
  }

  getLoad();
}
