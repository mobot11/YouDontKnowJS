function thisIsAClosure() {
    var b = 2;
    var c = 4;
    (function bar() {
        if (c === 0) {
            return;
        }
        console.log(b,c);
        c --;
        bar();
    })();

}

thisIsAClosure();
