/**
 * 工厂模式
 * 通过 Factory 工程生成 
 * 
 * 为什么要用工厂模式
 * 当你在页面中 多处引用 Product 的时候， 如果Product 名字有修改的时候 只需要在Factory里面修改一个地方就行
 * 为什么 Product 为什么会修改呢？
 * 
 * 比如多人开发 合并的时候 有相同命名冲突的时候 ，Product 已经被用了，必须要修改了
 */

class Product {
    constructor(private name: String) {
    }

    getName() {
        console.log(this.name);
        return this.name;
    }
}


class Factory {
    create(name: String) {
        return new Product(name);
    }
}

/** 测试 **/
const factory = new Factory();

let p1 = factory.create('张三');
p1.getName();

let p2 = factory.create('李四');
p2.getName();

let p3 = factory.create('王五');
p3.getName();
/* 方法都调用成功了 */
