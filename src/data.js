export const data = [
    {"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(typeof null)</pre></pre>", "q" : ['null','string','object','array','undefined'],"ra": "object"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(typeof [1,2,3])</pre>", "q" : ['array','number','string','null','object'],"ra": "object"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(typeof (function abc() { })())</pre>", "q" : ['function','undefined','object','Error','null'],"ra": "undefined"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(1 + '2')</pre>", "q" : ['3','Error','12','1+2','4'],"ra": "12"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(true + 1)</pre>", "q" : ['true1','11','Error','2','empty string'],"ra": "2"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(null + 1)</pre>", "q" : ['1','2','0','11','01'],"ra": "1"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(undefined + 1)</pre>", "q" : ['Error','1','2','undefined1','NaN'],"ra": "NaN"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log([] + [])</pre>", "q" : ['2','Error','object','arrayarray','empty string'],"ra": "empty string"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log('2' * 2)</pre>", "q" : ['4','22','Error','1','false'],"ra": "4"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(null || 'hello')</pre>", "q" : ['hello','null','0','1','true'],"ra": "hello"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(undefined || 0 || false)</pre>", "q" : ['true','false','0','1','undefined'],"ra": "false"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(false && 'hello')</pre>", "q" : ['hello','1','false','0','true'],"ra": "false"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(true || 0 && false)</pre>", "q" : ['true','0','false','1','error'],"ra": "true"},
{"title": "<h3>Що виведе в консоль?</h3><pre><code class='language-js'>console.log(!undefined && true)</pre>", "q" : ['undefined','1','0','true','false'],"ra": "true"},
    ]



