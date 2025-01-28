/**
 * const,letなどの変数宣言
 */
// // まずval
// var val1 = "var変数";
// console.log(val1);
// val1 = "var変数を上書き";
// console.log(val1);
// var val1 = "var変数を再宣言";
// // varでは変数の上書きも再宣言も可能なので、チーム開発だと勝手に変えられてしまうなど問題が多かった

// // 次にlet
// let val2 = "let変数";
// console.log(val2);
// val2 = "var変数を上書き";
// console.log(val2);
// let val2 ="let変数の再宣言はできない";

// // 最後にconst
// const val3 = "const変数";
// console.log(val3);
// val3 = "const変数の上書きはできない、もちろん再宣言もできない（定数）";
// console.log(val3);

// // ただし、constで定義したオブジェクトのプロパティの変更は可能
// // 下みたいなことはできるよね
// const val4 = {
//     name: "じゃけぇ",
//     age: 31
// };
// val4.name = "jak";

// // constで定義した配列のプロパティの変更も可能
// // 下みたいなことはできるよね
// const val5 = ["dog","cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// 結論：Reactでも、ほぼほぼconst。





/**
 * テンプレート文字列。文字列にJSの変数を埋め込めるようになった
 */
// const name = "あかり";
// const age ="21";
// // 従来
// const message1 = "私の名前は" + name + "です。";
// console.log(message1);
// // 新しい記法　バッククオート``と${}
// const message2 = `私の名前は${name}です。`;
// console.log(message2);





/**
 * アロー関数
 */
// // 従来
// const func1 = function (str){
//     return str;
// };
// console.log(func1("func1です。"));
// // アロー関数
// const func2 = (str) => {
//     return str;
// };
// console.log(func2("func2です。"));

// // 引数1つならカッコ()なくてもいいし、返却が単一行なら{}とreturnもいらない
// const func3 = str => str;
// console.log(func3("func3です。"));

// // 足し算関数addを書いてみよう！自分で書けた！
// const add = (num1,num2) => num1+num2;
// const result = add(4,9);
// console.log(result);

// // returnが省略できる関数でreturnがオブジェクトになって改行が入るときとかは、戻り値を()で囲む！！
// // ぱっと見わかりにくいので注意。Reactでよく出てくる記法
// const func4 = (num1,num2) => ({
//     hoge: num1,
//     fuga: num2
// });
// console.log(func4(10,20));





/**
 * 分割代入。配列やオブジェクトに対して使える
 */
// // オブジェクトの分割代入
// // オブジェクトmyProfileを用意、このプロパティを参照しながら文章を画面に出していくシーンを想定
// const myProfile = {
//     name: "じゃけぇ",
//     age: 31
// };

// 従来
// const message1 = `名前は${myProfile.name}で年齢は${myProfile.age}`;
// console.log(message1);

// // 毎回「myProfile.name」「myProfile.age」とか書いてくのだるくない？
// // 分割代入の出番。それぞれのプロパティを直接取り出すイメージ
// // オブジェクトを取り出すので{}
// // (たぶん、nameとageという定数を同時に作るとともにオブジェクトのプロパティからそれぞれを代入するってことだと思う)
// const {name, age} = myProfile;
// const message2 = `名前は${name}で年齢は${age}`;
// console.log(name);
// console.log(message2);

// // 配列の分割代入
// const myProfile = ["じゃけぇ", 31];
// // 従来
// const message1 = `名前は${myProfile[0]}で年齢は${myProfile[1]}`;
// console.log(message1);
// // 分割代入
// // 基本さっきと同じだが、配列を取り出すので[]。
// // 配列にはプロパティ名とかないので、取り出す時に自分で勝手に名前つける！！
// const [name,age] = myProfile;
// const message2 = `名前は${name}で年齢は${age}`;
// console.log(message2);





/**
 * デフォルト値（引数や分割代入の時使う）
 */
// // 関数の引数に使うデフォルト値
// // 例えば、この関数、引数ある前提だけど、もし引数なかったらどうする？
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");
// // nameにデフォルトの値を設定する
// const sayHello2 = (name="ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello2();

