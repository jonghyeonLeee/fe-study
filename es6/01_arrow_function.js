/*
    01 에로우 펑션

    ** function, return keyword, 중괄호가 필요하지 않다.
 */

// AS-IS
function favouriteFood1() {
    return "eat pizza!!"
}

// TO-BE
const favouriteFood2 = () => "eat pizza!!"

console.log(favouriteFood1())
console.log(favouriteFood2())


/*
    ** This 범위
    ** 선언되는 위치를 기준으로 this를 세팅한다.
 */


// globalThis에 "num"을 설정하여 사용하지 않는 방법을 표시합니다.
this.num = 40;

const objFunction = {
    num: 100,
};

// "this"에서 작동하는 간단한 기존 함수
const addFunction = function (a, b, c) {
    return this.num + a + b + c;
};

console.log(addFunction.call(objFunction, 1, 2, 3)); // 106
console.log(addFunction.apply(objFunction, [1, 2, 3])); // 106
const boundAddFunction = addFunction.bind(objFunction);
console.log(boundAddFunction(1, 2, 3)); // 106

const objArrow = {
    num: 100,
};

// 화살표 함수
const addArrow = (a, b, c) => this.num + a + b + c

console.log(addArrow.call(objArrow, 1, 2, 3)); // 48
console.log(addArrow.apply(objArrow, [1, 2, 3])); // 48
const boundAddArrow = addArrow.bind(objArrow);
console.log(boundAddArrow(1, 2, 3)); // 48

/*
    2번째 예시
 */

const setTimeoutFunctionObj = {
    count: 10,
    doSomethingLater() {
        setTimeout(function () {
            // 함수는 window 범위에서 실행됩니다.
            this.count++;
            console.log(this.count);
        }, 300);
    },
};

setTimeoutFunctionObj.doSomethingLater(); // "count" 속성이 window 범위에 없기 때문에 "NaN"을 기록합니다.


const setTimeoutArrowObj = {
    count: 10,
    doSomethingLater() {
        // 메서드 구문은 "this"를 "obj" 컨텍스트에 바인딩합니다.
        setTimeout(() => {
            // 화살표 함수에는 자체 바인딩이 없고
            // 함수 호출로서 setTimeout은 바인딩 자체를 생성하지 않으므로
            // 외부 메서드의 "obj" 컨텍스트가 사용됩니다.
            this.count++;
            console.log(this.count);
        }, 300);
    },
};

setTimeoutArrowObj.doSomethingLater(); // 11을 기록합니다.
