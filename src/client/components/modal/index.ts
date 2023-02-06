const ahh = () => {
  console.log("哈哈哈哈哈哈");
};
@testAK(false)
class soldier {
    constructor(){
      console.log(124)
    }
}
function testAK(isTestAk: Boolean){
  return function ak(target: any) {
    console.log(target)
    target.AK = isTestAk;
  }
}
// console.log(soldier.AK)

export { ahh, soldier };
