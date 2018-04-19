export class TestUtil {
  static canvasUtil () {
    const m = Reflect.getPrototypeOf({'a': 1, 'b': 2});
    const n = Reflect.get({'a': 1, 'b': 2}, 'a');
    console.log(n);
  }
}