// // 分割代入に使うデフォルト値
// const myProfile = {
//     age: 31
// };
// // nameプロパティがないけど取り出そうとしちゃったら？
// const {age, name} = myProfile;
// console.log(age);
// console.log(name); // undefinedになっちゃう
// // 取り出す時のnameにデフォルトの値を設定する。分割代入の初期値って感じ
// const {age, name = "ゲスト"} = myProfile;
// console.log(age);
// console.log(name);

// プログラムを安定的に動作させるためにデフォルト値大事だね！





/**
 * オブジェクトの省略記法
 */
// // 変数に入れている値を使ってオブジェクトを定義したい時に使う
// // 下の例みたいに、プロパティ名と変数名が同じなときは…
// const name = "じゃけぇ";
// const age = 31;
// const myProfile = {
//     name: name,
//     age: age
// };
// console.log(myProfile);
// // これでいい！
// const myProfile2 = {
//     name,
//     age
// };
// console.log(myProfile2);
// // こうなってくるとなんか分割代入の記法の逆みたいに見えて混乱するから、知っておこうね！！
// const myProfile3 = { name, age };
// console.log(myProfile3);





/**
 * スプレッド構文 ... 配列やオブジェクトで使う
 */
// 使い方が色々ある

// // まず、配列の展開としてスプレッド構文を使う方法
// const arr1 = [1, 2];
// console.log(arr1); // 出力は[1,2]
// console.log(...arr1); // 出力は 1 2
// // 配列の前に...をつけると、配列の中身を順番に処理して展開していってくれる

// // 例をもう一つ
// const sumFunc=(num1,num2)=>console.log(num1+num2);
// // 従来
// sumFunc(arr1[0],arr1[1]);
// // スプレッド関数
// sumFunc(...arr1);
// // 関数sumFuncが必要とする二つの引数を、配列から順番に取り出して当てはめていってくれる！
// // 「.(じゅん).(ばんに).(しょりする)」って脳内解釈しよ


// // 次に、まとめるためにスプレッド構文を使う方法
// // 配列の分割代入する時とかに使う
// const arr2 = [1,2,3,4,5];
// // 分割代入。とりあえず最初の値はnum1として、二つ目はnum2として取り出したいけど、あとはまとめてarr3として取り出したい
// const[num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);


// // 次は、配列のコピーや結合でスプレッド構文を使う方法。これが一番多いかな
// const arr4 = [10,20];
// const arr5 = [30,40];
// // arr4と全く同じ配列をコピーしarr6を作る
// const arr6 = [...arr4]; // 一旦展開してまた配列にしてる感じ
// console.log(arr6);
// // arr4とarr5をくっつけてarr7を作る
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// // const arr8 = arr4;ではダメなのか？
// // →だめ。arr8の要素を変更したらarr4の要素も変わっちゃう。同じところを参照しちゃうから。
// // (面倒でも一旦展開して新しく作ろうねってことだね。全く別物として作る。)





/**
 * mapやfilterを使った配列の処理
 */
// // 配列を順番に表示したい
// const nameArr = ["田中","山田","じゃけぇ"];
// // 従来はfor文
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// // めんどいからmap使う。配列名.map(アロー関数(引数))
// // アロー関数の引数には配列から順番に取り出された要素が入りつつループ
// nameArr.map((name)=>{
//     console.log(name);
// });
// // 省略するならこうだね。楽！
// nameArr.map((name)=>console.log(name));
// // ただループするだけじゃなく、関数の中でreturnすることで、新しい配列を生み出せる
// // 全部値を２倍した配列、とかね
// // こうも書けるね（一応）
// const nameArr2 = nameArr.map((name)=>{
//     return name;
// });
// console.log(nameArr2)


// // filterも使ってみる
// // 配列の要素をフィルタリングして新しい配列を生成する！！
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//     return num % 2 === 1;
// });
// console.log(newNumArr); // [1.3.5]


// // 配列のループといえば、、何番目の要素かって大事
// // 従来のfor文はindexが何番目かを意識した処理を書いていた。
// // 例えば
// const nameArr = ["田中","山田","じゃけぇ"];
// // for (let index = 0; index < nameArr.length; index++) {
// //     console.log(`${index+1}番目は${nameArr[index]}さんです`);
// // }

