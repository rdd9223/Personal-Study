## TypeScript 강의 (with NomadCoder)

### Types in Typescript

```typescript
const name = "nicolas",
age = 24,
gender = "male";

// 여기서의 gender의 ?는 선택적임을 뜻함, 일반적으로는 ?가 없다면 컴파일 에러
const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {}; // 요거 안해주면 TypeScript가 인식을 못함
```

여기에 Type을 첨가해보자

```typescript
// 각 파라메터에 Type을 지정해줌으로써 타입 충돌이나 버그를 예방할 수 있음
// 함수의 리턴 Type을 지정하여 함수의 반환 값을 알 수 있음
const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// 인수에 잘못된 형식의 데이터를 넣으면 허용되지 않는다고 표시함
// 이것은 실수를 유발하지 않게끔 도와준다.
console.log(sayHi('Nicolas', 24, "male"));

export {};
```

결과는 같다.

-   TSC watch

    -   설정 방법

        ```bash
        $ yarn add tsc-watch --dev
        ```

        이후 프로젝트 최상위 디렉토리에서 dist와 src라는 폴더를 만든다.

        그리고 package.json에서 scripts의 value값을 다음과 같이 편집한다.

        ```json
        {
          "scripts": {
            "start": "tsc-watch --onSuccess \" node dist/index.js \" "
          }
        }
        
        ```

        tsconfig.json에서도 include의 value를 다음과 같이 편집한다.

        ```json
        // TypeScript에게 어떻게 JavaScript로 변환하는 지 알려주면서 몇몇 옵션을 줄 것
        {
          "compilerOptions": {
            "module": "commonjs", // node.js를 평범하게 사용하고 다양한 걸 import하거나 export할 수 있게 만드는 것
            "target": "ES2015",	// 어떤버전의 javascript파일로 컴파일 될건지 정하는 것
            "sourceMap": true,  // sourcemap처리 여부
            "outDir": "dist"	// 컴파일된 것들은 dist로 향하게 설정
          },  // 컴파일 되는 과정중에 필요한 파일들 정하는 것
          "include": ["src/**/*"],
          "exclude": ["node_modules"]
        }
        
        ```

        마지막으로 index.ts파일을 src 디렉토리로 옮겨준다.

        이렇게 설정하게 된다면, 모든 TypeScript파일들은 src로 들어가고, 모든 컴파일 된 것들은 dist로 들어가게 된다.

