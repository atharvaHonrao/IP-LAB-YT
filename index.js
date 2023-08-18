class parent {
    method(){
        console.log("hi there i am parent")
    }
}
class child extends parent{
    method2(){
        console.log("hi this is child")
    }
}
class child2 extends child{
    method3(){
        console.log("hi this is child2")
    }
}
y = new child2()
x = new child()

// y.method2()
y.method()
y.method3()

x.method()
// x.method3()