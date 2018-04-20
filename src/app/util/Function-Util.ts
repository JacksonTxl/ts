export class TestUtil {
  static canvasUtil () {
    const temp = {'a': 1, 'b': 2};
    const m = Reflect.getPrototypeOf(temp);
    const n = Reflect.get({'a': 1, 'b': 2}, 'a');
    const l = Reflect.set(temp, 'testKey', 'testValue');
    const j = Reflect.defineProperty(temp, 'cc', {});
    console.log(temp);
  }
}