// // この、配列の「何番目」のデータ取得をmap使ってやるには…
// // 普通に二つ目の引数にindexって入れて使えばOK
// nameArr.map((name, index)=>console.log(`${index+1}番目は${name}さんです`));


// // 練習問題：「じゃけぇ」以外の人にはさん付けにした新しい配列を作って！
// const nameArr = ["田中","山田","じゃけぇ"];
// const newNameArr = nameArr.map((name)=>{
//     if (name === "じゃけぇ"){
//         return name;
//     } else {
//         return name+"さん";
//     }
// });
// console.log(newNameArr);
// // 自分なりにかけた、わーーーーーーい！！！！！
// // name+"さん" は `${name}さん` がスマートではある





/**
 * 三項演算子
 */
// // 使い過ぎには注意だが、if-elseがいらなくなったりするよ。書き方は以下
// // ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// // 三項演算子の使用例1
// const num = 1300;
// // toLocaleStringは数値を３桁区切りのカンマ表示してくれるメソッド
// console.log(num.toLocaleString()); // 1,300
// // ここで、numが数字じゃなく"1300"だとtoLocaleStringがうまく動かないので、三項演算子で気づけるようにする
// typeof　は数値の型を取れる
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値で入力してください";
// console.log(formattedNum);

// // 三項演算子の使用例2
// // 三項演算子は、returnの後に1行で書けるので相性がいい
// const checkSum = (num1,num2) => {
//     return num1+num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(40,50));





/**
 * 論理演算子の本当の意味を知ろう。&&とか||
 */
// // まずtruthy, falsyについて。
// // if文の条件式って、普通に文字列とかも書けるよね。
// // JSは暗黙的に「型の変換」を行ってくれ（やがり）、trueかfalseに変換して勝手に進む。
// // じゃあその場合、何がtrue判定されて何がfalse判定されるのか？
// // "ABC" 0 10 undefined null false NaN "" [] {} それぞれtruthyかfalsyか？
// // 判定プログラム
// const val = NaN;
// if(val){
//     console.log("valはtruthyです");
// } else {
//     console.log("valはfalsyです");
// }
// // 結論：0, undefined, null, false, NaN "" はfalsyで、[]とか{}はtruthy!


// // かつ　と　または　ってあるよね。
// // まずは　|| について。
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2){
//     console.log("1または2はtrueになります");
// }
// if (flag1 && flag2){
//     console.log("1かつ2はtrueになります");
// }

// // じゃあ、この使い方は？
const num_falsy = null;
const num_truthy = 1000;
// const fee = num_falsy || "金額未設定です";
// console.log(fee); // 金額未設定です

// // 何これ？？？？？？
// // 「||」の本当の意味は「左側がtruthyの時その時点で返却する」！！！
// // （左側がfalsyなら右を見て、truthyなら右を返却。できるだけtrueを拾ってあげたい||さん）
// // （両方falsyなら、仕方ない、falseな右側を返すか）
// const fee2 = num_truthy || "金額未設定です"; // 左側がtruthyだから即リターン
// const fee3 = "金額未設定です" || num_truthy; // 左側がtruthyだから即リターン。↑左右逆にしただけなのに結果変わる…
// console.log(fee2); // 1000
// console.log(fee3); // 金額未設定です


// // 次に && について。
// const fee4 = num_truthy && "何か設定されました";
// console.log(fee4); // 何か設定されました
// const fee5 = num_falsy && "何か設定されました";
// console.log(fee5); // null
// // 「&&」の本当の意味は「左側がfalcyの時その時点で返却する」！！！
// // （左側がtruthyなら右を見て、falsyなら右を返却。できるだけfalseを返してやりたい&&さん）
// // （両方truthyなら、仕方ない、trueな右側を返すか）
// const fee6 = true && "あ";
// console.log(fee6); //あ


// Reactでも、特定の条件の時に画面に何か表示する、とかで&&よく使うから説明したよ。






