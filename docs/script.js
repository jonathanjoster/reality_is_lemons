const lemons_en = `
I just gotta be honest (haha) 

I don't like the way she dresses
Or the way that she pronounce her s's
I'm just saying what they're thinking
Cuz they don't they don't know you no like I know you no

I’m not tryna be pretentious
But we know what we had was the bestest
Now you're hiding behind white picket fences
And she know she don't know you no like I know you no

Know that I'm supposed to be
Nice and everything
On some feminism sh*t
ya
Know that it's low of me
Maybe it's jealousy
Maybe it's not

I just think she's kinda ugly
I'm not trying to be cruel
but the way she calls you hubby
Before the alter alters you

And you know I'm not tryna waste your time
But I know if I had some
I would change your mind

I just think she's kinda ugly
And that she's not the one for you

---
 
Let not get this confused
Look at her and look at you
She'll mess up your genetic pool
I would never do that I would just improve that
 
Know that I'm supposed to be
Nice and everything
On some feminism sh*t
ya
Know that it's low of me
Maybe it's jealousy
Maybe it's not
 
I just think she's kinda ugly
I'm not trying to be cruel
but the way she calls you hubby
Before the alter alters you
 
And you know I'm not tryna waste your time
But I know if I had some
I would change your mind

I just think she's kinda ugly
And that she's not the one for you
for you

---
 
I don’t know if I’m more like concerned or confused
That’s the thing
It just doesn’t make any sense
But why (haha), why would do that though like

I just think she's kinda ugly
I'm not trying to be cruel
Don’t need to, why?
but the way she calls you hubby
It just seems unnecessary to me that’s all
Before the alter alters you
I’m not even mad about it
Not mad
I’m not even mad about it
 
And you know I'm not tryna waste your time
But I know if I had some
I would change your mind
 
I just think she's kinda ugly
And that she's not the one for you
`

// いけ好かない
const lemons_ja = `
正直に言わせて 🤭

彼女の服装も嫌いだし
Sの発音の仕方も好きじゃないんだ
ただ皆が思ってることを言ってるだけ
彼らはあなたを知らないから、私が知ってるようには知らないんだ

偉そうに見せたくはないけど
私たちが持ってたものが一番だったことは分かってる
今や白い塀の中に隠れてる
彼女はあなたを知らないわ、私が知ってるようには知らないんだ

私がやらなきゃいけないのは
優しく振る舞うこととか
フェミニズム的なことを言うこととか
うん
下衆なことだって分かってるよ
嫉妬なのかもしれない
でもそうでないかもしれない

彼女がちょっといけ好かない
冷酷になりたいわけじゃないんだけど
あなたをハビって呼ぶ言い方とか
結婚式の前で結婚を台無しにするんじゃないかって

でも、あなたの時間を無駄にするつもりじゃない
でも、もし時間があったら
あなたの考えを変えさせたいんだ

彼女がちょっといけ好かない
そして、彼女はあなたにはふさわしくないと思うんだ

---

冷静に考えてみて
彼女を見て、自分を見て
彼女はあなたの遺伝子プールを台無しにする
私はそんなことはしない、もっと上手にしてみせるわ

私がやらなければならないことは
優しく振る舞うこととか、
フェミニズム的なことを言うこととか
うん
それは下品なことかもしれない
嫉妬かもしれない
でもそれは違うかもしれない

彼女がちょっといけ好かない
冷酷になりたいわけじゃないんだけど
あなたをハビって呼ぶ言い方とか
あなたが変わってしまう前に

あなたの時間を無駄にするつもりはない
でも、私に時間があれば
あなたの考えを変えさせたい

彼女がちょっといけ好かない
あなたにふさわしくないと思うの
まったくね

---

私は心配か混乱しているのかわからないわ
それが問題なの
これらの感情は無意味に感じるの
でも、なぜそんなことをするのかしら

彼女がちょっといけ好かない
意地悪をしようとしているわけじゃないわ
なぜだろう？こんなことを言う必要があるのかしら
でも、彼女がハビと呼ぶ言い方は
私には必要ないように思えるわ
あなたが変わってしまう前に
私は怒っていないのよ
本当に
怒ってなんかいないわ

あなたの時間を無駄にするつもりはないと分かっているけれど
私に時間があれば
あなたの考えを変えさせたい

彼女がちょっといけ好かないし、
あなたにふさわしくないと思うの
`

document.querySelector('#leftLyrics').innerText = lemons_en;
document.querySelector('#rightLyrics').innerText = lemons_ja;

const ja_txt = document.querySelector('#rightLyrics')
ja_txt.innerHTML = ja_txt.innerHTML + '<br><span>Translation lyrics by ChatGPT & me.</span>'