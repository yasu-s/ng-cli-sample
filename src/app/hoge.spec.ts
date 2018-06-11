describe('hoge', () => {
    it('test1', () => {
        const actual = 1 + 1;
        expect(actual).toBe(2);
    });

    it('test2', () => {
        const actual = 1 + 2;
        expect(actual).toBe(2);
    });

    it('test3', (done: DoneFn) => {
        const fn = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve('hoge');
            }, 100);
        });

        fn.then(data => {
            expect(data).toBe('hoge');
            done();
        }).catch(() => {
            done.fail();
        });
    });
});
